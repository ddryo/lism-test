import React from 'react';
import { Lism } from '../Lism';
// import { getLismMainProp } from '../../lib';

export default function Avatar({
	children,
	//size,
	...props
}) {
	const theProps = {
		lismClass: 'e--avatar',
		// lismVar: size,
	};

	return (
		<Lism {...theProps} {...props}>
			{children}
		</Lism>
	);
}
