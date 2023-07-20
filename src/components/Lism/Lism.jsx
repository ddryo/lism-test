import React from 'react';
import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

export default function Lism({ children, tag, component, ...props }) {
	const { className, style, attrs } = getCommonProps(props);

	const blockProps = {
		className,
		style,
		...attrs,
	};

	const Tag = component || tag || 'div';
	return <Tag {...blockProps}>{children}</Tag>;
}
