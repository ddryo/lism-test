import React from 'react';
// import { getMaybeColorVar } from '../../lib';
import { Lism } from '../Lism';
// import { InlineIcon } from '../Icon';
// import { Flex } from '../Flex';
// import { Icon } from '../Icon';

// variant
export default function Badge({
	// icon,
	// label,
	variant = 'fill',
	color = 'main',
	hasIcon,
	style = {},
	children,
	...props
}) {
	const blockProps = {
		tag: 'span',
		lismClass: 'e--badge',
		keycolor: color,
		radius: '-',
		p: '-',
		fz: 's',
		style,
		'data-variant': variant,
		...props,
	};

	if (hasIcon) {
		blockProps.d = 'inline-flex';
		blockProps.ai = 'center';
		blockProps.gap = '-';
	}

	// if (color) {
	// 	blockProps.keycolor = color;
	// }
	// if (variant === 'fill') {
	// 	blockProps.bgc = 'main';
	// } else if (variant === 'outline') {
	// 	blockProps.bdc = 'main';
	// } else {
	// 	blockProps.keycolor = color;
	// }

	return <Lism {...blockProps}>{children}</Lism>;
}
