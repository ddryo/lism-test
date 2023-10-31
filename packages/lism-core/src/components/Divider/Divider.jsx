// import React from 'react';
import { Core } from '../Core';
import ShapeDividerSVG from './ShapeDividerSVG';

// const animationTypes = {
// 	Wave1: 'loop',
// 	Wave2: 'lr',
// 	Wave3: 'lr',
// };

// aria-hidden="true"
// focusable="false"

// align: full, wide, ''
export default function Divider({
	lismClass = {},
	lismStyle = {},
	shape = 'Wave1',
	isFlip,
	isAnimation,
	level = 5, // -10~10?
	stretch, // 1~2
	offset, // -25% ~ 25%

	// 旧
	type,
	position, // = 'bottom', // place?
	...props
}) {
	if (level === 0) return null;

	// 旧type
	if (type) shape = type;

	// 旧 position
	if (position === 'top') isFlip = true;

	let flipX = isFlip; // X(垂直)方向の反転 ↔
	let flipY = isFlip; // Y(水平)方向の反転 ↕

	// 1文字目を大文字にする
	shape = shape.charAt(0).toUpperCase() + shape.slice(1);
	if (level < 0) {
		level = level * -1; // 正の値にする

		// shape が "Circle", "Arrow" で始まるときはsvgファイルを変更する
		if (shape.match(/^(Circle|Arrow)/)) {
			shape += '_R';
		} else {
			flipX = !flipX; // それ以外は左右反転する
		}
	}

	// const dataFlip = classnames(flipX && 'x', flipY && 'y');
	let dataFlip = '';
	if (flipX) dataFlip += 'x';
	if (flipY) dataFlip += 'y';

	const transforms = [];
	if (flipX) transforms.push('scaleX(-1)');
	if (flipY) transforms.push('scaleY(-1)');

	if (dataFlip) props['data-flip'] = dataFlip;

	lismStyle = Object.assign(lismStyle, {
		'--level': level || null,
		'--offset': offset || null,
		'--stretch': stretch || null,
	});

	lismClass.e = 'e--shapeDivider';

	let svgClass = 'e--shapeDivider__svg';
	if (isAnimation) svgClass += ' -animation';
	return (
		<Core lismClass={lismClass} lismStyle={lismStyle} data-shape={shape} {...props}>
			<Core className='e--shapeDivider__inner' transform={transforms?.join(' ') || null}>
				<ShapeDividerSVG className={svgClass} shape={shape} level={level} />
			</Core>
		</Core>
	);
}
