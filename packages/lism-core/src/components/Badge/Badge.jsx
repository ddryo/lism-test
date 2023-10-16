// import React from 'react';
import { Core } from '../Core';
import { defaultProps } from '../../config/components';
const _default = defaultProps?.Badge || {};

// variant
export default function Badge({
	lismClass = {},
	// lismStyle = {},
	...props
}) {
	props = Object.assign({}, _default, props);
	let {
		variant, //hasIcon,
		...attrs
	} = props;

	lismClass.c = 'c--badge';
	if (variant) lismClass.c += ` c--badge--${variant}`;

	const blockProps = {};

	// if (color) {
	// 	blockProps.keycolor = color;
	// }

	// data-has-iconとかでいいかも
	// if (hasIcon) {
	// 	blockProps.d = 'inline-flex';
	// 	blockProps.ai = 'center';
	// }

	return <Core tag='span' lismClass={lismClass} {...blockProps} {...attrs} />;
}
