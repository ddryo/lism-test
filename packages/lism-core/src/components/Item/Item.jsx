import React from 'react';
import { Core } from '../Core';
import { isEmptyObj, filterEmptyObj } from '@/lib';
// import classnames from 'classnames';

export function Item({
	children,
	as,
	fxg,
	fxsh,
	fx,
	fxb,
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
		fxg,
		fxsh,
		fx,
		fxb,
	});
	const gridProps = filterEmptyObj({
		ga,
		gc,
		gr,
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
