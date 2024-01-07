// import React from 'react';
// import ChatText from './ChatText';
// import ChatTextContent from './ChatTextContent';
// import { Item } from '../Item';
import { Layouter } from '../Layouter';
// import { Grid } from '../Grid';
import { Decorator } from '../Decorator';
// import { DecoBox } from '../DecoBox';
// import { Avatar } from '../Avatar';
// import { MediaLayer } from '../Layer';

const DECORATOR_PROPS = {
	start: {
		inset: { ie: '100%' },
	},
	end: {
		inset: { is: '100%' },
		transform: 'scaleX(-1)',
	},
};

export default function ChatContent({
	lismClass = {},
	wrapperProps = {},
	context = {}, // 親から渡される
	children,
	...props
}) {
	lismClass.c = `c--chat__body`;

	const { direction = 'start', variant = 'speak' } = context;

	let decorator = null;

	let defaultContentProps = {
		isFlow: 's',
		// consume: 'c bgc', //'p bgc bdc bdw',
		// radius: '2',
	};

	if ('speak' === variant || 'think' === variant) {
		decorator = (
			<Decorator
				variant={`chat-${variant}`}
				mask='-'
				className='-bgc:mix'
				pos='absolute'
				top='0'
				{...DECORATOR_PROPS[direction]}
			/>
		);
	}

	if ('speak' === variant && direction === 'start') {
		defaultContentProps.bdrs = { ss: 0 };
	} else if ('speak' === variant && direction === 'end') {
		defaultContentProps.bdrs = { se: 0 };
	}

	return (
		<Layouter
			lismClass={lismClass}
			{...wrapperProps}
			//area='nofix'
			// data-variant={variant}
		>
			{decorator}
			<Layouter
				className='c--chat__content is--colorbox'
				pos='relative'
				maxW='s'
				{...defaultContentProps}
				{...props}
			>
				{children}
			</Layouter>
		</Layouter>
	);
}
