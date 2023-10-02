import React from 'react';
import { Core } from '../Core';
// import { DynamicCSS } from '../index';
// import classnames from 'classnames';
// import "./style.scss";

export default function SwitchFix({
	children,
	fixW,
	fix = 'right down', // "left up"|"left down"|"right up"|"right down"
	breakPoint = 'sm',
	customBreakPoint,
	...props
}) {
	// --gta--sm

	// const gta = {};
	// const gtc = {};

	// fixに "left" が含まれてるかどうか
	// const isFixLeft = -1 !== fix.indexOf('left');

	// if (breakPoint) {
	// 	gta[breakPoint] = '-';
	// 	gtc[breakPoint] = '-';
	// }

	//  else {
	// 	gta._ = '-';
	// }

	const lismStyle = {};
	if (undefined !== fixW) {
		lismStyle['--fixW'] = fixW;
	}

	const blockProps = {
		lismClass: 'l--switchFix',
		'data-fix': fix,
		'data-bp': breakPoint,
		// useGridProps: true,
		// gap: 20, // 初期値
		// gta,
		// gtc,
		// lismVar: fixW,
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
			<Core lismStyle={lismStyle} {...blockProps} {...props}>
				{/* <DynamicCSS css={customQueryCSS} /> */}
				{/* {sortChildren(children, upper)} */}
				{children}
			</Core>
		</>
	);
}
