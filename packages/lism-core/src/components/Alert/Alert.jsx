import React from 'react';
import { Flow } from '../Flow';
import { Icon } from '../Icon';
import { FluidFix } from '../Flex/FluidFix';
import { Center } from '../Flex/Center';
import { defaultProps, AlertPresets } from '../../config/components';

const _default = defaultProps?.Alert || {};

export default function Alert({
	lismClass = {},
	lismStyle = {},

	...props
}) {
	props = Object.assign({}, _default, props);
	let {
		variant,
		icon,
		keycolor,
		preset = 'alert',
		iconSize,
		iconLabel,
		children,
		...attrs
	} = props;

	lismClass.c = 'c--alert';
	if (variant) lismClass.c += ` c--alert--${variant}`;

	if (preset) {
		const presetData = AlertPresets[preset];
		if (presetData) {
			keycolor = keycolor || presetData.color || null;
			icon = icon || presetData.icon || null;
			iconLabel = iconLabel || presetData.label || null;
		}
	}

	if (keycolor) {
		attrs.keycolor = keycolor;
	}
	if (iconSize) {
		lismStyle['--icon--size'] = iconSize;
	}

	// Center: 縦並び時にセンター寄せしたい
	return (
		<FluidFix fix='first' lismClass={lismClass} lismStyle={lismStyle} {...attrs}>
			{icon && (
				<Center lismClass={{ c: 'c--alert__icon' }}>
					<Icon icon={icon} label={iconLabel} size='1em' />
				</Center>
			)}
			<Flow lismClass={{ c: 'c--alert__body' }} gap='s'>
				{children}
			</Flow>
		</FluidFix>
	);
}
