// import React from 'react';
import { Core } from '../Core';

// 省略可能にするかどうかは、要検討
export default function Delimiter({ lismClass = {}, variant, ...props }) {
	lismClass.e = 'e--delimiter';
	if (variant) lismClass.e += ` e--delimiter--${variant}`;
	return <Core tag='span' lismClass={lismClass} aria-hidden='true' {...props} />;
}
