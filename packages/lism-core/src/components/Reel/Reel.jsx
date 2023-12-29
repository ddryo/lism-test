// import React from 'react';
import { Flex } from '../Flex';

// snap-type, snap-stopも指定できるようにする？
export default function Reel({ lismStyle = {}, unreel, itemW, snap, ...props }) {
	if (undefined !== itemW) {
		lismStyle['--item--w'] = itemW;
	}

	if (unreel) {
		props['data-unreel'] = unreel;
	}
	if (snap) {
		props['data-snap'] = snap;
	}

	if (props.hasDivider === true) {
		props.hasDivider = 'B';
	}

	// if (showScrollbar) {
	// 	props['data-show-scrollbar'] = showScrollbar;
	// }

	return <Flex _flex='reel' lismStyle={lismStyle} {...props} tabIndex='0' />;
}
