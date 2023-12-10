'use client';
import {
	Box,
	Container,
	Layer,
	Frame,
	Layouter,
	Chat,
	ChatIcon,
	ChatName,
	ChatContent,
	ChatFooter,
	Spacer,
	Alert,
	Note,
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
		<Layouter isFlow hasGutter py={50} isConstrained='s' alignfull id='demo-wrapper' _dir='rtl'>
			<p>test...</p>
			<Box className='is--cbox' bd keycolor='green' p='box'>
				<p>Lorem ipsum text...</p>
			</Box>
			<Note heading='Heading text...' isFlow='s' preset='alert'>
				<p>Lorem ipsum text...</p>
				<DammyText />
			</Note>

			<div className='grid-container'>
				<div className='icon-area'>アイコン</div>
				<div className='content1'>コンテンツをここに挿入.</div>
				<div className='content2'>コンテンツをここに挿入.</div>
			</div>
			<Alert preset='info'>
				<p>
					ロレムイプサムの座り雨、トマ好き学習だったエリット、しかし<a href='###'>リンク文字列</a>
					と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。そのような{' '}
					<code>Liberroy, Foo</code> の取り組みの利点を提案したのなら。
				</p>
			</Alert>
			<Chat>
				<ChatIcon src='/img/avatar01.jpg' />
				<ChatName>ルフィ</ChatName>
				<ChatContent>
					<p>
						ロレムイプサムの座り雨、トマ好き学習だったエリット、しかし<a href='###'>リンク文字列</a>
						と活力はそのような木々と楽しみ。そのような <code>Liberroy, Foo</code>{' '}
						の取り組みの利点を提案したのなら。
					</p>
				</ChatContent>
				<ChatFooter>Footer text</ChatFooter>
			</Chat>
			<Chat keycolor='gray'>
				<ChatIcon src='/img/avatar01.jpg' />
				<ChatName>ルフィ</ChatName>
				<ChatContent>
					<p>
						ロレムイプサムの座り雨、トマ好き学習だったエリット、しかし<a href='###'>リンク文字列</a>
						と活力はそのような木々と楽しみ。そのような <code>Liberroy, Foo</code>{' '}
						の取り組みの利点を提案したのなら。
					</p>
				</ChatContent>
				<ChatFooter>color: gray</ChatFooter>
			</Chat>
			<Chat keycolor='green'>
				<ChatIcon src='/img/avatar01.jpg' />
				<ChatName>ルフィ</ChatName>
				<ChatContent>
					<p>
						ロレムイプサムの座り雨、トマ好き学習だったエリット、しかし<a href='###'>リンク文字列</a>
						と活力はそのような木々と楽しみ。そのような <code>Liberroy, Foo</code>{' '}
						の取り組みの利点を提案したのなら。
					</p>
				</ChatContent>
				<ChatFooter>color: green</ChatFooter>
			</Chat>
			<Chat keycolor='blue' variant='think' direction='end'>
				<ChatIcon src='/img/avatar01.jpg' />
				{/* <ChatName>ルフィ</ChatName> */}
				<ChatContent>
					<p>
						ロレムイプサムの座り雨、トマ好き学習だったエリット、しかし<a href='###'>リンク文字列</a>
						と活力はそのような木々と楽しみ。そのような <code>Liberroy, Foo</code>{' '}
						の取り組みの利点を提案したのなら。
					</p>
				</ChatContent>
			</Chat>
			<Chat keycolor='red'>
				<ChatIcon src='/img/avatar01.jpg' />
				{/* <ChatName>ルフィ</ChatName> */}
				<ChatContent>
					<DammyText length='xs' lang='ja' />
				</ChatContent>
			</Chat>
			<hr />
			<h2>Chat</h2>
			<Chat>
				<ChatIcon src='/img/avatar01.jpg' />
				<ChatName>ルフィ</ChatName>
				<ChatContent>
					<DammyText length='xs' lang='ja' />
				</ChatContent>
			</Chat>
			<Chat direction='end'>
				<ChatIcon src='/img/avatar01.jpg' />
				<ChatName>ルフィ</ChatName>
				<ChatContent>
					<DammyText length='m' lang='ja' />
				</ChatContent>
			</Chat>
			<Chat variant='think'>
				<ChatIcon src='/img/avatar02.jpg' />
				<ChatName>ルフィ</ChatName>
				<ChatContent>
					<DammyText length='m' lang='ja' />
				</ChatContent>
			</Chat>
			<Chat direction='end' variant='think'>
				<ChatIcon src='/img/avatar04.jpg' />
				<ChatName>チョッパー</ChatName>
				<ChatContent>
					<DammyText length='m' lang='ja' />
				</ChatContent>
			</Chat>
			<hr />
			<h2>Customize例</h2>
			<hr />
			<Chat provide={{ bgc: 'black', c: 'white' }}>
				<ChatIcon src='/img/onepiece01_luffy.png' />
				<ChatName>ルフィ</ChatName>
				<ChatContent radius={5}>
					<DammyText length='xs' lang='ja' />
				</ChatContent>
			</Chat>
			{/* <Chat direction='end' variant='think' provide={{ bgc: '#eff9ef', bdc: '#bccfbd' }}>
				<ChatIcon src='/img/onepiece06_chopper.png' />
				<ChatName>チョッパー</ChatName>
				<ChatContent wrapperProps={{ style: { filter: 'drop-shadow(2px 2px 0px #888)' } }}>
					<DammyText lang='ja' />
				</ChatContent>
			</Chat> */}
			<hr />
			<h2>Customize例</h2>
			<hr />
			<Chat variant='box'>
				<ChatIcon src='/img/onepiece01_luffy.png' />
				<ChatName>ルフィ</ChatName>
				<ChatContent type='box'>
					<DammyText length='m' lang='ja' />
				</ChatContent>
			</Chat>
			<Chat variant='box' direction='end'>
				<ChatIcon src='/img/onepiece06_chopper.png' />
				<ChatName>チョッパー</ChatName>
				<ChatContent type='box' direction='end' radius='3'>
					<DammyText length='m' lang='ja' />
				</ChatContent>
			</Chat>
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
