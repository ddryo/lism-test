import React from 'react';
import classnames from 'classnames';
import { filterEmptyFromObj, separateStyleProps } from '../../lib';
// import { DynamicCSS } from '../index';

// 1:2:3 → 1fr 2fr 3fr に変換
function ratioToFr(ratio) {
	if (!ratio) return false;

	// ":" で分解し、配列化し、その配列要素に "fr" を付けて連結
	const splitArray = ratio.split(':');
	const result = splitArray.map((s) => `${s}fr`).join(' ');

	return result.trim();
}

function getRatioStyles(ratios) {
	return filterEmptyFromObj({
		'--gtc': ratioToFr(ratios._) || null,
		'--gtc--Qsm': ratioToFr(ratios.sm) || null,
		'--gtc--Qxs': ratioToFr(ratios.xs) || null,
		// "--gtc--Qlg": ratioToFr(ratios.lg) || null,
		// "--gtc--Qxl": ratioToFr(ratios.xl) || null,
	});
}

function setCustomQueryCSS({ size, ratio }) {
	return `@container (max-width: ${size}) {
		.l--ratioGrid[data-point-${size}="${ratio}"] {
			grid-template-columns: ${ratioToFr(ratio)};
		}
	}`;
}

export default function RatioGrid({
	children,
	tag = 'div',
	className,
	ratio,
	ratios = {},
	sm,
	xs,
	customQuery,
	// itemProps = {},
	...props
}) {
	const { classNames, styles, attrs } = separateStyleProps(props, { grid: true });

	const blockProps = {
		className: classnames('l--ratioGrid is--grid', className, classNames),
		style: {
			...styles,
			...getRatioStyles({ _: ratio, sm, xs, ...ratios }),
		},
		...attrs,
	};

	// let customQueryCSS = '';
	// if (Array.isArray(customQuery)) {
	// 	customQuery.forEach((_query) => {
	// 		customQueryCSS += setCustomQueryCSS(_query);
	// 		blockProps[`data-point-${_query?.size || ''}`] = _query?.ratio || '';
	// 	});
	// }

	const Tag = tag;
	return (
		<Tag {...blockProps}>
			{/* {customQueryCSS && <style jsx>{customQueryCSS}</style>} */}
			{children}
		</Tag>
	);
}
