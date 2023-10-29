// import React from 'react';
import { Core } from '../Core';

// import classnames from 'classnames';

export default function AccordionBody({ lismClass = {}, children, flowGap = 's', ...props }) {
	lismClass.c = 'c--accordion__body';
	// flowGapは inner に流す
	return (
		<Core lismClass={lismClass} p='box:s' {...props}>
			<Core lismClass='c--accordion__bodyInner' isFlow flowGap={flowGap}>
				{children}
			</Core>
		</Core>
	);
}
