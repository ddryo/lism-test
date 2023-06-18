import React from 'react';
import { getGapStyles, getPaddingStyles, isEmptyObj } from '../../lib';
import classnames from 'classnames';

export default function Reel({
	children,
	className,
	itemWidth,
	gap,
	gaps,
	padding,
	paddings,
	style = {},
	...attrs
}) {
	// const Tag = tag;

	// { flex: true }

	const paddingStyles = getPaddingStyles(padding, paddings);
	const hasPadding = !isEmptyObj(paddingStyles);

	style = {
		...style,
		...getGapStyles(gap, gaps),
		...paddingStyles,
		'--ls--item--width': itemWidth,
	};

	const theClass = classnames('l--reel is--flex', className, {
		'has--padding': hasPadding || false,
	});

	return (
		<div className={theClass} tabIndex='0' style={style} {...attrs}>
			{children}
		</div>
	);
}
