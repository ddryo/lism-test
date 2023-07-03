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
		'--cols--sm': cols.sm || null,
		'--cols--xs': cols.xs || null,
		// "--cols--lg": cols.lg || null,
		// "--cols--xl": cols.xl || null,
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
