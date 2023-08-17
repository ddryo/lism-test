import React from 'react';
import { Lism } from '../Lism';
import { Center } from '../Center';
// import { Text } from '../Text';
import { Layer } from '../Layer';
// import { Flex } from '../Flex';
import { Frame } from '../Frame';
import { MediaLayer } from '../Layer';

export default function ChatBubble({
	name,
	img,
	direction = 'left',
	contentProps = {},
	children,
	variant = 'chat',
	iconFrameProps = {},
	...props
}) {
	let decorators = null;
	// const fxd = 'left' === direction ? null : 'row-reverse';

	let _chatBoxProps = {
		isGrid: true,
		gap: '-',
	};
	let _iconProps = {};
	let _iconFrameProps = { radius: '99' };
	let _bodyProps = {
		pos: 'relative',
		mt: '-',
	};
	let _contentProps = {
		isFlow: true,
		flowGap: 30,
		radius: '-',
		p: ['-', '-'],
	};
	if ('box' === variant) {
		_chatBoxProps.gap = 0;
		_contentProps.radius = 1;
		_iconProps.pX = 10;
		_iconFrameProps.shadow = 1;
	} else {
		decorators =
			'box' === variant ? null : (
				<>
					<Layer
						className='b--chatBubble__decorator'
						data-key={`${variant}-a`}
						aria-hidden='true'
					></Layer>
					<Layer
						className='b--chatBubble__decorator'
						data-key={`${variant}-b`}
						aria-hidden='true'
					></Layer>
				</>
			);
	}

	return (
		<Lism
			blockClass='b--chatBubble'
			data-variant={variant || null}
			data-direction={direction || null}
			{..._chatBoxProps}
			{...props}
		>
			{img && (
				<Lism blockClass='b--chatBubble__icon' {..._iconProps}>
					<Frame ratio='1:1' {..._iconFrameProps} {...iconFrameProps}>
						<MediaLayer>{img}</MediaLayer>
					</Frame>
				</Lism>
			)}

			{name && (
				<Lism blockClass='b--chatBubble__name' fz='2xs' p={10} mt='-'>
					{name}
				</Lism>
			)}
			<Lism blockClass='b--chatBubble__body' {..._bodyProps}>
				<Lism blockClass='b--chatBubble__content' {..._contentProps} {...contentProps}>
					{children}
				</Lism>
				{decorators}
			</Lism>
		</Lism>
	);
}

// Cluster: is--flexでflex-wrap: wrap;なもの
// Stack: 縦方向のCluster

// Flow: .l--Box.is--flow
// Flex: .l--Box.is--flex
// Grid: .l--Box.is--grid

// smサイズだけreelとか → reel > flex,grid に対して処理するだけで済む？
// reel > flex → fw: nowrapに
// reel→ "lgで解除" という考え方？
// reel.only-sm とかの直下にflexなどをおく。
