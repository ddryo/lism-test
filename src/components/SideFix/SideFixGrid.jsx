import React from 'react';
import { Lism } from '../Lism';
// import { DynamicCSS } from '../index';
// import classnames from 'classnames';
// import "./style.scss";

export default function SideFixGrid({
	children,
	fixW,
	fix = 'right down', // "left up"|"left down"|"right up"|"right down"
	breakPoint = 'sm',
	customBreakPoint,
	style = {},
	...props
}) {
	// --gta--sm

	const gta = {};
	const gtc = {};

	// fixに "left" が含まれてるかどうか
	const isFixLeft = -1 !== fix.indexOf('left');
	if (isFixLeft) {
		gta[breakPoint] = '"fix fluid"';
		gtc[breakPoint] = 'var(--fixW) 1fr';
	} else {
		gta[breakPoint] = '"fluid fix"';
		gtc[breakPoint] = '1fr var(--fixW)';
	}

	if (undefined !== fixW) {
		style['--fixW'] = fixW;
	}

	const blockProps = {
		lismClass: 'l--sideFix',
		'data-fix': fix,
		isGrid: true,
		gta,
		gtc,
		style,
		// 'data-bp': breakPoint,
		...props,
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
			<Lism {...blockProps}>
				{/* <DynamicCSS css={customQueryCSS} /> */}
				{/* {sortChildren(children, upper)} */}
				{children}
			</Lism>
		</>
	);
}
