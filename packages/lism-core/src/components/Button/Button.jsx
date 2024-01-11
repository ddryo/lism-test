// import React from 'react';

import { Text } from '../Text';
import { Flex } from '../Flex';
import { Grid } from '../Grid';
import { Icon } from '../Icon';

// variant
export default function Button({
	lismClass = {},
	lismStyle = {},
	variant = 'fill',
	icon,
	iconOffset,
	leftIcon,
	rightIcon,
	isGrid,
	children,
	...props
}) {
	lismClass.c = 'c--button';
	if (variant) lismClass.c += ` c--button--${variant}`;

	// if (color) {
	// 	blockProps.keycolor = color;
	// }

	// if (undefined !== leftIcon || undefined !== rightIcon) {
	// 	blockProps['data-has-icon'] = '1';
	// }

	const btnProps = {
		hover: 'fade',
		// gap: 'em5',
		// py: 'em3',
		// px: 'em10',
		// jc: 'center',
		// ai: 'center',
	};
	const leftIconProps = { 'data-position': 'left' };
	const rightIconProps = { 'data-position': 'right' };
	const textProps = {};
	const ButtonComponent = isGrid ? Grid : Flex;

	if (isGrid) {
		// leftIconProps.gridItem = { gc: 1 };
		textProps.gridItem = { gc: 2, jslf: 'c' };
		// rightIconProps.gridItem = { gce: -1 };
	}

	// iconボタン
	if (icon) {
		return (
			<ButtonComponent
				tag='a'
				p={30}
				lismClass={lismClass}
				lismStyle={lismStyle}
				{...btnProps}
				{...props}
			>
				<Icon icon={icon} lismClass={{ c: 'c--button__icon' }} />
			</ButtonComponent>
		);
	}

	if (iconOffset) {
		lismStyle['--icon--offset'] = iconOffset;
	}
	return (
		<ButtonComponent
			tag='a'
			lismClass={lismClass}
			lismStyle={lismStyle}
			{...btnProps}
			{...props}
		>
			{leftIcon && (
				<Icon lismClass={{ c: 'c--button__icon' }} icon={leftIcon} {...leftIconProps} />
			)}
			<Text tag='span' className='c--button__text' {...textProps}>
				{children}
			</Text>
			{rightIcon && (
				<Icon lismClass={{ c: 'c--button__icon' }} icon={rightIcon} {...rightIconProps} />
			)}
		</ButtonComponent>
	);
}
