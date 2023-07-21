import React from 'react';
// import { Lism } from '../Lism';
import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

export default function AccordionHeader({ children, iconType = 'caret', before, ...props }) {
	const { className, style, attrs } = getCommonProps(props, {
		lismClass: 'l--accordion__header',
	});
	const blockProps = {
		className,
		style,
		...attrs,
	};

	return (
		<summary {...blockProps} data-icon-type={iconType}>
			{before}
			<span className='l--accordion__label'>{children}</span>
			<span className='l--accordion__icon' aria-hidden='true'></span>
		</summary>
	);
}
