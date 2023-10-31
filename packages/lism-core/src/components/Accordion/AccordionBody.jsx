// import React from 'react';
import { Lism } from '../Lism';
import { getLayoutStateData } from '../../lib';

export default function AccordionBody({ lismClass = {}, children, isFlow, ...props }) {
	lismClass.c = 'c--accordion__body';

	let innerClass = 'c--accordion__inner';
	let innerStyle = null;

	// isFlow は inner に流す
	if (isFlow) {
		const { className, style } = getLayoutStateData('is--flow', isFlow);
		innerClass += ' ' + className;
		innerStyle = style;
	}

	return (
		<Lism lismClass={lismClass} p='box:s' {...props}>
			<div className={innerClass} style={innerStyle}>
				{children}
			</div>
		</Lism>
	);
}

// Inner?
