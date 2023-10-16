// import React from 'react';
import { getLismProps } from '../../lib';
// import classnames from 'classnames';

/**
 * Lismコンポーネントのコア
 * <Lism> とは違い、lism/core内でのみ使われ、as は受け取らない。
 *
 * tag: string. htmlタグ名。
 */
export default function Core({ children, tag, ...props }) {
	const { className, style, attrs } = getLismProps(props);

	const Core = tag || 'div';
	return (
		<Core className={className} style={style} {...attrs}>
			{children}
		</Core>
	);
}
