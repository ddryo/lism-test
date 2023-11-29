// import React from 'react';
import { Item } from '../Item';
import { Layouter } from '../Layouter';
import { Grid } from '../Grid';
import { Decorator } from '../Decorator';
// import { DecoBox } from '../DecoBox';
import { Avatar } from '../Avatar';
// import { MediaLayer } from '../Layer';

const DECORATOR_PROPS = {
	// chat: {
	// 	left: { box: { template: 'fix:l' }, body: {}, content: {}, deco: {} },
	// 	right: { box: { template: 'fix:r' }, deco: { flip: 'x' } },
	// },
	// think: {
	// 	left: { box: { template: 'fix:l' }, body: {}, content: {}, deco: {} },
	// 	right: { box: { template: 'fix:r' }, deco: { flip: 'x' } },
	// },
	// box: {
	// 	content: {
	// 		radius: 1,
	// 		p: 'box',
	// 	},
	// },
	left: {
		// rtl言語を考慮してleftも明示的にセット
		top: '0',
		right: '100%',
	},
	right: {
		top: '0',
		left: '100%',
		transform: 'scaleX(-1)',
	},
};

export default function ChatBubble({
	lismClass = {},
	type = 'chat',
	direction = 'left',
	wrapperProps = {},
	children,
	...props
}) {
	lismClass.c = `b--chat b--chat--${direction}`;
	if (type) lismClass.c += ` b--chat--${type}`;

	let decorator = null;

	let defaultProps = {
		isFlow: 's',
		consume: 'p',
		// radius: '2',
	};

	if ('chat' === type || 'think' === type) {
		decorator = (
			<Decorator
				variant={type}
				// data-dir={direction}
				pos='absolute'
				{...DECORATOR_PROPS[direction]}
			/>
		);
	}

	return (
		<Item className='b--chat__body' area='nofix' {...wrapperProps}>
			<Layouter
				className='b--chat__content'
				maxW='s'
				data-dir={direction}
				data-type={type}
				{...defaultProps}
				{...props}
			>
				{children}
			</Layouter>
			{decorator}
		</Item>
	);
}
