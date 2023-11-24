// import React from 'react';
import { Layouter } from '../Layouter';
import { isEmptyObj, filterEmptyObj } from '../../lib/helper';

export default function Grid({
	_gridName = 'grid',
	variant,
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
	if (variant) {
		lismClass.l += ` l--${_gridName}--` + variant;
	}
	return <Layouter lismClass={lismClass} {...props} />;
}
