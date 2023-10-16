/* eslint no-console: 0 */
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const sass = require('sass');
// const globImporter = require('node-sass-glob-importer');

// postcss関連
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mergeAtRules = require('postcss-merge-at-rules');
// const mqpacker = require('css-mqpacker');

// consoleカラー
const COLOR = {
	red: '\u001b[31m',
	green: '\u001b[32m',
	reset: '\x1b[0m',
};

// 環境変数
const envTYPE = process.env.TYPE || '';

// 引数
const TARGET_DIR = process.argv[2] || '';

(async () => {
	// パス
	let src = 'src/scss';
	let dist = 'dist/css';
	const ignore = ['**/_*.scss'];
	let files = [];

	// const targets = null;
	// if ('blocks' === envTYPE) {
	// 	src = 'src/gutenberg/blocks';
	// 	dist = 'dist/blocks';
	// }

	// TYPE=front
	if ('front' === envTYPE) {
		files = [src + '/front.scss'];
		// ignore = ['**/_*.scss', '**/modules/**', '**/plugins/**', '**/admin/**'];
	} else {
		// TYPE 指定がなければ src内の全scss or 指定フォルダ内の全scssをビルド
		if ('' !== TARGET_DIR) {
			src += '/' + TARGET_DIR;
			dist += '/' + TARGET_DIR;
		}
		files = glob.sync(src + '/**/*.scss', { ignore });
	}

	for (const filePath of files) {
		console.log(COLOR.green + 'sass compile: ' + COLOR.reset + filePath);

		const fileName = filePath.replace(src + '/', '');
		const srcPath = path.resolve(__dirname, src, fileName);
		const distPath = path.resolve(__dirname, dist, fileName).replace('.scss', '.css');

		// dart sass コンパイル
		try {
			const resultCSS = sassCompile(srcPath);

			// postcss実行
			postcss([
				mergeAtRules({
					atRulePattern: /(media|layer|supports|container)/im,
					nest: true,
				}),
				// mqpacker,
				autoprefixer,
				cssnano,
			])
				.process(resultCSS, { from: undefined })
				.then((postcssResult) => {
					writeCSS(distPath, postcssResult.css);
					// if (postcssResult.map) {fs.writeFile('dest/app.css.map', postcssResult.map.toString(), () => true);}
				});
		} catch (error) {
			console.log(COLOR.red + '\n========== ! ERROR ==========' + COLOR.reset);
			console.log(error);
			console.log(COLOR.red + '========== / ERROR ========== \n' + COLOR.reset);
		}
	}
})();

function sassCompile(srcPath) {
	// globImporter() 使うなら レガシー API （ sass.renderSync ） を使う
	// const compressed = sass.renderSync({
	// 	file: srcPath,
	// 	importer: globImporter(),
	// 	outputStyle: 'compressed',
	// });

	const result = sass.compile(srcPath, {
		style: 'compressed',
	});

	return result.css;
}

// 書き出し処理
function writeCSS(filePath, css) {
	const dir = path.dirname(filePath);

	// ディレクトリがなければ作成
	if (!fs.existsSync(dir)) {
		console.log('mkdir ' + dir);
		fs.mkdirSync(dir, { recursive: true });
	}

	// css書き出し
	// console.log('Wrote CSS to ' + filePath);
	fs.writeFileSync(filePath, css);
}
