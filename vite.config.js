// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
// import { terser } from 'rollup-plugin-terser'

const entries = {
	index: resolve(__dirname, 'src/components/index.js'),
};

// const blocks=[
// 	'Box',
// 	'Columns',
// ];
// blocks.forEach((key) => {
// 	entries[`${key}/index`] = resolve(__dirname, `src/components/${key}/index.js`);
// });

function deleteDuplicateDir(filePath) {
	const componentDir = filePath.split('/').slice(-1)[0];

	// 正規表現でパターンを作成
	const regex = new RegExp(`${componentDir}/${componentDir}$`);

	// ファイルパスが指定したパターンと一致するか確認
	if (regex.test(filePath)) {
		// 一致する場合、パス中の最後のコンポーネント名を "index" に置換
		const newPath = filePath.replace(regex, componentDir);
		return newPath;
	}

	// 一致しない場合、元のパスをそのまま返す
	return filePath;
}

export default defineConfig({
	plugins: [
		//react()
		svgr(),
	],
	exportOnly: ['index'],
	build: {
		// target: 'es2015',
		// watch: {
		// 	// https://rollupjs.org/configuration-options/#watch
		// },
		lib: {
			// 複数のエントリーポイントのディクショナリや配列にもできます
			entry: entries,

			// name は公開されているグローバル変数で、formats に 'umd' や 'iife' が含まれている場合に必要です。
			// デフォルトの formats は ['es', 'umd']で、複数のエントリを使用する場合は ['es', 'cjs']
			// name: 'Lism',

			// 適切な拡張子が追加されます
			// fileName: 'index',
			// fileName: ( format, entryName ) => {
			// 	console.log('entryName', entryName);
			// 	// return `${format}/${entryName}/index.js`;
			// 	return `${entryName}.js`;
			// },
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react', 'classnames', 'uuid'],
			output: {
				dir: 'dist',
				// 外部化された依存関係のために UMD のビルドで使用するグローバル変数を提供します
				// globals: {
				// 	React: 'React',
				// },
				// exports: 'named',
				preserveModules: true,
				preserveModulesRoot: 'src',
				entryFileNames: ({ name: fileName }) => {
					//fileName に components が含まれているかチェックする
					if (fileName.indexOf('components') !== -1) {
						// console.log('fileName', fileName);
						// 重複するディレクトリ構造を削除する
						const componentPath = deleteDuplicateDir(fileName);
						return `${componentPath}/index.js`;
					} else {
						return `${fileName}.js`;
					}
					// return `${fileName}/index.js`;
				},
			},
			// plugins: [
			// 	terser({
			// 		compress: false,
			// 		mangle: false,
			// 	})
			// ]
		},

		// rollupOptions: {
		// 	// ライブラリにバンドルされるべきではない依存関係を外部化するようにします
		// 	external: ['vue'],
		// 	output: {
		// 		// 外部化された依存関係のために UMD のビルドで使用するグローバル変数を提供します
		// 		globals: {
		// 			vue: 'Vue',
		// 		},
		// 	},
		// },
	},
});
