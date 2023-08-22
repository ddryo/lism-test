import React from 'react';
import { Lism } from '../Lism';
// import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

export default function Reel({
	children,
	// onlySmall,
	componentForWide,
	itemW,
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
			lismClass: 'l--reel',
			isGrid: true,
			gap: 20,
		};
	}

	if (undefined !== itemW) {
		lismStyle['--item-w'] = itemW;
	}

	return (
		<ReelComponent {...lismProps} {...props} lismStyle={lismStyle} tabIndex='0'>
			{children}
		</ReelComponent>
	);
}
