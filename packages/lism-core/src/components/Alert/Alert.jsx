// import React from 'react';
import { Layouter } from '../Layouter';
import { Icon } from '../Icon';
import { SideFlex } from '../Flex';
// import { Center } from '../Center';
// import AlertPresets from './presets';
import getProps from './getProps';
// const _default = defaultProps?.Alert || {};

export default function Alert({
	lismClass = {},
	isFlow,
	variant,
	// preset,
	// boxcolor,
	// icon,
	// iconProps = {},
	children,
	...props
}) {
	lismClass.c = 'c--alert';
	if (variant) lismClass.c += ` c--alert--${variant}`;

	const { icon, iconProps, ...alertProps } = getProps(props);

	// Center: 縦並び時にセンター寄せしたい
	return (
		<SideFlex side='first' lismClass={lismClass} {...alertProps}>
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
