import React from 'react';
import { getCommonProps } from '../../lib';

export default function Box({ children, tag, ...props }) {
	const { className, style, attrs } = getCommonProps(props, { lismClass: 'l--box' });
	const Tag = tag || 'div';
	return (
		<Tag className={className} style={style} {...attrs}>
			{children}
		</Tag>
	);
}
