/**
 * NOTE: WP_SRC_DIRECTORY: src/gutenberg にセットしてることに注意。
 *
 * {output.path}/{WP_SRC_DIRECTORYからの相対パス} に対して css や block.json が吐き出される。
 * また、WP_SRC_DIRECTORYに指定したフォルダはビルド時に中身がクリーンされる。
 */
process.env.WP_SRC_DIRECTORY = 'src/gutenberg';

const wpScriptsConfigs = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const glob = require('glob');

let entries = {}; // ビルドするファイル群
const src = './src/gutenberg';
entries = {
	'index.js': path.resolve(src, 'index.js'),
	// post_editor: path.resolve(src, 'post_editor.js'),
};

// Memo : ignoreの書き方たぶんあってない
const blocks = glob.sync(src + '/blocks/*/index.js', { ignore: src + '/blocks/_*' });
// const blocks = [
// 	'box',
// 	'flex',
// 	// 'accordion',
// 	// ,....
// ];

blocks.forEach((key) => {
	// console.log('key', key);
	entries[key.replace('src/gutenberg/', '')] = path.resolve(key);
});

/**
 * pluginsのカスタマイズ
 */
// const { plugins, ...defaultConfig } = wpScriptsConfigs;
// const customizedPlugins = plugins.filter((pluginInstance) => {
// 	// ビルド先のファイルを勝手に削除するやつをオフに。
// 	if ('CleanWebpackPlugin' === pluginInstance.constructor.name) {
// 		return false;
// 	}
// 	return true;
// });

// resolve.alias 追加
wpScriptsConfigs.resolve.alias['@'] = path.resolve(__dirname, 'src/');

/**
 * 設定exports
 */
module.exports = {
	...wpScriptsConfigs, //@wordpress/scriptを引き継ぐ
	entry: entries,
	output: {
		path: path.resolve(__dirname, 'dist/gutenberg'),
		filename: '[name]',
	},
	// plugins: customizedPlugins,
	// performance: { hints: false },
};
