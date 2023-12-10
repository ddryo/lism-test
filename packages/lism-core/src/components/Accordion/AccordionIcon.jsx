import React from 'react';
import { FlexItem } from '../Flex';
import { Icon } from '../Icon';
// import { AccContext } from './context';

export default function AccordionIcon({
	lismClass = {},
	icon = 'svg-caret-down-fill', // accordion-toggle
	isTrigger,
	children,
	iconProps = {},
	size = '1em',
	...props
}) {
	lismClass.c = 'c--accordion__icon';
	// const { trigger } = React.useContext(AccContext);

	// trigger=iconなら、iconをbuttunに
	if (isTrigger) {
		props.tag = 'button';
		props['data-role'] = 'trigger';
		// if (!props.bgc) props.bgc = 'transparent';
	} else {
		props['aria-hidden'] = 'true';
		// iconSize = iconSize || '1.25em';
	}

	const icons = children || <Icon icon={icon} size={size} {...iconProps} />;

	return (
		<FlexItem tag='span' lismClass={lismClass} d='inline-flex' {...props}>
			{icons}
		</FlexItem>
	);
}
