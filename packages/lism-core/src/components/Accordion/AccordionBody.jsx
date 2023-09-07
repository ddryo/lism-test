import React from 'react';
import { Lism } from '../Lism';

// import classnames from 'classnames';

export default function AccordionBody({ children, flowGap, ...props }) {
	// flowGapは inner に流す
	return (
		<Lism lismClass='l--accordion__body' {...props}>
			<Lism isFlow flowGap={flowGap || null} lismClass='l--accordion__bodyInner'>
				{children}
			</Lism>
		</Lism>
	);
}
