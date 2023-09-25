import React from 'react';
import { Lism } from '../Lism';

// variantで受け取り、modifierにセット。→セットせずそのままmodifierのみでもいいか
export default function Decorator({ type, index, direction, pos = 'absolute', ...props }) {
	return (
		<Lism
			tag='span'
			lismClass='e--decorator'
			data-type={type}
			data-i={index}
			data-dir={direction || null}
			pos={pos}
			aria-hidden='true'
			{...props}
		/>
	);
}