import React from 'react';
import { useRouter } from 'next/router';
// import { useConfig } from 'nextra-theme-docs';

// import Demo from '@/components/Demo';
import Footer from '@/components/Footer';
import { Box } from '@lism/core';

import { getMyComponents } from '@/theme/mdx-components';

export default {
	components: getMyComponents(),
	// i18n: [
	// 	{ locale: 'en', text: 'English' },
	// 	{ locale: 'ja', text: '日本語' },
	// 	// { locale: 'zh', text: '中文' },
	// ],
	//
	main: ({ children }) => {
		const { asPath } = useRouter();
		return (
			<Box className='a--main' isConstrained isFlow lh='1.75' data-docs-path={asPath}>
				{children}
			</Box>
		);
	},

	// サイドバーの折りたたみレベル
	// sidebar: {
	// 	defaultMenuCollapseLevel: 1,
	// 	titleComponent({ title, type }) {
	// 		if (type === 'separator') {
	// 			return <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>;
	// 		}
	// 		if (type === 'separator' && !title) {
	// 			return <div style={{ background: 'cyan', textAlign: 'center' }}>---</div>;
	// 		}
	// 		return <>👉 {title}</>;
	// 	},
	// },
	faviconGlyph: 'L',
	logo: <span>Lism UI</span>,
	project: {
		// ↓ デフォルトでgithubアイコン
		link: 'https://github.com/shuding/nextra',
	},
	// 上部に表示するバナー
	banner: {
		key: 'beta-00001',
		text: (
			<>
				<span className='e--icon' data-emoji>
					⚠️
				</span>{' '}
				Still in β.
			</>
		),
	},
	useNextSeoProps() {
		const { asPath } = useRouter();

		if (['/'].includes(asPath)) {
			return { titleTemplate: 'Lism UI' };
		}

		return { titleTemplate: `%s | Lism UI` };
	},
	// head: () => {
	// 	const { asPath } = useRouter();
	// 	const { frontMatter } = useConfig();

	// 	const ogConfig = {
	// 		title: 'Lism UI',
	// 		description: '...',
	// 		author: {
	// 			twitter: 'ddryo_loos',
	// 		},
	// 		favicon: '/favicon.svg',
	// 	};
	// 	const favicon = String(ogConfig.favicon);
	// 	const title = String(frontMatter.title || ogConfig.title);
	// 	const description = String(frontMatter.description || ogConfig.description);
	// 	const canonical = new URL(asPath, 'https://lism-ui.com').toString();
	// 	// L-ISM
	// 	const ogUrl = ``;

	// 	return (
	// 		<>
	// 			<meta property='og:url' content={canonical} />
	// 			<link rel='canonical' href={canonical} />

	// 			<meta name='description' content={description} />
	// 			<meta property='og:description' content={description} />
	// 			<meta name='twitter:site' content={`@${ogConfig.author.twitter}`} />
	// 			<meta name='twitter:creator' content={`@${ogConfig.author.twitter}`} />
	// 			<meta name='twitter:card' content='summary_large_image' />
	// 			<meta property='twitter:image' content={ogUrl} />
	// 			<meta property='og:image' content={ogUrl} />

	// 			<link rel='shortcut icon' href={favicon} type='image/svg+xml' />
	// 			<link rel='apple-touch-icon' href={favicon} type='image/svg+xml' />
	// 			<meta name='apple-mobile-web-app-title' content={title} />

	// 			<link rel='preconnect' href='https://fonts.googleapis.com' />
	// 			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
	// 		</>
	// 	);
	// },
	footer: {
		text: <Footer />,
	},
	// ...
};
