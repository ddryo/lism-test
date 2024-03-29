import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import remarkHtml from 'remark-html';
import remarkBreaks from 'remark-breaks'; // 改行を br タグに変換
import remarkToc from 'remark-toc'; // 「## ToC」 で目次を生成
import rehypeSlug from 'rehype-slug'; // 見出しに id を付与
// import { rehypeHeadingIds } from '@astrojs/markdown-remark';

// import remarkGfm from 'remark-gfm'; // GFM に変換 → astroに入ってる
// ↓astroで使えない？
// import rehypeRaw from 'rehype-raw'; // 直接書かれたタグを、そのタグの情報として表示 → astroで使えない？

// .use(remarkToc, {
// 	heading: '目次',  // Table of Contents を挿入するための見出しを指定する
// 	tight: true       // `true` にすると `li` 要素内に `p` 要素を作らないようになる
//   })

import path from 'path';
import { fileURLToPath } from 'url';
// import AutoImport from 'astro-auto-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
	// site: 'https://docs.astro.build/',
	integrations: [
		// AutoImport({
		// 	imports: ['./src/components/mdx/DammyText.astro'],
		// }),
		mdx({
			// 'shiki'（デフォルト）、'prism'、またはハイライトを無効にする場合は false を指定します
			// syntaxHighlight: 'prism',
			// shikiConfig: { theme: 'dracula' },
			remarkPlugins: [remarkHtml, remarkBreaks, remarkToc],
			rehypePlugins: [rehypeSlug],
			// remarkRehype: { footnoteLabel: 'Footnotes' },
			// gfm: true,
		}),
		react(),
	],
	vite: {
		// ssr: {
		// 	noExternal: ['@loos/lism-core'],
		// },
		resolve: {
			// dedupe: ['@loos/lism-core'],
			alias: {
				react: path.join(__dirname, 'node_modules/react'),
			},
		},
	},
});
