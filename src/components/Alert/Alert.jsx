import React from 'react';
// import { getMaybeColorVar } from '../../lib';
import { Lism } from '../Lism';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { SideFixFlex } from '../SideFix';
import { Center } from '../Center';

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
	color = color || presetColor || 'main';
	blockProps.keycolor = color;

	// iconProps を渡すことを考えると、アイコンは BlockIcon がいい ?
	return (
		<SideFixFlex fix='first' {...blockProps}>
			{icon && (
				<Center className='b--alert__icon'>
					<Icon icon={icon} size='1.5em' {...iconProps} />
				</Center>
			)}
			<Lism blockClass='b--alert__body' isFlow flowGap={30}>
				{children}
			</Lism>
		</SideFixFlex>
	);
}
