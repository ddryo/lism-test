import React from 'react';
import { getCommonProps } from '../../lib';

function getColumnsVars(cols) {
	let baseCols = cols._ || 2;

	// ~8のときは省略したい
	if (baseCols <= 8) {
		baseCols = null;
	}

	return {
		'--cols': baseCols || null,
		'--cols--sm': cols.sm || null,
		'--cols--xs': cols.xs || null,
		// "--cols--lg": cols.lg || null,
		// "--cols--xl": cols.xl || null,
	};
}

export default function Columns({
	tag,
	children,
	col,
	sm,
	xs,
	cols = {},
	// customQuery,
	...props
}) {
	const { className, style, attrs } = getCommonProps(props, {
		lismClass: 'l--columns',
		isGrid: true,
	});

	const blockProps = {
		className,
		style: { ...style, ...getColumnsVars({ _: col, sm, xs, ...cols }) },
		'data-cols': col || cols._ || 2,
		...attrs,
	};

	const Tag = tag || 'div';
	return <Tag {...blockProps}>{children}</Tag>;
}
