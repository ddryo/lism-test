import React from 'react';
import { filterEmptyFromObj, getCommonProps } from '../../lib';

import classnames from 'classnames';

function getColumnsStyles(cols) {
	let baseCols = cols._ || 2;

	// ~8のときは省略したい
	if (baseCols <= 8) {
		baseCols = null;
	}
	return filterEmptyFromObj({
		'--cols': baseCols || null,
		'--cols--Qsm': cols.sm || null,
		'--cols--Qxs': cols.xs || null,
		// "--cols--Qlg": cols.lg || null,
		// "--cols--Qxl": cols.xl || null,
	});
}

export default function Columns({
	children,
	tag = 'div',
	className,
	col,
	cols = {},
	sm,
	xs,
	// customQuery,
	// itemProps = {},
	...props
}) {
	const { classNames, styles, attrs } = getCommonProps({ ...props, isGrid: true });

	const blockProps = {
		className: classnames('l--columns', className, classNames),
		style: {
			...styles,
			...getColumnsStyles({ _: col, sm, xs, ...cols }),
		},
		...attrs,
	};

	// let customQueryCSS = "";
	// if (Array.isArray(customQuery)) {
	// 	customQuery.forEach((_query) => {
	// 		customQueryCSS += setCustomQueryCSS(_query);
	// 		blockProps[`data-point-${_query?.size || ""}`] = _query?.ratio || "";
	// 	});
	// }

	const Tag = tag;
	return (
		<Tag {...blockProps} data-cols={col || cols._ || 2}>
			{children}
		</Tag>
	);
}
