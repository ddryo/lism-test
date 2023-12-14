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
	} else if (icon) {
		content = <Icon icon={icon} size={size} {...iconProps} />;
	}

	return (
		<FlexItem tag='span' lismClass={lismClass} d='inline-flex' {...props}>
			{content}
		</FlexItem>
	);
}
