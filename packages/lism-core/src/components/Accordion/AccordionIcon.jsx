import React from 'react';
import { FlexItem } from '../Flex';
import { Icon } from '../Icon';
// import { AccContext } from './context';

export default function AccordionIcon({
	lismClass = {},
	icon = 'mask-accordion-toggle',
	isTrigger,
	children,
	iconProps = {},
	size = '1em',
	...props
}) {
	lismClass.c = 'c--accordion__icon';
	// const { trigger } = React.useContext(AccContext);

	// isTrigger なら、buttun にする
	if (isTrigger) {
		props.tag = 'button';
		props['data-role'] = 'trigger';
	} else {
		props['aria-hidden'] = 'true';
	}

	let content = null;
	if (children) {
		content = children;
	} else if (typeof icon === 'string') {
		content = <Icon name={icon} size={size} {...iconProps} />;
	} else if (icon && typeof icon !== 'string') {
		content = <Icon as={icon} size={size} {...iconProps} />;
	}

	return (
		<FlexItem tag='span' lismClass={lismClass} d='inline-flex' {...props}>
			{content}
		</FlexItem>
	);
}
