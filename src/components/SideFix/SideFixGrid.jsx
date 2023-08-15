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
	const isFixLeft = -1 !== fix.indexOf('left');
	if (isFixLeft) {
		gta[breakPoint] = '"fix ."';
		gtc[breakPoint] = 'var(--fixW) 1fr';
	} else {
		gta[breakPoint] = '". fix"';
		gtc[breakPoint] = '1fr var(--fixW)';
	}

	const lismStyle = {};
	if (undefined !== fixW) {
		lismStyle['--fixW'] = fixW;
	}

	const blockProps = {
		lismClass: 'l--sideFix',
		'data-fix': fix,
		isGrid: true,
		gta,
		gtc,
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
			<Lism {...blockProps} {...props} lismStyle={lismStyle}>
				{/* <DynamicCSS css={customQueryCSS} /> */}
				{/* {sortChildren(children, upper)} */}
				{children}
			</Lism>
		</>
	);
}
