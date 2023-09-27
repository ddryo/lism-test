import React from 'react';
import { Core } from '../Core';
import { Grid } from '../Grid';
import { Icon } from '../Icon';

// variant
export default function Button({
	icon,
	iconOffset,
	leftIcon,
	rightIcon,
	// label,
	variant = 'fill',
	color = 'basic',
	children,
	// iconPosition,
	isGrid,
	...props
}) {
	const blockProps = {
		blockClass: 'l--button',
		lismStyle: {},
		'data-variant': variant,
	};

	// if (iconPosition === 'edge') {
	// 	blockProps['data-icon-position'] = 'edge';
	// }

	if (iconOffset) {
		blockProps.lismStyle['--icon--offset'] = iconOffset;
	}

	if (color) {
		blockProps.keycolor = color;

		// if ('fill' === variant) {
		// 	blockProps.bgc = color;
		// 	// blockProps.c = 'white';
		// } else if ('outline' === variant) {
		// 	blockProps.keycolor = color;
		// 	// blockProps.c = color;
		// 	// blockProps.bdc = color;
		// } else if ('ghost' === variant) {
		// 	// test
		// 	blockProps.c = color;
		// } else {
		// 	blockProps.keycolor = color;
		// }
	}

	// if (undefined !== leftIcon || undefined !== rightIcon) {
	// 	blockProps['data-has-icon'] = '1';
	// }

	const ButtonComponent = isGrid ? Grid : Core;

	// iconボタン
	// → 別コンポーネントに切り分けるべき...?
	if (icon) {
		return (
			<ButtonComponent tag='a' hover='fade' {...blockProps} p={30} {...props}>
				<Icon icon={icon} lismClass='l--button__icon e--icon' />
			</ButtonComponent>
		);
	}

	return (
		<ButtonComponent tag='a' hover='fade' {...blockProps} {...props}>
			{leftIcon && (
				<Icon icon={leftIcon} lismClass='l--button__icon e--icon' data-position='left' />
			)}
			<span className='l--button__text'>{children}</span>
			{rightIcon && (
				<Icon icon={rightIcon} lismClass='l--button__icon e--icon' data-position='right' />
			)}
		</ButtonComponent>
	);
}
