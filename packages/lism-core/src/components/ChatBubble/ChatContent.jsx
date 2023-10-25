// import React from 'react';
import { Lism } from '../Lism';
// import { Grid } from '../Grid';
// import { Center } from '../Flex/Center';
// import { Text } from '../Text';
// import { Layer } from '../Layer';
import { Decorator } from '../Decorator';

// import { Flex } from '../Flex';
// import { Avatar } from '../Avatar';
// import { MediaLayer } from '../Layer';

const DECORATOR_PROPS = {
	// chat: {
	left: {
		// rtl言語を考慮してleftも明示的にセット
		top: 0,
		right: '100%',
	},
	right: {
		top: 0,
		left: '100%',
	},
	// },
};

// props → Contentにいく
export default function ChatContent({ variant = 'chat', direction = 'left', children, ...props }) {
	let decorators = null;
	// const fxd = 'left' === direction ? null : 'row-reverse';

	let contentProps = {
		isFlow: true,
		flowGap: 30,
		radius: '-',
		p: '-',
	};

	if ('box' === variant) {
		contentProps.radius = 1;
	} else {
		// console.log('DECORATOR_PROPS[direction]', DECORATOR_PROPS[direction]);
		decorators = (
			<>
				<Decorator
					type={variant}
					direction={direction}
					index='1'
					bgc='-'
					{...DECORATOR_PROPS[direction]}
				/>
				<Decorator
					type={variant}
					direction={direction}
					index='2'
					bgc='-'
					{...DECORATOR_PROPS[direction]}
				/>
			</>
		);
	}

	return (
		<div className='b--chatBubble__body'>
			<Lism blockClass='b--chatBubble__content' {...contentProps} {...props}>
				{children}
			</Lism>
			{decorators}
		</div>
	);
}
