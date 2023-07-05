import React from 'react';
// import { DynamicCSS } from '../index';
import { getCommonProps } from '../../lib';
// import classnames from 'classnames';
// import "./style.scss";

export default function SideFixGrid({
	children,
	fixWidth,
	fix = 'right down', // "left up"|"left down"|"right up"|"right down"
	breakQuery = 'sm',
	customBreakPoint,
	...props
}) {
	const { className, style, attrs } = getCommonProps(props, {
		lismClass: 'l--sideFix',
		isGrid: true,
	});

	if (undefined !== fixWidth) {
		style['--fix--w'] = fixWidth;
	}

	const blockProps = {
		className,
		style,
		'data-fix': fix,
		'data-break': breakQuery,
		...attrs,
	};

	if (customBreakPoint) {
		blockProps['data-break'] = 'custom';
		blockProps['data-custom-break'] = customBreakPoint;
	}

	// addAttrs["data-break"] = customBreakPoint ? "custom" : breakQuery;
	// data-custom-break="600px"

	// let customQueryCSS = '';
	// if (customBreakPoint) {
	// 	customQueryCSS = setCustomQueryCSS(customBreakPoint, upper);
	// }
	return (
		<>
			<div {...blockProps}>
				{/* <DynamicCSS css={customQueryCSS} /> */}
				{/* {sortChildren(children, upper)} */}
				{children}
			</div>
		</>
	);
}
