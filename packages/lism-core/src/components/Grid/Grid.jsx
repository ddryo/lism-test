import React from 'react';
import { Core } from '../Core';
import { isEmptyObj, filterEmptyObj } from '../../lib';

export default function Grid({
	_gridName = 'grid',
	lismClass = {},
	areas,
	columns,
	rows,
	ai,
	ac,
	ji,
	jc,
	gap,
	rowGap,
	columnGap,
	...props
}) {
	const grid = filterEmptyObj({
		areas,
		columns,
		rows,
		ai,
		ac,
		ji,
		jc,
		gap,
		rowGap,
		columnGap,
	});
	if (!isEmptyObj(grid)) {
		props.grid = grid;
	}

	lismClass.l = `l--${_gridName}`;
	return <Core lismClass={lismClass} {...props} />;
}
