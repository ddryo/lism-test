// import React from 'react';
import { Layouter } from '../Layouter';
import { getGridProps } from '../../lib';

// gt + gtc, gtr の併用がなければ、コンテキストをセットして変数だけの出力にする
export function getGridContext(gridProps = {}) {
	if (gridProps?.gt && (gridProps?.gtc || gridProps?.gtr)) {
		return null;
	}
	return 'grid';
}
export default function Grid({
	_gridName = 'grid',
	variant,
	itemMinW,
	lismClass = {},
	lismStyle = {},
	...props
}) {
	lismClass.l = `l--${_gridName}`;
	if (variant) {
		lismClass.l += ` l--${_gridName}--` + variant;
	}

	if (itemMinW) {
		lismStyle['--item--minW'] = itemMinW;
	}

	// grid 系の props をまとめる
	props = getGridProps(props);
	const context = getGridContext(props?.grid);

	return <Layouter _context={context} lismStyle={lismStyle} lismClass={lismClass} {...props} />;
}
