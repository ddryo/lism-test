import React from 'react';
import { Stack } from '../Stack';
import { Lism } from '../Lism';
import { Flex } from '../Flex';
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
	variant,
	preset,
	color,
	// boxColor,
	// iconColor,
	style = {},
	children,
	// headProps,
	// bodyProps,
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

	const boxProps = {
		blockClass: 'b--notice',
		'data-variant': variant,
		p: '-',
		gap: '-',
		// radius: '-',
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
		boxProps.gap = 0;
		boxProps.p = null; // boxで --p を使わない（0にもしないように注意）
		boxProps.ov = 'hidden'; // radiusつけたときに fill部分がはみ出さないように

		// --p を継承する
		bodyProps.p = '-';

		// X方向は親の --p を引き継ぎ、Y方向は別途指定
		headProps.pX = '-';
		headProps.pY = 20;
	} else if ('cap-onbd' === variant) {
		// borderの上に重ねる
		Object.assign(headProps, {
			pos: 'absolute',
			pX: 20,
			top: 0,
			left: 0,
			translate: '0 -50%',
		});
	}
	// else {}

	return (
		<Stack {...boxProps}>
			<Flex {...headProps}>
				{icon && <Icon icon={icon} blockClass='b--notice__icon' size='1.5em' />}
				<span {...captionProps}>{caption}</span>
			</Flex>

			<Lism isFlow {...bodyProps}>
				{children}
			</Lism>
		</Stack>
	);
}
