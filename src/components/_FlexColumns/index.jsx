import React from 'react';
import { filterEmptyObj, getCommonProps } from '../../lib';

import classnames from 'classnames';

function getFxb(cols) {
	/* eslint-disable-next-line  eqeqeq */
	if (null == cols) return false;

	const percent = Math.floor(10000 / cols) / 100;
	return percent + '%';
}

function getColumnsStyles(col, cols = {}) {
	if (undefined !== col) {
		cols._ = col;
	}

	return filterEmptyObj({
		'--ls--fxb': getFxb(cols?._) || null,
		'--ls--fxb_Qsm': getFxb(cols?.sm) || null,
		'--ls--fxb_Qxs': getFxb(cols?.xs) || null,
		// "--ls--fxb_Qlg": getFxb(cols?.lg) || null,
		// "--ls--fxb_Qxl": getFxb(cols?.xl) || null,
	});
}

export default function FlexColumns({
	children,
	tag = 'div',
	className,
	col,
	cols = {},
	sm,
	xs,
	customQuery,
	itemProps = {},
	...props
}) {
	const { classNames, styles, attrs } = getCommonProps(props);

	const blockProps = {
		className: classnames('l--flexColumns has--gap', className, classNames),
		style: {
			...styles,
			...getColumnsStyles(col, cols),
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
	return <Tag {...blockProps}>{children}</Tag>;
}
