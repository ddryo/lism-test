// import React from 'react';
import { Core } from '../Core';
import { FluidFix } from '../Flex/FluidFix';
import { Stack } from '../Flex/Stack';
// import { Flex } from '../Flex';

// isFlow は ddに渡す
export default function TermListRow({
	lismClass = {},
	mode = 'stack',
	term,
	isFlow,
	flowGap,
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
			<Core tag='dt' fw='bold' className='c--termList__dt' lh='s' {...dtProps}>
				{term}
			</Core>
			<Core
				tag='dd'
				className='c--termList__dd'
				isFlow={isFlow}
				flowGap={flowGap}
				{...ddProps}
			>
				{children}
			</Core>
		</Component>
	);
}
