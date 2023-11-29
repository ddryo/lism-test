'use client';
import {
	Box,
	Container,
	Layer,
	Frame,
	Layouter,
	ChatBubble,
	ChatBubbleIcon,
	ChatBubbleName,
	ChatBubbleContent,
	Spacer,
	DecoBox,
} from '@loos/lism-core';
import DammyText from '@/components/DammyText';

import './style.scss';

// const FolderIcon = () => (
// 	<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='currentColor' viewBox='0 0 256 256'>
// 		<path d='M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33l27.74,20.8a16.12,16.12,0,0,0,9.6,3.2H216Z'></path>
// 	</svg>
// );

export default function ContainerTest() {
	return (
		<Layouter isFlow hasGutter py={50} isConstrained='s' alignfull id='demo-wrapper'>
			<p>test...</p>
			<hr />
			<h2>ChatBubble</h2>
			<ChatBubble>
				<ChatBubbleIcon src='/img/onepiece01_luffy.png' />
				<ChatBubbleName>ルフィ</ChatBubbleName>
				<ChatBubbleContent>
					<DammyText length='xs' lang='ja' />
				</ChatBubbleContent>
			</ChatBubble>
			<ChatBubble direction='right' name='チョッパー' iconSrc='/img/onepiece06_chopper.png'>
				<ChatBubbleContent direction='right'>
					<DammyText length='m' lang='ja' />
				</ChatBubbleContent>
			</ChatBubble>

			<ChatBubble>
				<ChatBubbleIcon src='/img/onepiece01_luffy.png' />
				<ChatBubbleName>ルフィ</ChatBubbleName>
				<ChatBubbleContent type='think'>
					<DammyText length='m' lang='ja' />
				</ChatBubbleContent>
			</ChatBubble>
			<ChatBubble direction='right' provide={{ bgc: '#eff9ef', bdc: '#bccfbd' }}>
				<ChatBubbleIcon src='/img/onepiece06_chopper.png' />
				<ChatBubbleName>チョッパー</ChatBubbleName>
				<ChatBubbleContent type='think' direction='right' radius='3'>
					<DammyText length='m' lang='ja' />
				</ChatBubbleContent>
			</ChatBubble>

			<hr />
			<h2>Customize例</h2>
			<hr />
			<ChatBubble variant='box'>
				<ChatBubbleIcon src='/img/onepiece01_luffy.png' />
				<ChatBubbleName>ルフィ</ChatBubbleName>
				<ChatBubbleContent type='box'>
					<DammyText length='m' lang='ja' />
				</ChatBubbleContent>
			</ChatBubble>
			<ChatBubble variant='box' direction='right'>
				<ChatBubbleIcon src='/img/onepiece06_chopper.png' />
				<ChatBubbleName>チョッパー</ChatBubbleName>
				<ChatBubbleContent type='box' direction='right' radius='3'>
					<DammyText length='m' lang='ja' />
				</ChatBubbleContent>
			</ChatBubble>
			<hr />
			<Spacer bg='stripe' h='60' />
			<hr />
			<h2>call</h2>
			<DecoBox variant='call' subvariant='left'>
				<DammyText />
			</DecoBox>
			<DecoBox variant='call' subvariant='right' data={{ decoratorProps: { bdc: 'red' } }}>
				<DammyText />
			</DecoBox>
			<DecoBox variant='call' subvariant='top'>
				<DammyText />
			</DecoBox>
			<DecoBox variant='call' subvariant='bottom'>
				<DammyText />
			</DecoBox>
			<h2>balloon</h2>
			<DecoBox variant='balloon' subvariant='left'>
				<DammyText />
			</DecoBox>
			<DecoBox variant='balloon' subvariant='left' bgc='pale'>
				<DammyText />
			</DecoBox>
			<DecoBox variant='balloon' subvariant='right'>
				<DammyText />
			</DecoBox>
			<DecoBox
				variant='balloon'
				subvariant='right'
				bdc='blue:40%'
				bgc='hsl(215deg 98% 96%)'
				data={{ decoratorProps: { size: '.875em' } }}
			>
				<DammyText />
			</DecoBox>
			<DecoBox variant='balloon' subvariant='top'>
				<DammyText />
			</DecoBox>
			<DecoBox variant='balloon' subvariant='bottom'>
				<DammyText />
			</DecoBox>
			<DecoBox variant='balloon' subvariant='top-start'>
				<DammyText />
			</DecoBox>
			<DecoBox variant='balloon' subvariant='bottom-start'>
				<DammyText />
			</DecoBox>
			<Spacer h={40} />
		</Layouter>
	);
}
