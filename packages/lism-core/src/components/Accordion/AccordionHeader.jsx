import React from 'react';
// import { Core } from '../Core';
// import { Icon } from '../Icon';
import { Flex } from '../Flex';
import AccordionLabel from './AccordionLabel';
import AccordionIcon from './AccordionIcon';
// import { AccContext } from './context';

export default function AccordionHeader({
	lismClass = {},
	label = '',
	icon,
	iconProps,
	consume,
	children,
	trigger,
	...props
}) {
	lismClass.c = 'c--accordion__header';

	const theProps = { lismClass, gap: 20, p: 'box:s' };

	if (null !== consume) {
		if (typeof consume === 'string') consume = consume.split(' ');

		// consume に 'p', 'gap' が含まれている場合、p, gap のデフォルト値を消す
		if (Array.isArray(consume)) {
			if (consume.includes('p')) delete theProps.p;
			if (consume.includes('gap')) delete theProps.gap;
			theProps.consume = consume;
		}
	}
	// const { trigger } = React.useContext(AccContext);

	return (
		<Flex tag='summary' ai='center' {...theProps} {...props}>
			{children && children}
			{!children && (
				<>
					<AccordionLabel>{label}</AccordionLabel>
					<AccordionIcon
						icon={icon}
						iconProps={iconProps}
						isTrigger={trigger === 'icon'}
					/>
				</>
			)}
		</Flex>
	);
}
