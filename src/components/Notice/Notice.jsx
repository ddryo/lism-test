import React from 'react';
import { Stack } from '../Box';
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
		'data-variant': variant,
		gap: 0,
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
	boxProps.keycolor = color;

	if ('fill' !== variant) {
		headProps.fw = 700;
	}

	// paddingの調整
	if ('fill' === variant) {
		// boxのpaddingを継承する
		bodyProps.p = ['-', '-'];
		headProps.p = ['-', '-'];

		// Y方向は別途指定
		headProps.pY = ['-', '-'];
	} else if ('onbd' === variant) {
		boxProps.p = ['-', '-'];
		Object.assign(headProps, {
			lismClass: 'l--layer',
			pX: 20,
			top: 0,
			left: 0,
			translate: '0 -50%',
		});
	} else {
		boxProps.p = ['-', '-'];
		boxProps.gap = '-';
	}

	if (icon) {
		Object.assign(headProps, {
			isFlex: true,
			ai: 'center',
		});
	}

	// if ('onbd' === variant) {
	// 	headProps.lismClass = 'l--layer';
	// 	headProps._util = '-t:0 -l:0 -translate:Y:-50';
	// }

	return (
		<Stack {...boxProps}>
			<Lism {...headProps}>
				{icon && <Icon icon={icon} blockClass='b--notice__icon' size='1.5em' />}
				<span {...captionProps}>{caption}</span>
			</Lism>

			<Lism isFlow {...bodyProps}>
				{children}
			</Lism>
		</Stack>
	);
}
