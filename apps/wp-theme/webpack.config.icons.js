const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

const srcDir = 'src/icons';
const distDir = 'dist/icons';
const entryPoints = {};

const entryFiles = ['index.js', 'ph/index.js', 'fi/index.js', 'io/index.js', 'fa/index.js'];
entryFiles.forEach((name) => {
	entryPoints[name] = path.resolve(__dirname, srcDir, name);
});

module.exports = {
	...defaultConfig, //@wordpress/scriptを引き継ぐ

	mode: 'production', // より圧縮させる

	entry: entryPoints,
	output: {
		path: path.resolve(__dirname, distDir),
		filename: '[name]',
	},

	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/gutenberg/components'),
		},
	},
};
