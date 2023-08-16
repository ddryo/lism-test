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
	// right up

	let decorators = null;
	let iconName = null;
	const fxd = 'left' === direction ? null : 'row-reverse';

	let _chatBoxProps = {};
	let _iconProps = {};
	let _iconFrameProps = { radius: '99' };
	let _bodyProps = {
		pos: 'relative',
		maxW: '45em',
		mt: ['-'],
	};
	if ('box' === variant) {
		_chatBoxProps = { pos: 'relative', isFlex: true, fxd };
		_iconProps = {
			pos: 'absolute',
			isFlex: true,
			fxd,
			pX: 10,
		};
		_iconFrameProps.shadow = 1;
		// _bodyProps.mt = ['-'];
		// _bodyProps[`m${direction[0]}`] = [null, '-'];
		iconName = name && (
			<Lism blockClass='b--chatBubble__name' fz='2xs'>
				{name}
			</Lism>
		);
	} else {
		_chatBoxProps = {
			isFlex: true,
			fxd,
			gap: '-',
			pX: { sm: '-' },
		};
		_iconProps = {
			isItem: true,
			fxsh: '0',
		};
		// _bodyProps.mt = ['-'];
		iconName = name && (
			<Lism blockClass='b--chatBubble__name' fz='2xs' ta='center' mbs={10}>
				{name}
			</Lism>
		);
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
			<Lism blockClass='b--chatBubble__icon' {..._iconProps}>
				<Frame ratio='1:1' {..._iconFrameProps} {...iconFrameProps}>
					<MediaLayer>{img}</MediaLayer>
				</Frame>
				{iconName}
			</Lism>
			<Lism blockClass='b--chatBubble__body' {..._bodyProps}>
				<Lism
					blockClass='b--chatBubble__content'
					isFlow
					radius='-'
					p={['-', '-']}
					flowGap={30}
					{...contentProps}
				>
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
