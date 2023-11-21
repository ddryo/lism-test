import React from 'react';
import { Stack } from '../Flex/Stack';

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

	// if (variant === 'line') {
	// 	theProps.bd = 'block';
	// 	lismStyle['--accordion--outline'] = '1px solid var(--color--border)';
	// } else if (variant === 'box') {
	// 	theProps.gap = 10;
	// }

	if (!allowMultiple) {
		theProps['data-multiple'] = 'disallow';
	}

	return (
		<Stack lismClass={lismClass} lismStyle={lismStyle} {...theProps} {...props}>
			{children}
		</Stack>
	);
}
