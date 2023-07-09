import React from 'react';
import { getCommonProps } from '../../lib';
// import classnames from 'classnames';
// import { Box } from '../index';

// grid-template-areas: none
// ,grid-template-columns, grid-template-rows: none,
// gta, gtc, gtr
export default function Grid({ tag, children, modifier, ...props }) {
	let lismClass = 'l--grid';
	if (modifier) {
		lismClass += `--${modifier}`;
	}

	const { className, style, attrs } = getCommonProps(props, {
		lismClass,
		isGrid: true,
	});

	const blockProps = {
		className,
		style,
		...attrs,
	};

	const Tag = tag || 'div';
	return <Tag {...blockProps}>{children}</Tag>;
}
