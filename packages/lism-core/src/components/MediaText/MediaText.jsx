import React from 'react';
import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

export default function MediaText({ children, tag, ...props }) {
	const { className, style, attrs } = getCommonProps(props, { blockClass: 'b--mediaText' });

	const blockProps = {
		className,
		style: style,
		...attrs,
	};

	const Tag = tag || 'div';
	return <Tag {...blockProps}>{children}</Tag>;
}
