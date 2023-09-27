import React from 'react';
import { Stack } from '../Flex/Stack';
import { Lism } from '../Lism';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

import {
	PhNotePencil,
	PhWarningCircle,
	PhWarning,
	PhCheck,
	PhQuestion,
	PhLightbulb,
	PhInfo,
} from '../Alert/icons/ph';

// import classnames from 'classnames';

const AlertPresets = {
	memo: {
		icon: PhNotePencil,
		color: 'gray',
	},
	error: {
		icon: PhWarningCircle,
		color: 'red',
	},
	warning: {
		icon: PhWarning,
		color: 'yellow',
	},
	success: {
		icon: PhCheck,
		color: 'green',
	},
	question: {
		icon: PhQuestion,
		color: 'purple',
	},
	point: {
		icon: PhLightbulb,
		color: 'orange',
	},
	info: {
		icon: PhInfo,
		color: 'blue',
	},
};
// const AlertColors = {}

const defaultProps = {
	Note: {
		// radius: '2',
	},
};
export default function Note({
	icon,
	caption,
	variant = 'note',
	preset,
	color,
	// boxColor,
	// iconColor,
	style = {},
	children,
	// headProps,
	// bodyProps,
	flowGap,
	...props
}) {
	// if ('cbox' === variant) {
	// 	preset = preset || 'memo';
	// }
	let presetColor;
	let presetIcon;

	if (preset) {
		const thePresetData = AlertPresets[preset];
		if (thePresetData) {
			presetColor = thePresetData.color;
			presetIcon = thePresetData.icon;
		}
	}

	icon = icon || presetIcon;
	color = color || presetColor || 'basic';

	const boxProps = {
		blockClass: 'b--note',
		'data-variant': variant,
		// p: '-',
		// gap: '-',
		// radius: '-',
		style,
		...defaultProps.Note,
		...props,
	};

	const headProps = {
		// gap: 20,
	};

	const bodyProps = {
		flowGap: flowGap || 40,
	};

	// colorの調整
	boxProps.keycolor = color;

	// if ('fill' === variant) {
	// 	boxProps.gap = 0;
	// 	boxProps.p = null; // boxで --p を使わない（0にもしないように注意）
	// 	boxProps.ov = 'hidden'; // radiusつけたときに fill部分がはみ出さないように

	// 	// --p を継承する
	// 	bodyProps.p = '-';

	// 	// X方向は親の --p を引き継ぎ、Y方向は別途指定
	// 	headProps.pX = '-';
	// 	headProps.pY = 20;
	// }

	if ('bump' === variant) {
		// borderの上に重ねる
		Object.assign(headProps, {
			pos: 'absolute',
			top: 0,
			left: 0,
			translate: '0 -50%',
		});
		// headProps.pos = 'absolute';
		bodyProps.mbs = '10';
	}
	// else {}

	let Component = 'bump' === variant ? Lism : Stack;
	return (
		<Component {...boxProps}>
			{caption && (
				<Flex blockClass='b--note__head' {...headProps}>
					{icon && <Icon icon={icon} blockClass='b--note__icon' size='1.5em' />}
					<span className='b--note__caption'>{caption}</span>
				</Flex>
			)}

			<Lism blockClass='b--note__body' isFlow {...bodyProps}>
				{children}
			</Lism>
		</Component>
	);
}
