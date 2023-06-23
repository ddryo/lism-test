import React from 'react';
import { Base } from '../Base';
// import { getCommonProps } from '../../lib';
// import classnames from 'classnames';
// import { Box } from '../index';

function getColumnsVars(cols) {
	// let baseCols = cols._ || 2;

	// // ~8のときは省略したい
	// if (baseCols <= 8) {
	// 	baseCols = null;
	// }

	return {
		'--cols': cols._ || null,
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
		<Base className='l--gallery' {...props} style={style}>
			{children}
		</Base>
	);
}
