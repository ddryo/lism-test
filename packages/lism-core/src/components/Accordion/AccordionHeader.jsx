import React from 'react';
// import { Core } from '../Core';
// import { Icon } from '../Icon';
import { Flex } from '../Flex';
// import { AccContext } from './context';

export default function AccordionHeader({ lismClass = {}, isConsumer, children, ...props }) {
	lismClass.c = 'c--accordion__header';

	const theProps = { lismClass, gap: 20, p: 'box:s' };

	if (null !== isConsumer) {
		if (typeof isConsumer === 'string') isConsumer = isConsumer.split(' ');

		if (Array.isArray(isConsumer)) {
			// consumerに 'p' が含まれているかどうか
			if (isConsumer.includes('p')) {
				delete theProps.p;
			}
			if (isConsumer.includes('gap')) {
				delete theProps.gap;
			}
			theProps.isConsumer = isConsumer;
		}
	}
	// const { trigger } = React.useContext(AccContext);

	return (
		<Flex tag='summary' ai='center' {...theProps} {...props}>
			{children}
		</Flex>
	);
}
