import React from 'react';
// import { Frame } from '../Frame';
// import { LinkBox } from '../LinkBox';
// import { MediaLayer } from '../Layer';
// import { Box } from '../Box';
import { Lism } from '../Lism';
// import { getMediaLayer, getFilterLayer } from '../helper';
// import classnames from 'classnames';

export default function BannerContent({ children, ...attrs }) {
	// ratio指定なし、href指定なし
	return (
		<Lism blockClass='b--banner__content' isFlow flowGap={40} {...attrs}>
			{children}
		</Lism>
	);
}
