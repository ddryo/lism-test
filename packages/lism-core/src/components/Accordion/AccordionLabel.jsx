// import React from 'react';
import { Core } from '../Core';

export default function AccordionLabel({ lismClass = {}, tag, children, ...props }) {
	lismClass.c = 'c--accordion__label';

	const labelTag = tag || 'span';

	// span以外になっても見た目は変わらないように
	if ('span' !== labelTag) {
		// hタグになっても文字サイズなどは変わらないように.
		props = Object.assign({ font: 'inherit' }, props);
	}

	return (
		<Core tag={labelTag} lismClass={lismClass} {...props}>
			{children}
		</Core>
	);
}
