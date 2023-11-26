// import React from 'react';
import { Stack } from '../Flex/Stack';
import { Lism } from '../Lism';
// import { Item } from '../Item';
import { Grid } from '../Grid';
import { Divider } from '../Divider';
// import { filterEmptyObj } from '../../lib';
import { getMediaLayer, getFilterLayer } from '../helper';

// align: full, wide, ''
export default function Hero({
	lismClass = {},
	lismStyle = {},
	variant,
	children,
	minH,
	media,
	filter,
	isFullScreen,
	divider = {},
	// p,
	// gap = 0,
	...attrs
}) {
	lismClass.c = 'c--hero';
	if (variant) lismClass.c += ' c--hero--' + variant;

	if (isFullScreen) {
		attrs['data-fullscreen'] = '1';
	}

	if (minH) {
		lismStyle['--minH'] = minH;
	}

	return (
		<Stack lismClass={lismClass} lismStyle={lismStyle} alignfull {...attrs}>
			{divider.top && <Divider {...divider.top} isFlip />}
			{getMediaLayer(media)}
			{getFilterLayer(filter)}
			{children}
			{divider.bottom && <Divider {...divider.bottom} />}
		</Stack>
	);
}
