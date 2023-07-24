import React from 'react';
import { Stack } from '../Box';
// import { Item } from '../Item';
import { BlockIcon } from '../Icon';
// import { Badge } from '../Badge';
// import { Center } from '../Center';
import { Lism } from '../Lism';
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
	qIcon = 'Q',
	aIcon = 'A',
	// iconType,
	// style = {},
	...props
}) {
	qIconProps = {
		icon: qIcon,
		radius: '99', // '-'にする ?
		p: 20,
		...qIconProps,
	};

	const Qmark = <BlockIcon variant='fill' color='main' {...qIconProps} />;
	const Qtag = 'span';

	if (isAccordion) {
		return (
			<Accordion blockClass='b--faq' {...props}>
				<AccordionHeader blockClass='b--faq__q' before={Qmark} tag={Qtag}>
					{title}
				</AccordionHeader>
				<AccordionBody blockClass='b--faq__a'>{children}</AccordionBody>
			</Accordion>
		);
	}

	aIconProps = {
		icon: aIcon,
		radius: '99', // '-'にする ?
		p: 20,
		...aIconProps,
	};
	const Amark = <BlockIcon variant='outline' color='main' {...aIconProps} />;

	return (
		<Stack blockClass='b--faq' gap={40} {...props}>
			<Lism isGrid blockClass='b--faq__q' gap={['-', '-']}>
				{Qmark}
				<Qtag className='b--faq__title'>{title}</Qtag>
			</Lism>
			<Lism isGrid blockClass='b--faq__a' gap={['-', '-']}>
				{Amark}
				<Lism blockClass='b--faq__body' isFlow flowGap={flowGap || 40}>
					{children}
				</Lism>
			</Lism>
		</Stack>
	);
}
