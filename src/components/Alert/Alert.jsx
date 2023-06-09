import React from 'react';
import { getMaybeColorVar } from '../../lib';
import { Lism } from '../Lism';
import { Center } from '../Center';
import { Icon } from '../Icon';

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

// import {
// 	// Smiley,
// 	// Heart,
// 	Warning,
// 	WarningCircle,
// 	Info,
// 	PencilSimple,
// 	Check,
// 	Question,
// 	Lightbulb,
// 	// ArrowCircleRight,
// } from '@phosphor-icons/react';

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
	size,
	preset = 'memo',
	variant = 'cbox',
	iconProps = {},
	style = {},
	children,
	...props
}) {
	const blockProps = {
		blockClass: 'b--alert',
		// _utility: '-gap@sm:',
		// className: cboxClass,
		// lh: 1.5,
		// radius: '2',
		'data-variant': variant,
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

	if ('fill' === variant || 'outline' === variant) {
		color = color || `${presetColor}.400`;
		blockProps.style['--keyColor'] = getMaybeColorVar(color);
	} else {
		color = color || presetColor;
		blockProps.cbox = color;
	}

	if ('big' === size) {
		return (
			<Center {...blockProps} padding={40} gap={30}>
				{icon && (
					<Icon icon={icon} blockClass='b--alert__icon' size='2.5em' {...iconProps} />
				)}
				<Center blockClass='b--alert__body' gap={30}>
					{children}
				</Center>
			</Center>
		);
	}

	blockProps._utility = '-gap@sm: -p@sm:';

	return (
		<Lism {...blockProps} gap={40} padding={40} isFlex ai='center' fxw='nowrap'>
			{icon && <Icon icon={icon} blockClass='b--alert__icon' size='1.5em' {...iconProps} />}
			<Lism blockClass='b--alert__body' isFlow gap={30}>
				{children}
			</Lism>
		</Lism>
	);
}
