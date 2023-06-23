import React from 'react';
import { Box } from '../Box';

// 主要な areaキーワード はdata属性で出力
const areaPresets = [
	// 'left',
	// 'right',
	// 'top',
	// 'bottom',
	// 'center',
	'header',
	'footer',
	'body',
	// 'aside',
	// 'main',
	'fix',
	'fluid',
];

// import classnames from "classnames";
// function Item({}) {}
export function Item({ children, area, ...props }) {
	// as align-self: start;
	// js justify-self: center;

	if (area && areaPresets.includes(area)) {
		// presetキーワードの場合はdata属性で出力
		console.log('area', area);
		props['data-area'] = area;
	} else if (area) {
		props.area = area;
	}

	return (
		<Box isItem {...props}>
			{children}
		</Box>
	);
}
