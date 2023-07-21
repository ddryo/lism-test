import React from 'react';
import { Stack, Flex } from '../Box';
import { Item } from '../Item';
import { Badge } from '../Badge';
import { Center } from '../Center';
import { Lism } from '../Lism';
import { Accordion, AccordionHeader, AccordionBody } from '../Accordion';

export default function FAQ({
	title,
	titleProps = {},
	badgeSize,
	qBadgeProps = {},
	aBadgeProps = {},
	children,
	flowGap,
	isAccordion,
	qIcon = 'Q',
	aIcon = 'A',
	// iconType,
	// style = {},
	...props
}) {
	const blockProps = {
		blockClass: 'b--faq',
		blockStyle: {
			'--badge--size': badgeSize || null,
		},
	};

	const badgeProps = {
		blockClass: 'b--faq__badge',
		tag: 'div',
		// color: 'blue.400',
		radius: '99',
		// isItem: true,
		// fxsh: '0',
		fw: null,
		p: 0,
		fz: '',
	};

	const badgeQ = (
		<Badge color='blue.400' {...badgeProps} {...qBadgeProps}>
			<Center fz='-' w='100%' h='100%'>
				{qIcon}
			</Center>
		</Badge>
	);

	if (isAccordion) {
		return (
			<Accordion {...blockProps} {...props}>
				<AccordionHeader icon='caret' before={badgeQ}>
					{title}
				</AccordionHeader>
				<AccordionBody>{children}</AccordionBody>
			</Accordion>
		);
	}

	const badgeA = (
		<Badge color='red.400' {...badgeProps} {...aBadgeProps}>
			<Center fz='-' w='100%' h='100%'>
				{aIcon}
			</Center>
		</Badge>
	);

	return (
		<Stack {...blockProps} gap={40} {...props}>
			<Lism isGrid blockClass='b--faq__q' gap={['-', '-']}>
				{badgeQ}
				<Item blockClass='b--faq__qText' {...titleProps}>
					{title}
				</Item>
			</Lism>
			<Lism isGrid blockClass='b--faq__a' gap={['-', '-']}>
				{badgeA}
				<Item blockClass='b--faq__aText' isFlow flowGap={flowGap || 40}>
					{children}
				</Item>
			</Lism>
		</Stack>
	);
}
