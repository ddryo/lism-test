import React from 'react';
import { Lism } from '../Lism';
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
		<Lism className='l--gallery' {...props} style={style}>
			{children}
		</Lism>
	);
}
