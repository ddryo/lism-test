import React from 'react';
import { getMaybeColorVar } from '../../lib';
import { Box } from '../index';
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

	if ('cbox' === variant) {
		preset = preset || 'memo';
	}
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

	if ('cbox' === variant) {
		color = color || presetColor;
	} else if (color) {
		style['--keyColor'] = getMaybeColorVar(color);
	} else if (presetColor) {
		style['--keyColor'] = getMaybeColorVar(`${presetColor}.400`);
	}

	// border = bd
	const blockProps = {
		blockClass: 'b--notice',
		// radius: '1',
		'data-variant': variant,
		// maxW: "60em",
		style,
		...defaultProps.Notice,
		...props,
	};

	const headProps = {
		blockClass: 'b--notice__head',
		gap: 20,
		// className: 'b--notice__head -gap:20 -ai:c ...',
	};

	const captionProps = {
		className: 'b--notice__caption',
	};

	if ('fill' !== variant) {
		blockProps.padding = 45;
		// blockProps._utility = '-p@sm:';
	}

	if ('online' === variant) {
		headProps.padding = { X: 20 };
	} else if ('cbox' === variant) {
		blockProps.cbox = color;
		captionProps.className += ' -filter:darker';
	}

	return (
		<Box {...blockProps}>
			<Lism {...headProps} isFlex ai='center' fxw='nowrap'>
				{icon && <Icon icon={icon} blockClass='b--notice__icon' size='1.5em' />}
				<span {...captionProps}>{caption}</span>
			</Lism>

			<Lism blockClass='b--notice__body' isFlow gap={40}>
				{children}
			</Lism>
		</Box>
	);
}
