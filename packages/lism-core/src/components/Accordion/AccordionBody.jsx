import React from 'react';
import { Lism } from '../Lism';

// import classnames from 'classnames';

export default function AccordionBody({ children, flowGap = 's', ...props }) {
	// flowGapは inner に流す
	return (
		<Lism lismClass='l--accordion__body' {...props}>
			<Lism lismClass='l--accordion__bodyInner' isFlow flowGap={flowGap}>
				{children}
			</Lism>
		</Lism>
	);
}
