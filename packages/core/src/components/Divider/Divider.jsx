import React from 'react';
import classnames from 'classnames';
import { Lism } from '../Lism';
// import Image from "next/image";
// import { Box, Stack, Layer, MediaLayer, FilterLayer } from '../index';
// import { filterEmptyObj } from '../../lib';

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
	// children,
	className,
	type = 'Wave1',
	position = 'bottom',
	// flip,
	isAnimation,
	// height,
	level, // -10~10?
	// scaleX,
	stretch, // 1~2
	offset, // -25% ~ 25%
	// color,
	// style = {},
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
		className: classnames('l--divider', className, {}),
		'data-type': type,
		'data-flip': dataFlip || null,
		...attrs,
	};

	const lismStyle = {
		'--level': level || null,
		'--offset': offset || null,
		'--stretch': stretch || null,
	};

	const svgProps = {
		id: null,
		xmlSpace: null,
		className: 'l--divider__svg',
		'aria-hidden': 'true',
		focusable: 'false',
		preserveAspectRatio: 'none',
		style: {},
	};

	const animationType = 'lr'; //animationTypes[svgType] || 'lr';

	let svg = <SVG {...svgProps} />;
	if (isAnimation) {
		blockProps['data-animation'] = animationType;

		if ('loop' === animationType) {
			svg = (
				<>
					<SVG {...svgProps} />
					<SVG {...svgProps} />
				</>
			);
		}
	}

	return (
		<Lism {...blockProps} lismStyle={lismStyle}>
			<div className='l--divider__inner'>{svg}</div>
		</Lism>
	);
}
export default Divider;
