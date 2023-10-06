import React from 'react';
import { Flex } from '../Flex';

// snap-type, snap-stopも指定できるようにする？
export default function Reel({ unreel, itemBasis, snap, ...props }) {
	if (undefined !== itemBasis) {
		props.lismStyle = {
			'--item--basis': itemBasis,
		};
	}

	if (unreel) {
		props['data-unreel'] = unreel;
	}
	if (snap) {
		props['data-snap'] = snap;
	}

	// if (showScrollbar) {
	// 	props['data-show-scrollbar'] = showScrollbar;
	// }

	return <Flex lismClass='l--reel' {...props} tabIndex='0' />;
}
