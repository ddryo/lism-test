// import React from 'react';
import { Grid } from '../Grid';
import { isEmptyObj } from '../../lib/helper';
import { getBpData } from '../../lib';

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

// PRESET '1-2-3' 1-2, 1-2-4 ?
export default function Columns({ cols = [1, 2], lismStyle = {}, ...props }) {
	const gridProps = {
		_gridName: 'columns',
		gap: 20, // 初期値
	};
	const { _: baseValue, ...bpValues } = getBpData(cols);

	if (null != baseValue) {
		lismStyle['--cols'] = baseValue;
	}

	if (!isEmptyObj(bpValues)) {
		Object.keys(bpValues).forEach((bp) => {
			lismStyle[`--cols--${bp}`] = bpValues[bp];
		});
		// gridProps.gtc = bpValues;
	}

	return <Grid lismStyle={lismStyle} {...gridProps} {...props} />;
}
