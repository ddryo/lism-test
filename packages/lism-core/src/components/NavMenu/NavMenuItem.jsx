// import React from 'react';
import { Core } from '../Core';
// import { Text } from '../Text';

// import { Icon } from '../Icon';
// import { Badge } from '../Badge';
// import { Accordion, AccordionHeader, AccordionBody } from '../Accordion';

export default function NavMenuItem({ lismClass = {}, children, ...props }) {
	lismClass.c = 'c--navMenu__item';
	return (
		<Core tag='li' lismClass={lismClass} {...props}>
			{children}
		</Core>
	);
}
