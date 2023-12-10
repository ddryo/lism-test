// import React from 'react';
import { Core } from '../Core';
import { getGridItemProps, getItemProps } from '../../lib';

export default function GridItem({ children, as, isSide, ...props }) {
	const GridItem = as || Core;

	// grid 系の props をまとめる
	props = getGridItemProps(props);
	props = getItemProps(props);

	const lismState = [];
	if (isSide) {
		lismState.push('is--side');
	}

	return (
		<GridItem lismState={lismState} {...props}>
			{children}
		</GridItem>
	);
}
