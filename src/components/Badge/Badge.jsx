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
	if ('cbox' !== variant && color) {
		style['--badge--c'] = getMaybeColorVar(color);
	}

	const blockProps = {
		tag: 'span',
		lismClass: 'e--badge',
		radius: '1',
		p: 10,
		// lh: 1.5,
		fz: 's',
		fw: '700',
		style,
		'data-variant': variant,
		...props,
	};

	if ('cbox' === variant) {
		blockProps.cbox = color;
	} else if ('cbox' !== variant && color) {
		blockProps.style['--badge--c'] = getMaybeColorVar(color);
	}

	// if (variant === "cbox") {
	// 	blockProps.cbox = color || "main";
	// }

	return <Lism {...blockProps}>{children}</Lism>;
}
