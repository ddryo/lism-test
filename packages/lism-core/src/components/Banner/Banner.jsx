// import React from 'react';
import { Frame } from '../Frame';
import { LinkBox } from '../LinkBox';
import { FilterLayer } from '../Layer';
// import { Layer, MediaLayer } from '../Layer';
import { getMediaLayer } from '../helper';
// import { Box } from '../Box';

import { defaultProps } from '../../config/components';
const _default = defaultProps?.Banner || {};

export default function Banner({
	lismClass = {},
	// lismStyle = {},
	children,
	...props
}) {
	props = Object.assign({}, _default, props);
	let { variant, media, filter, ...attrs } = props;

	lismClass.c = 'c--banner';
	if (variant) lismClass.c += ` c--banner--${variant}`;

	const theProps = { lismClass, ...attrs };

	let Contents = (
		<>
			{getMediaLayer(media, -1)}
			{filter && <FilterLayer z={-1} {...filter} />}
			{children}
		</>
	);

	// hrefあり
	if (attrs.href) {
		return (
			<LinkBox tag='a' as={Frame} {...theProps}>
				{Contents}
			</LinkBox>
		);
	}

	// ratio指定なし、href指定なし
	return <Frame {...theProps}>{Contents}</Frame>;
}

// export function BannerContent({ lismClass = {}, ...props }) {
// 	lismClass.c = 'c--banner__content';
// 	return <Layer lismClass={lismClass} p='box' {...props} inset='0' z='1' />;
// }
