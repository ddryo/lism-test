import React from 'react';
import { Grid } from '../Grid';
import { getLismMainProp } from '../../lib';
// import { DynamicCSS } from '../DynamicCSS';

// 1:2:3 → 1fr 2fr 3fr に変換
function ratioToFr(ratio) {
	if (!ratio) return null;

	// ":" で分解し、配列化し、その配列要素に "fr" を付けて連結
	const splitArray = ratio.split(':');
	const result = splitArray.map((s) => `${s}fr`).join(' ');

	return result.trim();
}

// function setCustomQueryCSS({ size, ratio }) {
// 	return `@container (max-width: ${size}) {
// 		.l--ratioGrid[data-point-${size}="${ratio}"] {
// 			grid-template-columns: ${ratioToFr(ratio)};
// 		}
// 	}`;
// }

export default function RatioGrid({
	children,
	ratio,
	sm,
	md,
	lg,
	xl,

	// xs,
	// ratios = {}, // 一応 ratios でも受け付ける？
	customQuery,
	...props
}) {
	let ratios = getLismMainProp(ratio, { sm, md, lg, xl });

	// objの 中身に ratioToFr() を適用する
	ratios = Object.entries(ratios).reduce((newObj, [key, r]) => {
		newObj[key] = ratioToFr(r);
		return newObj;
	}, {});

	// デフォルト値の削除
	// if ('1fr 1fr' === gtcs._) delete gtcs._;

	return (
		<Grid lismClass='l--ratioGrid' gtc={ratios} {...props}>
			{/* {customQueryCSS && <style jsx>{customQueryCSS}</style>} */}
			{children}
		</Grid>
	);
}
