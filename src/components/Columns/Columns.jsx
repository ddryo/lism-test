import React from 'react';
import { Grid } from '../Grid';
// import { filterEmptyObj, getCommonProps } from '../../lib';
// import classnames from 'classnames';

function getColumnsVars(cols) {
	let baseCols = cols._ || 2;

	// ~8のときは省略したい
	if (baseCols <= 8) {
		baseCols = null;
	}

	return {
		'--cols': baseCols || null,
		'--cols_Qsm': cols.sm || null,
		'--cols_Qxs': cols.xs || null,
		// "--cols_Qlg": cols.lg || null,
		// "--cols_Qxl": cols.xl || null,
	};
}

export default function Columns({
	children,
	// className,
	col,
	sm,
	xs,
	cols = {},
	style = {},
	// customQuery,
	...props
}) {
	style = {
		...style,
		...getColumnsVars({ _: col, sm, xs, ...cols }),
	};
	return (
		<Grid name='columns' data-cols={col || cols._ || 2} {...props} style={style}>
			{children}
		</Grid>
	);
}
