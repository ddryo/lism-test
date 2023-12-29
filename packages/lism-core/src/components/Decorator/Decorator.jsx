// import React from 'react';
import { Core } from '../Core';

// variantで受け取り、modifierにセット。→セットせずそのままmodifierのみでもいいか
export default function Decorator({ lismClass = {}, hasSize, variant, index, ...props }) {
	lismClass.e = 'e--deco';
	if (variant) lismClass.e += ` e--deco--${variant}`;

	if (hasSize) props.lismState = ['has--size'];
	return <Core lismClass={lismClass} data-index={index} aria-hidden='true' {...props} />;
}

// aspect
