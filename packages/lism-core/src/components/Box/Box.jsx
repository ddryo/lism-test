// import React from 'react';
import { Core } from '../Core';

export default function Box({ lismClass = {}, variant, ...props }) {
	lismClass.l = 'l--box';
	if (variant) lismClass.l += ` l--box--${variant}`;
	return <Core lismClass={lismClass} {...props} />;
}
