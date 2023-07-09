import React from 'react';
import { getMaybeColorVar } from '../../lib';
import { Lism } from '../Lism';
// import { InlineIcon } from '../Icon';
// import { Flex } from '../Flex';
// import { Icon } from '../Icon';

// variant
export default function Badge({ icon, label, variant, color, style = {}, children, ...props }) {
	if (variant && color) {
		style['--badge--c'] = getMaybeColorVar(color);
	}

	const blockProps = {
		lismClass: 'e--badge',
		// className
		radius: '1',
		padding: { X: 20, Y: 10 },
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
