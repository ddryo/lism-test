import React from 'react';
import { Flow } from '../Flow';
import { Icon } from '../Icon';
import { SideFixFlex } from '../SideFix';
import { Center } from '../Flex/Center';

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
	// PhPencilSimple,
	PhWarningCircle,
	PhWarning,
	PhCheck,
	PhQuestion,
	PhLightbulb,
	PhInfo,
	PhNotePencil,
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
	memo: PhNotePencil, //PhPencilSimple,
	error: PhWarningCircle,
	warning: PhWarning,
	success: PhCheck,
	question: PhQuestion,
	point: PhLightbulb,
	info: PhInfo,
};

// memo: 'U+2712', //PhPencilSimple,
// error: 'U+1F6AB', //PhWarningCircle,
// warning: 'U+26A0', //PhWarning,
// success: 'U+2705', // PhCheck,
// question: 'U+2754', //PhQuestion,
// point: 'U+1F4A1', // PhLightbulb,
// info: 'U+2139', // PhInfo,

// variant='red,blue', ...? or alert, warning, info, success, danger
export default function Alert({
	icon,
	// label,
	color,
	// size,
	preset = 'memo',
	// variant,
	iconProps = {},
	style = {},
	children,
	...props
}) {
	const blockProps = {
		blockClass: 'b--alert',
		// ai: 'center',
		// fxw: 'nowrap',
		// fxd: ['column', 'row'],
		// radius: '-',
		// p: '-',
		// gap: '-',
		// 'data-variant': variant,
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
	color = color || presetColor || 'basic';
	blockProps.keycolor = color;

	// Center: 縦並び時にセンター寄せしたい
	return (
		<SideFixFlex fix='first' {...blockProps}>
			{icon && (
				<Center blockClass='b--alert__icon'>
					<Icon icon={icon} size='1.5em' {...iconProps} />
				</Center>
			)}
			<Flow blockClass='b--alert__body' flowGap={30}>
				{children}
			</Flow>
		</SideFixFlex>
	);
}
