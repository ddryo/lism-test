// import React from 'react';
import { Layouter } from '../Layouter';

export default function AccordionBody({ lismClass = {}, children, isFlow, ...props }) {
	lismClass.c = 'c--accordion__body';

	return (
		<Layouter lismClass={lismClass} p='box:s' {...props}>
			<Layouter className='c--accordion__inner' isFlow={isFlow}>
				{children}
			</Layouter>
		</Layouter>
	);
}

// Inner?
