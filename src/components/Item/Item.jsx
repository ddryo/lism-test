import React from 'react';
import { Box } from '../index';

// 主要なキーワードはdata属性で出力
const gridAreaPresets = [
	'left',
	'right',
	'top',
	'bottom',
	'center',
	'header',
	'footer',
	'body',
	'aside',
	'main',
	'sub',
	// 'side',
	// 'content',
	// 'nav',
	// 'fix',
	// 'fluid',
];

// import classnames from "classnames";
// function Item({}) {}
export function Item({ children, ga, ...props }) {
	// as align-self: start;
	// js justify-self: center;

	if (ga && gridAreaPresets.includes(ga)) {
		props['data-ga'] = ga;
	} else if (ga) {
		props.ga = ga; // propsへ戻す
	}
	return (
		<Box isItem {...props}>
			{children}
		</Box>
	);
}
