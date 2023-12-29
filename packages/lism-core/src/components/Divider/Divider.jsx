// import React from 'react';
// import { Core } from '../Core';
import { Flex, FlexItem } from '../Flex';
import { Decorator } from '../Decorator';

// const animationTypes = {
// 	Wave1: 'loop',
// 	Wave2: 'lr',
// 	Wave3: 'lr',
// };

// aria-hidden="true"
// focusable="false"

// align: full, wide, ''
export default function Divider({ lismClass = {}, variant, label, ...props }) {
	lismClass.c = 'c--divider';
	if (variant) lismClass.c += ` c--divider--${variant}`;

	// if (shape) {
	// 	return <ShapeDivider shape={shape} lismClass={lismClass} {...props} />;
	// }

	if (label) {
		return (
			<Flex lismClass={lismClass} fz='s' c='pale' ai='c' gap='em7' {...props}>
				<FlexItem as={Decorator} fx='1' radius='1' />
				<span>{label}</span>
				<FlexItem as={Decorator} fx='1' radius='1' />
			</Flex>
		);
	}
	return (
		<Flex lismClass={lismClass} ai='c' {...props}>
			<FlexItem as={Decorator} fx='1' radius='1' />
		</Flex>
	);
}
