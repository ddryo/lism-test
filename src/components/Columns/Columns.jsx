import React from 'react';
import { Grid } from '../Grid';
import { getLismMainProp } from '../../lib';

// function getColumnsVars(cols) {
// 	let baseCols = cols._ || 2;

// 	// ~8のときは省略したい
// 	if (baseCols <= 8) {
// 		baseCols = null;
// 	}

// 	return {
// 		'--cols': baseCols || null,
// 		'--cols--sm': cols.sm || null,
// 		'--cols--xs': cols.xs || null,
// 		// "--cols--lg": cols.lg || null,
// 		// "--cols--xl": cols.xl || null,
// 	};
// }

export default function Columns({
	// tag,
	children,
	clm = 1,
	sm,
	md,
	lg,
	xl,
	// customQuery,
	...props
}) {
	const clms = getLismMainProp(clm, { sm, md, lg, xl });

	// filter = null

	// デフォルト値の削除
	// if (1 === clms._) delete clms._;

	const blockProps = {
		// lismClass: 'l--columns',
		// isGrid: true,
		modifier: 'columns',
		gap: 20, // 初期値
		// hasLismVar: true,
		lismVar: clms,
		...props,
	};

	return <Grid {...blockProps}>{children}</Grid>;
}
