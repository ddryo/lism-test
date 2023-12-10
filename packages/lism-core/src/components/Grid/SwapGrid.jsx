// import React from 'react';
import Grid from './Grid';

export default function SwapGrid({
	lismStyle = {},
	lismState = [],
	sideW,
	side = 'right bottom', // "left top"|"left bottom"|"right top"|"right bottom"
	bp = 'sm',
	// customBreakPoint,
	...props
}) {
	if (undefined !== sideW) {
		lismStyle['--sideW'] = sideW;
	}

	// const lismState = [];
	if (bp) lismState.push('-gt@' + bp);

	// if (customBreakPoint) {
	// 	blockProps['data-break'] = 'custom';
	// 	blockProps['data-custom-break'] = customBreakPoint;
	// }

	return (
		<Grid
			variant='swap'
			lismStyle={lismStyle}
			lismState={lismState}
			data-side={side}
			{...props}
		/>
	);
}
