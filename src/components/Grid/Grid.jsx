import React from 'react';
import { separateStyleProps, filterEmptyFromObj } from '../../lib';
import classnames from 'classnames';
// import { Box } from '../index';

// grid-template-areas: none
// ,grid-template-columns, grid-template-rows: none,
// gta, gtc, gtr
export default function Grid({
	tag = 'div',
	className,
	children,
	modifier,
	gta,
	gtc,
	gtr,

	...props
}) {
	const { classNames, styles, attrs } = separateStyleProps(props, { gap: true });

	let gridClass = 'l--grid';
	if (modifier) {
		gridClass += `--${modifier}`;
	}

	const blockProps = {
		className: classnames(gridClass, 'is--grid', className, classNames),
		style: filterEmptyFromObj({
			...styles,
			'--gta': gta || null,
			'--gtc': gtc || null,
			'--gtr': gtr || null,
		}),
		...attrs,
	};

	const Tag = tag;
	return <Tag {...blockProps}>{children}</Tag>;
}
