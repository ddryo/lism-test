// import React from 'react';
import { Layout } from '../Layout';
import { Icon } from '../Icon';
import { FluidFix } from '../Flex/FluidFix';
import { Center } from '../Flex/Center';
import { defaultProps, AlertPresets } from '../../config/components';

const _default = defaultProps?.Alert || {};

export default function Alert({ lismClass = {}, lismStyle = {}, isFlow, ...props }) {
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
				<Center className='c--alert__icon'>
					<Icon icon={icon} label={iconLabel} size='1em' />
				</Center>
			)}
			<Layout className='c--alert__body' isFlow={isFlow}>
				{children}
			</Layout>
		</FluidFix>
	);
}
