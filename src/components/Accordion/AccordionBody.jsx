import React from 'react';
import { Lism } from '../Lism';
// import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

export default function AccordionBody({ children, flowGap, ...props }) {
	const blockProps = {
		isGrid: true,
		p: 40,
	};
	// gapなどをbodyInnerに流す？
	return (
		<Lism lismClass='l--accordion__body' {...blockProps} {...props}>
			<Lism isFlow flowGap={flowGap || 40} lismClass='l--accordion__bodyInner'>
				{children}
			</Lism>
		</Lism>
	);
}
