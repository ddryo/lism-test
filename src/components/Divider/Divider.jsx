import React from 'react';
import classnames from 'classnames';
// import Image from "next/image";
// import { Box, Stack, Layer, MediaLayer, FilterLayer } from '../index';
import { filterEmptyObj } from '../../lib';

import DividerSVG from './svg';

const animationTypes = {
	Wave1: 'loop',
	Wave2: 'lr',
	Wave3: 'lr',
};

// aria-hidden="true"
// focusable="false"

// align: full, wide, ''
function Divider({
	// children,
	className,
	type = 'Wave1',
	flip,
	isAnimation,
	height,
	color,
	style = {},
	...attrs
}) {
	const blockProps = {
		className: classnames('l--divider', className, {}),
		style: {
			...style,
			'--height': height || null,
			'--color': color || null,
		},
		'data-type': type,
		'data-flip': flip || null,
		...attrs,
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

	const svgType = type.charAt(0).toUpperCase() + type.slice(1); // 1文字目を大文字にする
	// console.log("svgType", svgType);
	const SVG = DividerSVG[svgType];

	const animationType = animationTypes[svgType] || 'lr';

	if (isAnimation) {
		return (
			<div {...blockProps} data-animation={animationType}>
				<div className='l--divider__inner'>
					{'loop' === animationType && (
						// <div className="l--divider__loopWraper">
						<>
							<SVG {...svgProps} />
							<SVG {...svgProps} />
						</>
						// </div>
					)}
					{'loop' !== animationType && <SVG {...svgProps} />}
				</div>
			</div>
		);
	}
	return (
		<div {...blockProps}>
			<div className='l--divider__inner'>
				<SVG {...svgProps} />
			</div>
		</div>
	);
}
export default Divider;
