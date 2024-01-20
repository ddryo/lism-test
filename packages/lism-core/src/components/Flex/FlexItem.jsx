// import React from 'react';
import { Layouter } from '../Layouter';
import { getFlexItemProps } from '../../lib';

export default function FlexItem({ children, as, isSide, ...props }) {
	const FlexItem = as || Layouter;

	// grid 系の props をまとめる
	props = getFlexItemProps(props);
	// props = getItemProps(props);

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
