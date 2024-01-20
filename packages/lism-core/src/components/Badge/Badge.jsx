// import React from 'react';
import { Core } from '../Core';

// variant
export default function Badge({
	lismClass = {},
	// lismStyle = {},
	// lismState = [],
	variant,
	...props
}) {
	lismClass.c = 'c--badge';
	if (variant) lismClass.c += ` c--badge--${variant}`;

	return <Core tag='span' lismClass={lismClass} {...props} />;
}
