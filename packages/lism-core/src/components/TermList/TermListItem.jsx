// import React from 'react';
import { Core } from '../Core';
import { Layouter } from '../Layouter';
import { Stack, SideFlex } from '../Flex';

// isFlow は ddに渡す
export default function TermListRow({
	lismClass = {},
	isFlex,
	term,
	isFlow,
	dtProps = {},
	ddProps = {},
	children,
	...props
}) {
	lismClass.c = 'c--termList__row';

	let Component = null;
	let defaultProps = {};

	if (isFlex) {
		Component = SideFlex;
		defaultProps = { side: 'first', sideW: '10rem', fluidMinW: '15rem' };
	} else {
		Component = Stack;
		defaultProps = {};
	}

	return (
		<Component lismClass={lismClass} {...defaultProps} {...props}>
			<Core tag='dt' fw='bold' lismClass={{ c: 'c--termList__dt' }} {...dtProps}>
				{term}
			</Core>
			<Layouter tag='dd' lismClass={{ c: 'c--termList__dd' }} isFlow={isFlow} {...ddProps}>
				{children}
			</Layouter>
		</Component>
	);
}
