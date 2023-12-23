// import React from 'react';
import { getLismProps } from '../../lib';

/**
 * Lismコンポーネントのコア要素
 *
 * tag: string. htmlタグ名。
 */
export default function Core({ children, as, tag, ...props }) {
	const lismProps = getLismProps(props);

	// tagは文字列のみ。（asはコンポーネントも指定できる。）
	if (tag && typeof tag !== 'string') {
		console.error('@Lism : "tag" prop should be a string.');
	}

	const JSX = as || tag || 'div';
	return <JSX {...lismProps}>{children}</JSX>;
}
