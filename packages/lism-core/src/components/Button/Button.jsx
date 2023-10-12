import React from 'react';
import { Core } from '../Core';
import { Grid } from '../Grid';
import { Icon } from '../Icon';
import { defaultProps } from '../../config/components';
const _default = defaultProps?.Button || {};

// variant
export default function Button({ lismClass = {}, lismStyle = {}, ...props }) {
	props = Object.assign({}, _default, props);
	let { icon, iconOffset, leftIcon, rightIcon, variant, children, isGrid, ...attrs } = props;

	lismClass.c = 'c--button';
	if (variant) lismClass.c += ` c--button--${variant}`;

	if (iconOffset) {
		lismStyle['--icon--offset'] = iconOffset;
	}

	const blockProps = {
		lismClass,
		lismStyle,
		// 'data-variant': variant,
	};

	// if (color) {
	// 	blockProps.keycolor = color;
	// }

	// if (undefined !== leftIcon || undefined !== rightIcon) {
	// 	blockProps['data-has-icon'] = '1';
	// }

	const ButtonComponent = isGrid ? Grid : Core;

	// iconボタン
	// → 別コンポーネントに切り分けるべき...?
	if (icon) {
		return (
			<ButtonComponent tag='a' hover='fade' {...blockProps} p={30} {...attrs}>
				<Icon icon={icon} lismClass={{ c: 'c--button__icon' }} />
			</ButtonComponent>
		);
	}

	return (
		<ButtonComponent tag='a' hover='fade' {...blockProps} {...attrs}>
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
