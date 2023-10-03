import React from 'react';
import { Core } from '../Core';
import { isEmptyObj, filterEmptyObj } from '@/lib';

export default function Grid({
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

	return <Core lismClass='l--grid' {...props} />;

	// const { className, style, attrs } = getLismProps(props, {
	// 	lismClass: 'l--grid',
	// 	lismModifier: modifier && 'l--grid--' + modifier,
	// 	// useGridProps: true,
	// });

	// // --gta:, --gtc:, --gtr: クラスを削除する

	// const blockProps = {
	// 	className,
	// 	style,
	// 	...attrs,
	// };

	// const Grid = as || 'div';
	// return <Grid {...blockProps}>{children}</Grid>;
}
