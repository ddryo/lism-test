import React from 'react';
import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

export default function Base({ children, tag, ...props }) {
	const { className, style, attrs } = getCommonProps(props);

	const blockProps = {
		className,
		style,
		...attrs,
	};

	const Tag = tag || 'div';
	return <Tag {...blockProps}>{children}</Tag>;
}
