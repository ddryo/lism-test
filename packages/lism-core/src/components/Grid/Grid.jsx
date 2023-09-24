import React from 'react';
import { Core } from '../Core';
import { isEmptyObj, filterEmptyObj } from '@/lib';

export default function Grid({ isInline, areas, columns, rows, ...props }) {
	const grid = filterEmptyObj({
		isInline,
		areas,
		columns,
		rows,
	});

	const noOptions = isEmptyObj(grid);

	// inline-grid にする時以外は、display の出力不要
	if (!noOptions && !isInline) {
		grid.skipDisplay = true;
	}

	return <Core lismClass='l--grid' grid={noOptions ? null : grid} {...props} />;

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
