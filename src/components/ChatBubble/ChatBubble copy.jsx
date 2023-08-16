import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { Layer } from '../Layer';

import { SideFixGrid } from '../SideFix';
import { Frame } from '../Frame';
import { MediaLayer } from '../Layer';

export default function ChatBubble({
	name,
	img,
	direction = 'left',
	contentProps = {},
	children,
	...props
}) {
	// right up

	return (
		<SideFixGrid
			className='b--chatBubble'
			fix={`${direction} up`}
			fixW='auto'
			gap={40}
			_breakPoint='none'
		>
			<Box ga='fix' w={['-', '-']}>
				<Frame ratio='1:1' radius='99'>
					<MediaLayer>{img}</MediaLayer>
				</Frame>
				<Text tag='div' fz='xs' ta='center' mbs={10}>
					{name}
				</Text>
			</Box>
			<Box blockClass='b--chatBubble__body' pos='relative' maxW='40em'>
				<Box
					className='b--chatBubble__content'
					isFlow
					flowGap={40}
					p={40}
					{...contentProps}
				>
					{children}
				</Box>
				<Layer className='b--chatBubble__decorator -a' aria-hidden='true'></Layer>
				<Layer className='b--chatBubble__decorator -b' aria-hidden='true'></Layer>
			</Box>
		</SideFixGrid>
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
