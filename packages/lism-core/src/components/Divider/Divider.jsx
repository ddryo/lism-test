// import React from 'react';
import classnames from 'classnames';
import { Core } from '../Core';

import DividerSVG from './svg';

// const animationTypes = {
// 	Wave1: 'loop',
// 	Wave2: 'lr',
// 	Wave3: 'lr',
// };

// aria-hidden="true"
// focusable="false"

// align: full, wide, ''
function Divider({
	lismClass = {},
	lismStyle = {},
	type = 'Wave1',
	position = 'bottom',
	isAnimation,
	level = 5, // -10~10?
	// flip,
	// scaleX,
	stretch, // 1~2
	offset, // -25% ~ 25%
	// color,
	...attrs
}) {
	let flipXaxis = 'bottom' !== position; // 垂直方向の反転 ↕
	let flipYaxis = 'bottom' !== position; // 水平方向の反転 ↔

	let _TYPE = type.charAt(0).toUpperCase() + type.slice(1); // 1文字目を大文字にする

	if (level === 0) {
		return null;
	} else if (level < 0) {
		level = level * -1;

		// type が "Circle", "Arrow" で始まるかどうか
		if (_TYPE.match(/^(Circle|Arrow)/)) {
			_TYPE += '_R';
		} else {
			// それ以外は左右反転するだけでOK
			flipYaxis = !flipYaxis;
		}
	}

	const SVG = DividerSVG[_TYPE] || null;

	if (!SVG) return null;

	const dataFlip = classnames({
		x: flipXaxis,
		y: flipYaxis,
	});

	const blockProps = {
		'data-type': type,
		'data-flip': dataFlip || null,
		'data-animation': isAnimation ? '1' : null, //animationType;
		...attrs,
	};

	lismStyle = Object.assign(lismStyle, {
		'--level': level || null,
		'--offset': offset || null,
		'--stretch': stretch || null,
	});

	const svgProps = {
		id: null,
		xmlSpace: null,
		className: 'l--divider__svg',
		'aria-hidden': 'true',
		focusable: 'false',
		preserveAspectRatio: 'none',
		width: '100%',
		height: `${level * 6}px`, // clampでの最小値
		style: {},
	};

	let svg = <SVG {...svgProps} />;
	// if (isAnimation) {
	// const animationType = 'lr'; //animationTypes[svgType] || 'lr';
	// if ('loop' === animationType) {
	// 	svg = (
	// 		<><SVG {...svgProps} /><SVG {...svgProps} /></>
	// 	);
	// }
	// }

	lismClass.l = 'l--divider';
	return (
		<Core {...blockProps} lismClass={lismClass} lismStyle={lismStyle}>
			<div className='l--divider__inner'>{svg}</div>
		</Core>
	);
}
export default Divider;
