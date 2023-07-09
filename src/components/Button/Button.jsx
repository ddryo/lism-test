import React from 'react';
import { getMaybeColorVar } from '../../lib';
import { Lism } from '../Lism';
import { InlineIcon } from '../Icon';

// variant
export default function Button({
	icon,
	leftIcon,
	rightIcon,
	// label,
	variant = 'fill',
	btnColor,
	children,
	style = {},
	...props
}) {
	if (btnColor) {
		style['--btn--c'] = getMaybeColorVar(btnColor);
	}
	const blockProps = {
		lismClass: 'l--button',
		// gap: 20,
		isFlex: true,
		padding: { X: 40, Y: 30 },
		lh: 1.5,
		// color: "white",
		// bgc: "main",
		width: 'fit-content',
		// miw: "3em",
		radius: '1',
		// shadow: "1",
		'data-variant': variant,
		style,
		...props,
	};

	// if (variant === "fill") {
	// 	style["--btn--c"] = getMaybeColorVar(btnColor || "main");
	// } else if (variant === "outline") {
	// 	blockProps.outlineColor = btnColor || "main";
	// }
	// fill:main

	// const blockProps = {
	// 	className,
	// 	style,
	// 	...attrs,
	// };

	if (undefined !== icon) {
		blockProps['data-has-icon'] = '1';
	}

	return (
		<Lism tag='a' {...blockProps}>
			{leftIcon && (
				<InlineIcon icon={leftIcon} lismClass='l--button__icon' data-position='left' />
			)}
			<span className='l--button__text'>{children}</span>
			{rightIcon && (
				<InlineIcon icon={rightIcon} lismClass='l--button__icon' data-position='right' />
			)}
		</Lism>
	);
}
