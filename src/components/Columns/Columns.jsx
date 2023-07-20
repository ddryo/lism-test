import React from 'react';
import { Lism } from '../Lism';
import { getPropBpObj } from '../../lib';

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
	sm = 2,
	md,
	lg,
	xl,
	// customQuery,
	...props
}) {
	const clms = getPropBpObj(clm, { sm, md, lg, xl });

	// デフォルト値の削除
	if (1 === clms._) delete clms._;

	const blockProps = {
		lismClass: 'l--columns',
		isGrid: true,
		gtc: clms,
		...props,
	};

	return <Lism {...blockProps}>{children}</Lism>;
}
