// import React from 'react';
import { Layouter } from '../Layouter';
import { getGridItemProps, getFlexItemProps } from '../../lib';

// isItem で 受け取れるようにするか...? ga, gc, gtc,...

export default function Item({ children, as, ...props }) {
	const Item = as || Layouter;

	// grid 系の props をまとめる
	props = getGridItemProps(props);
	props = getFlexItemProps(props);
	// props = getItemProps(props);

	// const noOptions = isEmptyObj(grid);

	return <Item {...props}>{children}</Item>;
}
