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
		'--fxb': getFxb(cols?._) || null,
		'--fxb--sm': getFxb(cols?.sm) || null,
		'--fxb--xs': getFxb(cols?.xs) || null,
		// "--fxb--lg": getFxb(cols?.lg) || null,
		// "--fxb--xl": getFxb(cols?.xl) || null,
	});
}

export default function FlexColumns({
	children,
	tag = 'div',
	col,
	cols = {},
	sm,
	xs,
	customQuery,
	itemProps = {},
	...props
}) {
	const { className, style, attrs } = getCommonProps(props);

	const blockProps = {
		className: classnames('l--flexColumns has--gap', className),
		style: {
			...style,
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
