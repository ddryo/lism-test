// import React from 'react';
import { Layouter } from '../Layouter';
import { Icon } from '../Icon';
import { SideFlex } from '../Flex';
// import { Center } from '../Center';
import AlertPresets from './presets';
// const _default = defaultProps?.Alert || {};

export default function Alert({
	lismClass = {},
	// lismStyle = {},
	isFlow,
	variant,
	icon,
	keycolor,
	preset,
	iconProps = {},
	children,
	...props
}) {
	lismClass.c = 'c--alert';
	if (variant) lismClass.c += ` c--alert--${variant}`;

	const presetData = preset ? AlertPresets[preset] : null;

	if (presetData) {
		keycolor = keycolor || presetData.color || null;
		icon = icon || presetData.icon || null;
		iconProps.label = iconProps.label || presetData.label || null;
	}

	// if (iconSize) {
	// 	lismStyle['--icon--size'] = iconSize;
	// }

	// Center: 縦並び時にセンター寄せしたい
	return (
		<SideFlex
			side='first'
			lismState={['is--colorbox']}
			lismClass={lismClass}
			keycolor={keycolor}
			radius='2'
			{...props}
		>
			{icon && (
				// <div className='c--alert__icon l--center is--side'>
				<Icon lismClass={{ c: 'c--alert__icon' }} icon={icon} {...iconProps} />
				// </div>
			)}
			<Layouter className='c--alert__body' isFlow={isFlow}>
				{children}
			</Layouter>
		</SideFlex>
	);
}
