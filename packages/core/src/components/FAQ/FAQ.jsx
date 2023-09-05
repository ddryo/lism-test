import React from 'react';
import { Stack } from '../Stack';
// import { Item } from '../Item';
import { Icon } from '../Icon';
// import { Badge } from '../Badge';
import { Flex } from '../Flex';
import { Lism } from '../Lism';
// import { Grid } from '../Grid';

import { Accordion, AccordionHeader, AccordionBody } from '../Accordion';

export default function FAQ({
	title,
	// titleProps = {},
	// iconSize,
	qIconProps = {},
	aIconProps = {},
	children,
	flowGap,
	isAccordion,
	// iconType,
	// style = {},
	...props
}) {
	const Qmark = (
		<Flex
			blockClass='b--faq__icon'
			c='white'
			bgc='main'
			p={20}
			bd='-'
			bdc='transparent'
			radius='99'
			{...qIconProps}
		>
			<Icon icon='Q' />
		</Flex>
	);

	const Qtag = 'span';

	if (isAccordion) {
		return (
			<Accordion blockClass='b--faq' {...props}>
				<AccordionHeader
					blockClass='b--faq__q'
					labelProps={{ blockClass: 'b--faq__title' }}
					labelBefore={Qmark}
					tag={Qtag}
				>
					{title}
				</AccordionHeader>
				<AccordionBody blockClass='b--faq__a'>{children}</AccordionBody>
			</Accordion>
		);
	}

	const Amark = (
		<Flex c='main' p={20} bd='-' radius='99' {...aIconProps}>
			<Icon icon='A' />
		</Flex>
	);

	return (
		<Stack blockClass='b--faq' gap={40} {...props}>
			<Flex blockClass='b--faq__q'>
				{Qmark}
				<Qtag className='b--faq__title'>{title}</Qtag>
			</Flex>
			<Flex blockClass='b--faq__a'>
				{Amark}
				<Lism blockClass='b--faq__body' isFlow flowGap={flowGap || 40}>
					{children}
				</Lism>
			</Flex>
		</Stack>
	);
}
