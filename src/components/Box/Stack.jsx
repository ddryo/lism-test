import React from 'react';
import { getCommonProps } from '../../lib';
import classnames from 'classnames';

export default function Stack({ children, tag, ...props }) {
	const { classNames, styles, attrs } = getCommonProps({ ...props, isFlex: true });

	const blockProps = {
		className: classnames('l--stack', classNames),
		style: styles,
		...attrs,
	};

	const Tag = tag || 'div';
	return <Tag {...blockProps}>{children}</Tag>;
}
