import React from 'react';
import { Grid } from '../Grid';
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
		'data-fix': fix,
		'data-bp': breakPoint,
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
			<Grid lismClass='l--switchFix' lismStyle={lismStyle} {...blockProps} {...props}>
				{/* <DynamicCSS css={customQueryCSS} /> */}
				{/* {sortChildren(children, upper)} */}
				{children}
			</Grid>
		</>
	);
}
