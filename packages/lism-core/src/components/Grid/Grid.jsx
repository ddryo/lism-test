// import React from 'react';
import { Layouter } from '../Layouter';
import { getGridProps, getPlaceProps } from '../../lib';

export default function Grid({ _gridName = 'grid', variant, lismClass = {}, ...props }) {
	lismClass.l = `l--${_gridName}`;
	if (variant) {
		lismClass.l += ` l--${_gridName}--` + variant;
	}

	// grid 系の props をまとめる
	props = getGridProps(props);
	props = getPlaceProps(props);

	return <Layouter lismClass={lismClass} {...props} />;
}
