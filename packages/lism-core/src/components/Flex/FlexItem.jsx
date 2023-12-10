// import React from 'react';
import { Core } from '../Core';
import { getFlexItemProps, getItemProps } from '../../lib';

export default function FlexItem({ children, as, isSide, ...props }) {
	const FlexItem = as || Core;

	// grid 系の props をまとめる
	props = getFlexItemProps(props);
	props = getItemProps(props);

	const lismState = [];
	if (isSide) {
		lismState.push('is--side');
	}

	// const noOptions = isEmptyObj(grid);

	return (
		<FlexItem lismState={lismState} {...props}>
			{children}
		</FlexItem>
	);
}
