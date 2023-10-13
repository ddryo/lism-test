import React from 'react';
import { Core } from '../Core';

// variantで受け取り、modifierにセット。→セットせずそのままmodifierのみでもいいか
export default function Decorator({ lismClass = {}, variant, index, ...props }) {
	lismClass.e = 'e--decorator';
	if (variant) lismClass.e += ` e--decorator--${variant}`;
	return (
		<Core tag='span' lismClass={lismClass} data-index={index} aria-hidden='true' {...props} />
	);
}
