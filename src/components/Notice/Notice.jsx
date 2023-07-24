import React from 'react';
import { getMaybeColorVar } from '../../lib';
import { Box, Stack } from '../Box';
import { Lism } from '../Lism';
import { Icon } from '../Icon';

import {
	PhPencilSimple,
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
		icon: PhPencilSimple,
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
	Notice: {
		// radius: '2',
	},
};
export default function Notice({
	icon,
	caption,
	variant = 'cbox',
	preset,
	color,
	// boxColor,
	// iconColor,
	style = {},
	children,
	...props
}) {
	// --keyColor

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
	color = color || presetColor || 'main';

	// border = bd
	const boxProps = {
		blockClass: 'b--notice',
		gap: 0,
		'data-variant': variant,
		style,
		...defaultProps.Notice,
		...props,
	};

	const headProps = {
		blockClass: 'b--notice__head',
		gap: 20,
	};

	const bodyProps = {
		blockClass: 'b--notice__body',
		flowGap: 40,
	};

	const captionProps = {
		className: 'b--notice__caption',
	};

	// colorの調整
	if ('cbox' === variant) {
		boxProps.cbox = color;
		headProps.c = color;
		headProps.fw = 700;
		// captionProps.className += ' -filter:darker';
		// style['--keyColor'] = getMaybeColorVar(color);
	} else if ('fill' === variant) {
		boxProps.bdc = color;
		headProps.bgc = color;
		headProps.c = 'white';
	} else {
		// outline, onbd
		boxProps.bdc = color;
		headProps.c = color;
		headProps.fw = 700;
	}

	// else if (color) {
	// 	boxProps.style['--keyColor'] = getMaybeColorVar(color);
	// } else if (presetColor) {
	// 	boxProps.style['--keyColor'] = getMaybeColorVar(presetColor);
	// }

	// paddingの調整
	if ('fill' === variant) {
		bodyProps.p = ['-', '-'];
		headProps.p = ['-', '-'];
		headProps.pY = ['-', '-'];
	} else if ('onbd' === variant) {
		boxProps.p = ['-', '-'];
		headProps.pX = 20;
	} else {
		boxProps.p = ['-', '-'];
		boxProps.gap = 40;
	}

	if ('onbd' === variant) {
		headProps.pX = 20;
	}

	return (
		<Stack {...boxProps}>
			<Lism {...headProps} isFlex ai='center' fxw='nowrap'>
				{icon && <Icon icon={icon} blockClass='b--notice__icon' size='1.5em' />}
				<span {...captionProps}>{caption}</span>
			</Lism>

			<Lism isFlow {...bodyProps}>
				{children}
			</Lism>
		</Stack>
	);
}
