const wpScriptsConfigs = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

// 対象ファイル
const srcDir = './src/icons';
const entries = {
	index: path.resolve(srcDir, 'index.js'),
	fa: path.resolve(srcDir, 'fa/index.js'),
	io: path.resolve(srcDir, 'io/index.js'),
	fi: path.resolve(srcDir, 'fi/index.js'),
	ph: path.resolve(srcDir, 'ph/index.js'),
};

/**
 * pluginsのカスタマイズ
 */
const { plugins, ...defaultConfig } = wpScriptsConfigs;
const customizedPlugins = plugins.filter((pluginInstance) => {
	// ビルド先のファイルを勝手に削除するやつをオフに。
	if ('CleanWebpackPlugin' === pluginInstance.constructor.name) {
		return false;
	}

	// block.jsonのコピーをオフに
	if ('CopyPlugin' === pluginInstance.constructor.name) {
		return false;
	}
	return true;
});

/**
 * exports
 * mode: 'development' || 'production' の切り替えは、package.json の scriptsで行う
 */
module.exports = {
	...defaultConfig, //@wordpress/scriptを引き継ぐ
	devtool: false, // ソースマップを出さない
	entry: entries,
	output: {
		path: path.resolve(__dirname, 'build/icons'), // pathを元に他のファイルを削除するので、 icons フォルダを基点にする
		filename: '[name].js',
	},
	plugins: customizedPlugins,
	// resolve: {
	// 	alias: {
	// 	},
	// },
	performance: { hints: false },
};
