// import React from 'react';
import { Core } from '../Core';
const defaultProps = { radius: '1', fz: 'xs' };

// variant
export default function Badge({
	lismClass = {},
	// lismStyle = {},
	lismState = [],
	variant,
	...props
}) {
	lismClass.c = 'c--badge';
	if (variant) {
		lismClass.c += ` c--badge--${variant}`;
	}

	if ('subtle' === variant) {
		lismState.push('has--mixcolor');
	}
	return (
		<Core tag='span' lismClass={lismClass} lismState={lismState} {...defaultProps} {...props} />
	);
}
