// import React from 'react';
import { Core } from '../Core';

// variant
export default function Badge({
	lismClass = {},
	// lismStyle = {},
	lismState = [],
	variant = 'fill',
	...props
}) {
	lismClass.c = 'c--badge';
	if (variant) {
		lismClass.c += ` c--badge--${variant}`;
	}

	if ('subtle' === variant) {
		lismState.push('is--colorbox');
	}
	//  else if ('outline' === variant) {
	// 	lismState.push('-c:mix');
	// }
	return <Core tag='span' lismClass={lismClass} lismState={lismState} {...props} />;
}
