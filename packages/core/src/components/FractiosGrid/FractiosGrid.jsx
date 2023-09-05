import React from 'react';
import { Grid } from '../Grid';
import { getLismMainProp } from '../../lib';
// import { DynamicCSS } from '../DynamicCSS';

// 1:2:3 → 1fr 2fr 3fr に変換
function getFrGtc(ratio) {
	if (!ratio) return null;

	// ":" で分解し、配列化し、その配列要素に "fr" を付けて連結
	const splitArray = ratio.split(':');
	const result = splitArray.map((s) => `${s}fr`).join(' ');

	return result.trim();
}

// function setCustomQueryCSS({ size, ratio }) {
// 	return `@container (max-width: ${size}) {
// 		.l--ratioGrid[data-point-${size}="${ratio}"] {
// 			grid-template-columns: ${getFrGtc(ratio)};
// 		}
// 	}`;
// }

export default function FractiosGrid({
	children,
	fractions,
	sm,
	md,
	lg,
	xl,

	// xs,
	// ratios = {}, // 一応 ratios でも受け付ける？
	customQuery,
	...props
}) {
	let frs = getLismMainProp(fractions, { sm, md, lg, xl });

	// objの 中身に getFrGtc() を適用する
	frs = Object.entries(frs).reduce((newObj, [key, r]) => {
		newObj[key] = getFrGtc(r);
		return newObj;
	}, {});

	// デフォルト値の削除
	// if ('1fr 1fr' === gtcs._) delete gtcs._;

	const blockProps = {
		// lismClass: 'l--ratioGrid',
		// isGrid: true,
		modifier: 'fractions',
		gap: 20, // 初期値
		gtc: frs,
		// lismVar: clms,
	};

	return (
		<Grid {...blockProps} {...props}>
			{/* {customQueryCSS && <style jsx>{customQueryCSS}</style>} */}
			{children}
		</Grid>
	);
}
