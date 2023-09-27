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
	...props
}) {
	// --gta--sm

	const gta = {};
	const gtc = {};

	// fixに "left" が含まれてるかどうか
	// const isFixLeft = -1 !== fix.indexOf('left');

	if (breakPoint) {
		gta[breakPoint] = '-';
		gtc[breakPoint] = '-';
	}
	//  else {
	// 	gta._ = '-';
	// }

	// const lismStyle = {};
	// if (undefined !== fixW) {
	// 	// lismStyle['--fixW'] = fixW;
	// 	lismProp = fixW;
	// }

	const blockProps = {
		lismClass: 'l--sideFix',
		// 'data-fix-mode': 'grid',
		'data-fix': fix,
		// useGridProps: true,
		gap: 20, // 初期値
		gta,
		gtc,
		lismVar: fixW,
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
			<Lism {...blockProps} {...props}>
				{/* <DynamicCSS css={customQueryCSS} /> */}
				{/* {sortChildren(children, upper)} */}
				{children}
			</Lism>
		</>
	);
}
