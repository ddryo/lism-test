import React from 'react';
import { Lism } from '../Lism';
// import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

export default function Reel({
	children,
	// onlySmall,
	componentForWide,
	itemW,
	style = {},
	...props
}) {
	let lismProps;
	let ReelComponent = Lism;

	if (componentForWide) {
		ReelComponent = componentForWide;
		lismProps = {
			className: 'is--reel@max-md',
		};
	} else {
		lismProps = {
			lismClass: 'l--reel',
			isGrid: true,
		};
	}

	if (undefined !== itemW) {
		style['--item-w'] = itemW;
	}

	return (
		<ReelComponent {...lismProps} style={style} {...props} tabIndex='0'>
			{children}
		</ReelComponent>
	);
}
