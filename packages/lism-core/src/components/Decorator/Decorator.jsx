// import React from 'react';
import { Core } from '../Core';
import { getTransformProps } from '../../lib';

// variantで受け取り、modifierにセット。→セットせずそのままmodifierのみでもいいか
export default function Decorator({
	lismClass = {},
	lismState = [],
	hasSize,
	variant,
	index,
	...props
}) {
	lismClass.e = 'e--deco';
	if (variant) lismClass.e += ` e--deco--${variant}`;

	props = getTransformProps(props);

	if (hasSize) lismState.push('has--size');
	return (
		<Core
			lismClass={lismClass}
			lismState={lismState}
			data-index={index}
			aria-hidden='true'
			{...props}
		/>
	);
}
