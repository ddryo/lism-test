import React from 'react';
import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

export default function Lism({ children, as, tag, ...props }) {
	const { className, style, attrs } = getCommonProps(props);

	const Lism = as || tag || 'div';

	return (
		<Lism className={className} style={style} {...attrs}>
			{children}
		</Lism>
	);
}
