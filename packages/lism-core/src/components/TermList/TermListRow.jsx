// import React from 'react';
import { Core } from '../Core';
import { Lism } from '../Lism';
import { FluidFix } from '../Flex/FluidFix';
import { Stack } from '../Flex/Stack';
// import { Flex } from '../Flex';

// isFlow は ddに渡す
export default function TermListRow({
	lismClass = {},
	mode = 'stack',
	term,
	isFlow,
	dtProps = {},
	ddProps = {},
	children,
	...props
}) {
	lismClass.c = 'c--termList__row';

	let defaultProps = {};
	let Component = Core;
	if (mode === 'stack') {
		Component = Stack;
		defaultProps = { gap: 10 };
		ddProps = Object.assign({ ms: 30 }, ddProps);
	} else if (mode === 'fluid') {
		Component = FluidFix;
		defaultProps = { fix: 'first', gap: 10 };
		ddProps = Object.assign({ ms: 30 }, ddProps);
	}
	return (
		<Component lismClass={lismClass} {...defaultProps} {...props}>
			<Core tag='dt' fw='bold' className='c--termList__dt' {...dtProps}>
				{term}
			</Core>
			<Lism tag='dd' className='c--termList__dd' isFlow={isFlow} {...ddProps}>
				{children}
			</Lism>
		</Component>
	);
}
