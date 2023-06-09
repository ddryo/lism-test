import React from 'react';
import { Grid } from '../Grid';
// import { DynamicCSS } from '../DynamicCSS';

// 1:2:3 → 1fr 2fr 3fr に変換
function ratioToFr(ratio) {
	if (!ratio) return false;

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
	xs,
	ratios = {}, // 一応 ratios でも受け付ける？
	style = {},
	// customQuery,
	...props
}) {
	ratios = { _: ratio, sm, xs, ...ratios };

	style = {
		...style,
		...{
			'--gtc': ratioToFr(ratios._) || null,
			'--gtc--sm': ratioToFr(ratios.sm) || null,
			'--gtc--xs': ratioToFr(ratios.xs) || null,
			// "--gtc--lg": ratioToFr(ratios.lg) || null,
			// "--gtc--xl": ratioToFr(ratios.xl) || null,
		},
	};

	return (
		<Grid modifier='ratio' {...props} style={style}>
			{/* {customQueryCSS && <style jsx>{customQueryCSS}</style>} */}
			{children}
		</Grid>
	);
}
