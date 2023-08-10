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
	style = {},
	children,
	...props
}) {
	const blockProps = {
		tag: 'span',
		lismClass: 'e--badge',
		radius: '1',
		p: '-',
		// lh: 1.5,
		fz: 's',
		style,
		'data-variant': variant,
		...props,
	};

	if (color) {
		blockProps.keycolor = color;
	}

	// if (variant === "cbox") {
	// 	blockProps.cbox = color || "main";
	// }

	return <Lism {...blockProps}>{children}</Lism>;
}
