import React from 'react';
import { Layouter } from '../Layouter';
import { Decorator } from '../Decorator';
// import { ChatContext } from './context';
import { getDecoProps, getContentProps } from './getProps';

export default function ChatContent({
	lismClass = {},
	contentProps = {},
	direction = 'start',
	variant = 'speak',
	isFlow,
	children,
	...props
}) {
	lismClass.c = `c--chat__body`;
	// const { direction = 'start', variant = 'speak' } = React.useContext(ChatContext) || {};

	let decorator = null;
	if ('speak' === variant || 'think' === variant) {
		decorator = <Decorator {...getDecoProps(direction, variant)} />;
	}

	return (
		<Layouter lismClass={lismClass} {...props}>
			{decorator}
			<Layouter
				className='c--chat__content'
				isFlow={isFlow}
				{...getContentProps(direction, variant, contentProps)}
			>
				{children}
			</Layouter>
		</Layouter>
	);
}
