// import React from 'react';
import { Core } from '../Core';

// variantで受け取り、modifierにセット。→セットせずそのままmodifierのみでもいいか
export default function Decorator({ lismClass = {}, variant, index, ...props }) {
	lismClass.e = 'e--deco';
	if (variant) lismClass.e += ` e--deco--${variant}`;
	return (
		<Core tag='span' lismClass={lismClass} data-index={index} aria-hidden='true' {...props} />
	);
}
