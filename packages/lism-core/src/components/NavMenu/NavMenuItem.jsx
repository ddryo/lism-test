import React from 'react';
import { Lism } from '../Lism';
import { Text } from '../Text';

// import { Icon } from '../Icon';
// import { Badge } from '../Badge';
import { Accordion, AccordionHeader, AccordionBody } from '../Accordion';
// import classnames from 'classnames';
export default function NavMenuItem({
	linkComponent,
	href,
	text,
	hover = 'bgc:',
	linkProps = {},
	before = null,
	after = null,
	isAccordion,
	accordionProps = {},
	accordionBodyProps = {},
	accordionHeaderProps = {},
	children,
	...props
}) {
	// const Link = component || Lism;

	let menuText = (
		<>
			{before}
			{text}
			{after}
		</>
	);
	let textProps = { as: 'span', blockClass: 'b--navMenu__text' };
	// if (after || before) {
	// 	textProps = Object.assign(textProps, { d: 'flex', gap: 20, ai: 'center' });
	// }

	if (href) {
		textProps = {
			as: linkComponent || 'a',
			blockClass: 'b--navMenu__text',
			href,
			hover,
		};
	}

	linkProps = { ...textProps, ...linkProps };

	// アコーディオンモード
	if (isAccordion) {
		// linkProps.pr = 0;
		// linkProps.pl = '-';
		// linkProps.py = '-';

		if (href) {
			// hrefがあればアイコンだけをクリック可能に
			accordionProps.clickable = 'icon';
		} else if (!accordionHeaderProps.hover) {
			// hrefがない場合、hoverをaccordionHeaderに引き継ぐ
			accordionHeaderProps.hover = hover;
		}

		return (
			<Lism tag='li' blockClass='b--navMenu__item' {...props}>
				<Accordion blockClass='b--navMenu__acc' {...accordionProps}>
					<AccordionHeader
						bgc='transparent'
						iconSize='1em'
						labelProps={{ p: 0 }}
						gap={10}
						{...accordionHeaderProps}
					>
						<Text {...linkProps}>{menuText}</Text>
					</AccordionHeader>
					<AccordionBody {...accordionBodyProps}>{children}</AccordionBody>
				</Accordion>
			</Lism>
		);
	}

	// NOT アコーディオン
	return (
		<Lism tag='li' blockClass='b--navMenu__item' {...props}>
			<Lism {...linkProps}>{menuText}</Lism>
			{children}
		</Lism>
	);
}
