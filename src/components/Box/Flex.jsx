import React from 'react';
import { getCommonProps } from '../../lib';
import classnames from 'classnames';

export default function Flex({ children, tag, className, fxw, ...props }) {
	const { classNames, styles, attrs } = getCommonProps({ ...props, isFlex: true });

	const blockProps = {
		className: classnames('l--flex', className, classNames),
		style: styles,
		'data-fxw': fxw,
		...attrs,
	};

	const Tag = tag || 'div';
	return <Tag {...blockProps}>{children}</Tag>;
}
