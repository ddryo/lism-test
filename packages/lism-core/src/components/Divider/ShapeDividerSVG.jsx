// import React from 'react';
// import { Core } from '../Core';
import SVGs from './svg';

const svgResetProps = {
	id: null,
	xmlSpace: null,
	'aria-hidden': 'true',
	focusable: 'false',
	preserveAspectRatio: 'none',
	style: {},
};
export default function ShapeDividerSVG({ className, shape, level }) {
	const SVG = SVGs[shape] || null;
	// svg取得できなければ
	if (!SVG) return null;

	// ちらつきを抑えるためにclampでの最小値を設定
	return <SVG {...svgResetProps} className={className} width='100%' height={`${level * 6}px`} />;
}
