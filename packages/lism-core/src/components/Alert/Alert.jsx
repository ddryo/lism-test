// import React from 'react';
import { Layouter } from '../Layouter';
import { Icon } from '../Icon';
import { SideFlex } from '../Flex';
import { Center } from '../Center';
import { AlertPresets } from '../../config/components';
// const _default = defaultProps?.Alert || {};

export default function Alert({
	lismClass = {},
	lismStyle = {},
	isFlow,
	variant,
	icon,
	keycolor,
	preset = 'alert',
	iconSize,
	iconLabel,
	children,
	...props
}) {
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

	if (iconSize) {
		lismStyle['--icon--size'] = iconSize;
	}

	// Center: 縦並び時にセンター寄せしたい
	return (
		<SideFlex
			fix='first'
			lismState={['has--mixcolor']}
			lismClass={lismClass}
			lismStyle={lismStyle}
			keycolor={keycolor}
			radius='2'
			{...props}
		>
			{icon && (
				<Center className='c--alert__icon is--side'>
					<Icon icon={icon} label={iconLabel} size='1em' />
				</Center>
			)}
			<Layouter className='c--alert__body' isFlow={isFlow}>
				{children}
			</Layouter>
		</SideFlex>
	);
}
