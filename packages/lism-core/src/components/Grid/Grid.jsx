// import React from 'react';
import { Lism } from '../Lism';
import { isEmptyObj, filterEmptyObj } from '../../lib/helper';

export default function Grid({
	_gridName = 'grid',
	lismClass = {},
	template,
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
		template,
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
	return <Lism lismClass={lismClass} {...props} />;
}
