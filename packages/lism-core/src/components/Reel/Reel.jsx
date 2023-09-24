import React from 'react';
import { Lism } from '../Lism';

// import classnames from 'classnames';

export default function Reel({
	children,
	// onlySmall,
	unreel,
	// to, until, til
	componentForWide,
	itemW,
	// release, 解除サイズを指定?
	...props
}) {
	let lismProps;
	let ReelComponent = Lism;
	const lismStyle = {};

	if (componentForWide) {
		ReelComponent = componentForWide;
		lismProps = {
			className: 'is--reel@max-md',
		};
	} else {
		lismProps = {
			className: 'is--reel',
			gap: 20,
		};
	}

	if (undefined !== itemW) {
		lismStyle['--item--w'] = itemW;
	}

	return (
		<ReelComponent {...lismProps} {...props} lismStyle={lismStyle} tabIndex='0'>
			{children}
		</ReelComponent>
	);
}
