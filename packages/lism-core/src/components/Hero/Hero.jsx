// import React from 'react';
import { Stack } from '../Flex';

// align: full, wide, ''
export default function Hero({ lismClass = {}, variant, bgc = 'base-2', isFullScreen, ...attrs }) {
	lismClass.c = 'c--hero';
	if (variant) {
		lismClass.c += ` c--hero--${variant}`;
	}

	const blockProps = { bgc, 'data-fullscreen': isFullScreen ? '1' : null };

	return <Stack alignfull lismClass={lismClass} {...blockProps} {...attrs} />;
}
