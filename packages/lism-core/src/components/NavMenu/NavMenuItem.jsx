// import React from 'react';
import { Lism } from '../Lism';
// import { Text } from '../Text';

// import { Icon } from '../Icon';
// import { Badge } from '../Badge';
// import { Accordion, AccordionHeader, AccordionBody } from '../Accordion';
// import classnames from 'classnames';
export default function NavMenuItem({ lismClass = {}, children, ...props }) {
	lismClass.c = 'c--navMenu__item';
	return (
		<Lism tag='li' lismClass={lismClass} {...props}>
			{children}
		</Lism>
	);
}
