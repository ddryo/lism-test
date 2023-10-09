import React from 'react';
import { Core } from '../Core';
// import { InlineIcon } from '../Icon';
// import { Flex } from '../Flex';
// import { Icon } from '../Icon';

// variant
export default function Badge({
	// icon,
	// label,
	lismClass = {},
	// lismStyle = {},
	variant,
	// color,
	hasIcon,
	...props
}) {
	lismClass.c = 'c--badge';
	if (variant) lismClass.c += ` c--badge--${variant}`;

	const blockProps = {
		tag: 'span',
	};

	// if (color) {
	// 	blockProps.keycolor = color;
	// }

	// data-has-iconとかでいいかも
	if (hasIcon) {
		blockProps.d = 'inline-flex';
		blockProps.ai = 'center';
		// blockProps.gap = '-';
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

	return <Core lismClass={lismClass} {...blockProps} {...props} />;
}
