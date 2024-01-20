import React from 'react';
import { Stack } from '../Flex';

// duration: [s]
export default function AccordionGroup({
	lismClass = {},
	lismStyle = {},
	duration,
	children,
	variant,
	allowMultiple = true,
	...props
}) {
	lismClass.c = 'c--accordions';
	if (variant) lismClass.c += ' c--accordions--' + variant;

	if (duration) {
		lismStyle['--accordion--duration'] = duration;
	}

	const theProps = {};

	if (!allowMultiple) {
		theProps['data-multiple'] = 'disallow';
	}

	return (
		<Stack lismClass={lismClass} lismStyle={lismStyle} {...theProps} {...props}>
			{children}
		</Stack>
	);
}
