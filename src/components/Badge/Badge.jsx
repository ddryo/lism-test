import React from 'react';
import { getMaybeColorVar } from '../../lib';
import { Lism } from '../Lism';
// import { InlineIcon } from '../Icon';
// import { Flex } from '../Flex';
// import { Icon } from '../Icon';

// variant
export default function Badge({
	icon,
	label,
	variant = 'fill',
	color,
	style = {},
	children,
	...props
}) {
	if (variant && color) {
		style['--badge--c'] = getMaybeColorVar(color);
	}

	const blockProps = {
		tag: 'span',
		lismClass: 'e--badge',
		// className
		radius: '1',
		padding: 10,
		// lh: 1.5,
		fz: 'S',
		fw: '700',
		style,
		'data-variant': variant,
		...props,
	};

	// if (variant === "cbox") {
	// 	blockProps.cbox = color || "main";
	// }

	return <Lism {...blockProps}>{children}</Lism>;
}
