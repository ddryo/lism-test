import React from 'react';
import { getCommonProps } from '../../lib';
import classnames from 'classnames';

export default function Base({ children, tag, className, ...props }) {
	const { classNames, styles, attrs } = getCommonProps(props);

	const blockProps = {
		className: classnames(className, classNames),
		style: styles,
		...attrs,
	};

	const Tag = tag || 'div';
	return (
		<Tag {...blockProps} data-lism-component>
			{children}
		</Tag>
	);
}
