// import React from 'react';
import { Lism } from '../Lism';

export default function AccordionBody({ lismClass = {}, children, isFlow, ...props }) {
	lismClass.c = 'c--accordion__body';

	return (
		<Lism lismClass={lismClass} p='box:s' {...props}>
			<Lism className='c--accordion__inner' isFlow={isFlow}>
				{children}
			</Lism>
		</Lism>
	);
}

// Inner?
