// const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	// ↓next export できなくなる問題に対処
	// images:{
	//     unoptimized: true,
	// }
	images: {
		domains: ['images.unsplash.com'],
	},
	// webpack: (config, { defaultLoaders }) => {
	// 	// console.log();
	// 	config.module.rules.push({
	// 		test: /text\.css$/i,
	// 		// exclude: /node_modules/,
	// 		use: ['style-loader', 'css-loader'],
	// 		// use: [
	// 		// 	options.defaultLoaders.babel,
	// 		// 	{
	// 		// 		loader: '@mdx-js/loader',
	// 		// 		// options: pluginOptions.options,
	// 		// 	},
	// 		// ],
	// 	});

	// 	return config;
	// },
};

const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	// theme: './src/index.jsx',
	themeConfig: './theme.config.jsx',
	defaultShowCopyCode: true,
	// flexsearch: {
	// 	codeblocks: true,
	// },
	// codeHighlight: true,
	// i18n: {
	// 	locales: ['en', 'ja'],
	// 	defaultLocale: 'en',
	// },
});

module.exports = withNextra(nextConfig);
