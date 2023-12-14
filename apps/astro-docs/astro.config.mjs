import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import react from '@astrojs/react';
// import mdx from '@astrojs/mdx';
// import markdoc from '@astrojs/markdoc';
import sidebar from './astro-configs/sidebar';
import locales from './astro-configs/locales';

// https://astro.build/config
export default defineConfig({
	// markdown: {
	// 	// remarkPlugins: [remarkPlugin1],
	// 	gfm: true,
	// },
	integrations: [
		// react(),
		// mdx(), // 基本はmarkdownを継承する
		starlight({
			title: 'Lism UI',
			// このサイトのデフォルト言語として英語を設定します。
			defaultLocale: 'en', // root
			locales,
			customCss: [
				// '@loos/lism-core/css/all.css',
				'@loos/lism-core/scss/all.scss',
				// カスタムCSSファイルへの相対パス
				'./src/styles/custom.css',
			],
			sidebar,
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			// コードブロックのカスタマイズ: https://starlight.astro.build/ja/reference/configuration/#expressivecode
			expressiveCode: {
				styleOverrides: {
					borderRadius: '0.25rem',
				},
				themes: ['starlight-dark', 'starlight-dark'],
			},

			components: {
				// デフォルトの`SocialIcons`コンポーネントをオーバーライドします。
				// SocialIcons: './src/components/EmailLink.astro',
				MarkdownContent: './src/components/starlight/MarkdownContent.astro',
				PageTitle: './src/components/starlight/PageTitle.astro',
				ThemeProvider: './src/components/starlight/ThemeProvider.astro',
			},
		}),
	],
	vite: {
		// ssr: {
		// 	noExternal: ['@loos/lism-core'],
		// },
		resolve: {
			// dedupe: ['@loos/lism-core'],
			alias: {
				// react: path.join(__dirname, 'node_modules/react'),
				'~/': '/src/',
			},
		},
	},
});
