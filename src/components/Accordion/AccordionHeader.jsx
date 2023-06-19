import React from 'react';
import classnames from 'classnames';
import { getCommonProps } from '../../lib';

export default function AccordionHeader({ children, className, icon = 'caret', ...props }) {
	const { classNames, styles, attrs } = getCommonProps(props);
	const blockProps = {
		className: classnames('l--accordion__header', className, classNames),
		style: styles,
		...attrs,
	};

	return (
		<summary {...blockProps} data-icon-type={icon}>
			<span className='l--accordion__label'>{children}</span>
			<span className='l--accordion__icon' aria-hidden='true'></span>
		</summary>
	);
}
