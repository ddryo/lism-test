import { Box } from '@loos/lism-core';

// react-syntax-highlighterパッケージ内のprismを使う。
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// Light build + Async
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';

// 個別言語の構文定義
// import { jsx } from "react-syntax-highlighter/dist/cjs/languages/prism";

// codeカラー https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_STYLES_PRISM.MD
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// jsx言語を登録 → なくてもあっても同じっぽい？
// SyntaxHighlighter.registerLanguage("jsx", jsx);

export default function Code({ children, del, delOnlyAfterNL = false, language = 'jsx', ...attrs }) {
	if (del && !delOnlyAfterNL) {
		const reg = new RegExp(del, 'gm');
		children = children.replace(reg, '');
	} else if (del && delOnlyAfterNL) {
		const reg = new RegExp(`\n${del}`, 'gm');
		children = children.replace(reg, '\n');
	}
	return (
		<Box modifier='code' {...attrs}>
			<SyntaxHighlighter language={language} style={vscDarkPlus}>
				{children}
			</SyntaxHighlighter>
		</Box>
	);
}
