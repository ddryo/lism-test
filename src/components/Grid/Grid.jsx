import React from 'react';
import { getCommonProps } from '../../lib';
import classnames from 'classnames';
// import { Box } from '../index';

// grid-template-areas: none
// ,grid-template-columns, grid-template-rows: none,
// gta, gtc, gtr
export default function Grid({ tag = 'div', className, children, modifier, ...props }) {
	const { classNames, styles, attrs } = getCommonProps({ ...props, isGrid: true });

	let gridClass = 'l--grid';
	if (modifier) {
		gridClass += `--${modifier}`;
	}

	const blockProps = {
		className: classnames(gridClass, className, classNames),
		style: styles,
		...attrs,
	};

	const Tag = tag;
	return <Tag {...blockProps}>{children}</Tag>;
}
