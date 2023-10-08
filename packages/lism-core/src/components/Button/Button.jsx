import React from 'react';
import { Core } from '../Core';
import { Grid } from '../Grid';
import { Icon } from '../Icon';

// variant
export default function Button({
	lismClass = {},
	lismStyle = {},
	icon,
	iconOffset,
	leftIcon,
	rightIcon,
	variant = 'fill',
	color = 'basic',
	children,
	isGrid,
	...props
}) {
	let btnClass = 'c--button';
	if (variant) btnClass += ` c--button--${variant}`;
	Object.assign(lismClass, { c: btnClass });

	if (iconOffset) {
		lismStyle['--icon--offset'] = iconOffset;
	}

	const blockProps = {
		lismClass,
		lismStyle,
		// 'data-variant': variant,
	};

	if (color) {
		blockProps.keycolor = color;
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
				<Icon icon={icon} lismClass={{ c: 'c--button__icon' }} />
			</ButtonComponent>
		);
	}

	return (
		<ButtonComponent tag='a' hover='fade' {...blockProps} {...props}>
			{leftIcon && (
				<Icon icon={leftIcon} lismClass={{ c: 'c--button__icon' }} data-position='left' />
			)}
			<span className='c--button__text'>{children}</span>
			{rightIcon && (
				<Icon icon={rightIcon} lismClass={{ c: 'c--button__icon' }} data-position='right' />
			)}
		</ButtonComponent>
	);
}
