import React from 'react';
// import { getMaybeColorVar } from '../../lib';
import { Lism } from '../Lism';
import { BlockIcon } from '../Icon';
// import { Center } from '../Center';

import {
	LsAlertOutline,
	LsInfoOutline,
	LsLightbulbOutline,
	LsWarningOutline,
	LsPen,
	LsCheck,
	LsHatena,
} from './icons/loos-icons';

import {
	PhPencilSimple,
	PhWarningCircle,
	PhWarning,
	PhCheck,
	PhQuestion,
	PhLightbulb,
	PhInfo,
} from './icons/ph';
// import classnames from 'classnames';

const AlertPresets = {
	memo: {
		icon: LsPen,
		color: 'gray',
	},
	error: {
		icon: LsAlertOutline,
		color: 'red',
	},
	warning: {
		icon: LsWarningOutline,
		color: 'yellow',
	},
	success: {
		icon: LsCheck,
		color: 'green',
	},
	question: {
		icon: LsHatena,
		color: 'purple',
	},
	point: {
		icon: LsLightbulbOutline,
		color: 'orange',
	},
	info: {
		icon: LsInfoOutline,
		color: 'blue',
	},
};
// const AlertColors = {}

// phIcons
const AlertIcons = {
	memo: PhPencilSimple,
	error: PhWarningCircle,
	warning: PhWarning,
	success: PhCheck,
	question: PhQuestion,
	point: PhLightbulb,
	info: PhInfo,
};

// variant='red,blue', ...? or alert, warning, info, success, danger
export default function Alert({
	icon,
	// label,
	color,
	// size,
	preset = 'memo',
	variant = 'cbox',
	iconProps = {},
	style = {},
	children,
	...props
}) {
	const blockProps = {
		blockClass: 'b--alert',
		// gap: 35,
		// p: 35,
		ai: 'center',
		fxw: 'nowrap',
		'data-variant': variant,
		// radius: '2',
		style,
		...props,
	};

	let presetColor;
	let presetIcon;

	if (preset) {
		const thePresetData = AlertPresets[preset];
		if (thePresetData) {
			presetColor = thePresetData.color;
			presetIcon = AlertIcons[preset] || thePresetData.icon;
			// presetIcon = thePresetData.icon;
		}
	}

	icon = icon || presetIcon;
	color = color || presetColor || 'main';
	blockProps.keycolor = color;

	// if ('fill' === variant) {
	// 	// blockProps.c = 'white';
	// 	blockProps.bgc = color;
	// } else if ('outline' === variant) {
	// 	blockProps.bdc = color;
	// } else if ('cbox' === variant) {
	// 	color = color || presetColor;
	// 	blockProps.cbox = color;
	// }

	// iconProps を渡すことを考えると、アイコンは BlockIcon がいい
	return (
		<Lism isFlex p={['-', '-']} gap={['-', '-']} {...blockProps}>
			{icon && (
				// b--icon を打ち消していることに留意
				<BlockIcon blockClass='b--alert__icon' icon={icon} size='1.5em' {...iconProps} />
			)}
			<Lism blockClass='b--alert__body' isFlow flowGap={30}>
				{children}
			</Lism>
		</Lism>
	);
}
