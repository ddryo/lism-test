import React from 'react';
import { Lism } from '../Lism';
import { Icon } from '../Icon';

// variant
export default function Button({
	icon,
	iconOffset,
	leftIcon,
	rightIcon,
	// label,
	variant = 'fill',
	color = 'main',
	children,
	iconPosition,
	style = {},
	...props
}) {
	const blockProps = {
		lismClass: 'l--button',
		gap: 10,
		// isFlex: true,
		p: '-',
		// lh: 1.5,
		// w: 'fit-content',
		radius: '-',
		ai: 'center',
		// jc: 'center',
		// shadow: "1",
		'data-variant': variant,
		style,
	};

	const utils = {
		leftIcon: '',
		text: '',
		rightIcon: '',
	};

	if (iconPosition === 'edge') {
		blockProps.isGrid = true;
		// blockProps.jc = 'space-between';
		blockProps['data-icon-position'] = 'edge';
		utils.leftIcon = '-ga:l';
		utils.text = '-ga:c';
		utils.rightIcon = '-ga:r';
	} else {
		blockProps.isFlex = true;
		blockProps.jc = 'center';
		utils.leftIcon = '-fxsh:0';
		utils.rightIcon = '-fxsh:0';
	}

	if (iconOffset) {
		blockProps.style['--icon-offset'] = iconOffset;
	}

	if (color) {
		// blockProps.keycolor = color;

		if ('fill' === variant) {
			blockProps.bgc = color;
			// blockProps.c = 'white';
		} else if ('outline' === variant) {
			blockProps.keycolor = color;
			// blockProps.c = color;
			// blockProps.bdc = color;
		} else if ('text' === variant) {
			// test
			blockProps.c = color;
		} else {
			blockProps.keycolor = color;
		}
	}

	// if (undefined !== leftIcon || undefined !== rightIcon) {
	// 	blockProps['data-has-icon'] = '1';
	// }

	// iconボタン
	// → 別コンポーネントに切り分けるべき...?
	if (icon) {
		return (
			<Lism tag='a' {...blockProps} p={30} {...props}>
				<Icon icon={icon} lismClass='l--button__icon e--icon' />
			</Lism>
		);
	}

	return (
		<Lism tag='a' {...blockProps} {...props}>
			{leftIcon && (
				<Icon
					icon={leftIcon}
					lismClass='l--button__icon e--icon'
					data-position='left'
					_util={utils.leftIcon}
				/>
			)}
			<span className={`l--button__text ${utils.text}`.trim()}>{children}</span>
			{rightIcon && (
				<Icon
					icon={rightIcon}
					lismClass='l--button__icon e--icon'
					data-position='right'
					_util={utils.rightIcon}
				/>
			)}
		</Lism>
	);
}
