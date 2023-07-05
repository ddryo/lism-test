import React from 'react';
import { Lism } from '../Lism';
// import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

export default function AccordionBody({ children, ...props }) {
	// gapなどをbodyInnerに流す？
	return (
		<Lism lismClass='l--accordion__body' {...props}>
			<Lism isFlow lismClass='l--accordion__bodyInner'>
				{children}
			</Lism>
		</Lism>
	);
}
