// see: https://github.com/shuding/nextra/blob/main/packages/nextra-theme-docs/src/index.tsx
// see: https://nextra.site/docs/custom-theme

import 'focus-visible';
import { useRouter } from 'next/router';
// import type { NextraThemeLayoutProps, PageOpts } from 'nextra'
import { useFSRoute, useMounted } from 'nextra/hooks';
import { MDXProvider } from 'nextra/mdx';
import { useMemo } from 'react';

// import { css, cx } from '@/styled-system/css';
// import type { PageTheme } from 'nextra/normalize-pages'
import { normalizePages } from 'nextra/normalize-pages';
// import { DEFAULT_LOCALE, PartialDocsThemeConfig } from './constants';
// import { renderComponent } from './nextra/lib';
// import { getComponents } from './mdx-components';
// import { Banner, Breadcrumb, Head, NavLinks, Sidebar, SkipNavContent } from './nextra';
// import { ActiveAnchorProvider, ConfigProvider, useConfig } from './nextra/contexts';
// import './resize-polyfill';

const InnerLayout = ({}) => {
	return <>aaa</>;
};

// export default function Layout({ children, ...context }) {
// 	return (
// 		<ConfigProvider value={context}>
// 			<InnerLayout {...context.pageOpts}>{children}</InnerLayout>
// 		</ConfigProvider>
// 	);
// }

export default function Layout({ children }) {
	return (
		<div>
			<h1>My Theme</h1>
			<div style={{ border: '1px solid' }}>{children}</div>
		</div>
	);
}
