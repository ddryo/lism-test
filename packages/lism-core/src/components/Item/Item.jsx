// import React from 'react';
import { Core } from '../Core';
import { isEmptyObj, filterEmptyObj } from '../../lib';
// import classnames from 'classnames';

export default function Item({
	children,
	as,
	flex,
	shrink,
	grow,
	basis,
	fxg,
	fxsh,
	fx,
	fxb,
	area,
	column,
	row,
	ga,
	gc,
	gr,
	alignSelf,
	justifySelf,
	placeSelf,
	...props
}) {
	const Item = as || Core;

	const flexProps = filterEmptyObj({
		flex: flex || fx,
		shrink: shrink || fxsh,
		grow: grow || fxg,
		basis: basis || fxb,
	});
	const gridProps = filterEmptyObj({
		area: area || ga,
		column: column || gc,
		row: row || gr,
	});

	const selfPlaceProps = filterEmptyObj({
		alignSelf,
		justifySelf,
		placeSelf,
	});

	if (!isEmptyObj(flexProps)) {
		props.flexItem = {
			...flexProps,
			...selfPlaceProps,
		};
	} else if (!isEmptyObj(gridProps)) {
		props.gridItem = {
			...gridProps,
			...selfPlaceProps,
		};
	} else if (!isEmptyObj(selfPlaceProps)) {
		// place系のみ指定がある場合
		props.gridItem = {
			...selfPlaceProps,
		};
	}

	// const noOptions = isEmptyObj(grid);

	return (
		<Item isItem {...props}>
			{children}
		</Item>
	);
}
