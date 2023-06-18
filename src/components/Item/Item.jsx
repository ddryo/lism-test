import React from 'react';
import { filterEmptyFromObj } from '../../lib';
import classnames from 'classnames';
import { Box } from '../index';

// import classnames from "classnames";
// function Item({}) {}
export function GridItem({
	children,
	area,
	column,
	row,
	className,
	alignSelf,
	justifySelf,
	style = {},
	...props
}) {
	// as align-self: start;
	// js justify-self: center;

	const styles = filterEmptyFromObj({
		...style,
		'--ls--ga': area || null,
		'--ls--gr': row || null,
		'--ls--gc': column || null,
		'--ls--as': alignSelf || null,
		'--ls--js': justifySelf || null,
	});
	return (
		<Box className={classnames('l--item--grid', className)} style={styles} {...props}>
			{children}
		</Box>
	);
}

export function FlexItem({
	children,
	className,
	basis,
	alignSelf,
	justifySelf,
	style = {},
	...props
}) {
	const styles = filterEmptyFromObj({
		...style,
		'--ls--fxb': basis || null,
		'--ls--as': alignSelf || null,
		'--ls--js': justifySelf || null,
	});
	return (
		<Box className={classnames('l--item--flex', className)} style={styles} {...props}>
			{children}
		</Box>
	);
}
