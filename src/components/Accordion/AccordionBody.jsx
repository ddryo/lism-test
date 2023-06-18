import React from 'react';
import { Box } from '../index';
import classnames from 'classnames';
import { separateStyleProps } from '../../lib';

export default function AccordionBody({ children, className, ...props }) {
	const { classNames, styles, attrs } = separateStyleProps(props);
	const blockProps = {
		className: classnames('l--accordion__body', className, classNames),
		style: styles,
		...attrs,
	};
	return (
		<div {...blockProps}>
			<Box isFlow className='l--accordion__bodyInner'>
				{children}
			</Box>
		</div>
	);
}
