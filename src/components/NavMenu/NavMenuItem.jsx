import React from 'react';
import { Lism } from '../Lism';
import { Text } from '../Text';

// import { Icon } from '../Icon';
// import { Badge } from '../Badge';
import { Accordion, AccordionHeader, AccordionBody } from '../Accordion';
// import classnames from 'classnames';
export default function NavMenuItem({
	children,
	childMenu,
	linkComponent,
	// padding系、gap系は、aタグ側に流す
	href,
	hover = 'bgc:',
	linkProps = {},
	badge = null,
	icon = null,

	isAccordion,
	accordionProps = {},
	accordionBodyProps = {},
	accordionHeaderProps = {},
	...props
}) {
	// const Link = component || Lism;

	let menuText = null;
	let textProps = { as: 'span', blockClass: 'b--navMenu__text' };

	if (href) {
		textProps = {
			as: linkComponent || 'a',
			blockClass: 'b--navMenu__text',
			href,
			hover,
		};
	}

	if (badge || icon) {
		// jc: 'space-between'
		textProps = { ...textProps, ...{ isFlex: 1, gap: 20, ai: 'center' } };
	}

	linkProps = { ...textProps, ...linkProps };

	if (isAccordion) {
		linkProps.pr = 0;
		linkProps.pl = '-';
		linkProps.pY = '-';

		if (href) {
			// hrefがあればアイコンだけをクリック可能に
			accordionProps.clickable = 'icon';
		} else if (!accordionHeaderProps.hover) {
			// hrefがない場合、hoverをaccordionHeaderに引き継ぐ
			accordionHeaderProps.hover = hover;
		}

		menuText = (
			<Text {...linkProps}>
				{icon}
				{children}
				{badge}
			</Text>
		);
		return (
			<Lism tag='li' blockClass='b--navMenu__item' {...props}>
				<Accordion blockClass='b--navMenu__acc' {...accordionProps}>
					<AccordionHeader p={null} bgc={null} iconSize='1em' {...accordionHeaderProps}>
						{menuText}
					</AccordionHeader>
					<AccordionBody p={0} {...accordionBodyProps}>
						{childMenu}
					</AccordionBody>
				</Accordion>
			</Lism>
		);
	}

	menuText = (
		<Lism {...linkProps}>
			{icon}
			{children}
			{badge}
		</Lism>
	);

	return (
		<Lism tag='li' blockClass='b--navMenu__item' {...props}>
			{menuText}
			{childMenu}
		</Lism>
	);
}
