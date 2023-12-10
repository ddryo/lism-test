// import React from 'react';
import { FlexItem } from '../Flex';

export default function AccordionLabel({ lismClass = {}, tag, children, ...props }) {
	lismClass.c = 'c--accordion__label';

	const labelTag = tag || 'span';

	// span以外になっても見た目は変わらないように
	if ('span' !== labelTag) {
		// hタグになっても文字サイズなどは変わらないように.
		props = Object.assign({ font: 'inherit' }, props);
	}

	return (
		<FlexItem tag={labelTag} lismClass={lismClass} fx='1' {...props}>
			{children}
		</FlexItem>
	);
}
