import React from 'react';
import Grid from '../Grid';
import { isEmptyObj, getLismMainProp } from '@/lib';

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

// PRESET '1-2-3' 1-2, 1-2-4
export default function Columns({ cols = 1, ...props }) {
	const { baseValue, bpValues } = getLismMainProp(cols);

	const theProps = {
		lismClass: 'l--columns',
		lismStyle: {},
		gap: 20, // 初期値
	};

	if (null != baseValue) {
		theProps.lismStyle['--gtc'] = baseValue;
	}

	if (!isEmptyObj(bpValues)) {
		theProps.columns = bpValues;
	}

	return <Grid {...theProps} {...props} />;
}
