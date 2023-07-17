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
	col,
	sm,
	md,
	lg,
	xl,
	// cols = {},
	// customQuery,
	...props
}) {
	const cols = getPropBpObj(col, { sm, md, lg, xl });
	const utils = [];
	const styles = {};
	Object.keys(cols).forEach((bp) => {
		if ('_' === bp) {
			styles['--cols'] = cols[bp];
		} else {
			styles[`--cols--${bp}`] = cols[bp];
			utils.push(`-gtc@${bp}:`);
		}
	});

	// _utile: -gtc@sm, ... をつけておく必要がある。

	const blockProps = {
		lismClass: 'l--columns',
		isGrid: true,
		_utils: utils,
		style: styles,
		// 'data-cols': col || cols._ || 2,
		...props,
	};

	return <Lism {...blockProps}>{children}</Lism>;
}
