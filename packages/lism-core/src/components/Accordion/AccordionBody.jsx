// import React from 'react';
import { Core } from '../Core';

// import classnames from 'classnames';

export default function AccordionBody({ children, flowGap = 's', ...props }) {
	// flowGapは inner に流す
	return (
		<Core lismClass='l--accordion__body' {...props}>
			<Core lismClass='l--accordion__bodyInner' isFlow flowGap={flowGap}>
				{children}
			</Core>
		</Core>
	);
}
