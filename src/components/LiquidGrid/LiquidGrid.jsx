import React from 'react';
import { separateStyleProps } from '../../lib';
import classnames from 'classnames';

export default function LiquidGrid({
	children,
	tag = 'div',
	className,
	itemMiw,
	// itemProps = {},
	...props
}) {
	const { classNames, styles, attrs } = separateStyleProps(props, { grid: true });

	const blockProps = {
		className: classnames('l--liquidGrid is--grid', className, classNames),
		style: {
			...styles,
			'--item--miw': itemMiw || null,
		},
		...attrs,
	};

	// Grid
	const Tag = tag;
	return <Tag {...blockProps}>{children}</Tag>;
}
