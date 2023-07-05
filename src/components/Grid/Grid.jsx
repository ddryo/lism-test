import React from 'react';
import { getCommonProps } from '../../lib';
// import classnames from 'classnames';
// import { Box } from '../index';

// grid-template-areas: none
// ,grid-template-columns, grid-template-rows: none,
// gta, gtc, gtr
export default function Grid({
	tag = 'div',
	// className,
	children,
	name = 'grid',
	lismClass,
	modifier,
	...props
}) {
	let gridClass = lismClass || `l--${name}`;
	if (modifier) {
		gridClass += `--${modifier}`;
	}

	const { className, style, attrs } = getCommonProps(props, {
		lismClass: gridClass,
		isGrid: true,
	});

	const blockProps = {
		className,
		style,
		...attrs,
	};

	const Tag = tag;
	return <Tag {...blockProps}>{children}</Tag>;
}
