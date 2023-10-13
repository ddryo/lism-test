import {
	Box,
	ChatBubble,
	FilterLayer,
	Container,
	Frame,
	MediaLayer,
	Layer,
	Center,
	Spacer,
	Cluster,
} from '@lism/core';
import DecorationBox from './component/DecorationBox.jsx';
import { useState } from 'react';

function DammyText() {
	return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>;
}
function DammyTextLong() {
	return (
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur saepe qui
			reprehenderit aspernatur hic odit eos rerum illo velit corporis voluptatibus, minus
			accusantium! Obcaecati enim eos dolor quis illum?
		</p>
	);
}

export default function DecoratorTest() {
	const [isRtl, setIsRtl] = useState(false);
	return (
		<>
			<Container hasGutter isFlow isConstrained size='s' dir={isRtl ? 'rtl' : null}>
				<Center pos='sticky' top='0'>
					<button
						className='-p:20'
						onClick={() => {
							setIsRtl(!isRtl);
						}}
					>
						rtl toggle
					</button>
				</Center>
				<h2>gradient</h2>
				参考: https://webgradients.com/
				<h3>bg=gradient:xxx</h3>
				<Cluster>
					<Box fz='s' bg='gradient:blue' shadow='1' p='box' h='8rem' w='12rem'>
						gradient:blue
					</Box>
					<Box fz='s' bg='gradient:sunset' shadow='1' p='box' h='8rem' w='12rem'>
						gradient:sunset
					</Box>
					<Box fz='s' bg='gradient:2' shadow='1' p='box' h='8rem' w='12rem'>
						gradient:2
					</Box>
					<Box fz='s' bg='gradient:black-to-bottom' p='box' h='8rem' w='12rem'>
						gradient:black-to-transparent-layer
					</Box>
				</Cluster>
				<h3>gradient prop</h3>
				<Cluster>
					<Box
						fz='s'
						gradient={{ angle: 'to right', colors: 'black-to-transparent' }}
						p='box'
						w='12rem'
						h='8rem'
					>
						colorにだけ変数を使う
					</Box>
					<Box
						fz='s'
						gradient={{ angle: 'to right', colors: 'lime' }}
						p='box'
						w='12rem'
						h='8rem'
					>
						colorにだけ変数を使う
					</Box>
					<Box
						fz='s'
						gradient={{ angle: 'to bottom', colors: 'dense-water' }}
						p='box'
						w='12rem'
						h='8rem'
					>
						colorにだけ変数を使う
					</Box>
					<Box
						fz='s'
						gradient={{ angle: '35deg', colors: '#ff9a9e 0%,#fad0c4 99%,#fad0c4 100%' }}
						p='box'
						w='12rem'
						h='8rem'
					>
						{`angle:'35deg', colors:'直書き'`}
					</Box>
					<Box
						fz='s'
						gradient={{
							type: 'radial',
							angle: 'circle at top right',
							colors: 'yellow, #f06d06 50%',
						}}
						p='box'
						w='12rem'
						h='8rem'
					>
						radial
					</Box>
					<Box
						fz='s'
						gradient={{
							type: 'repeating-linear',
							angle: '45deg',
							colors: '#3f87a6, #ebf8e1 20%',
						}}
						p='box'
						w='12rem'
						h='8rem'
					>
						repeating-linear
					</Box>
					<Box
						fz='s'
						gradient={{ type: 'conic', colors: '#fff, #000' }}
						p='box'
						w='12rem'
						h='8rem'
					>
						conic
					</Box>
					<Box
						fz='s'
						gradient={'conic-gradient(from -45deg, #fff, #000, #fff)'}
						shadow='1'
						p='box'
						w='12rem'
						h='8rem'
					>
						Lorem ipsum.
					</Box>
				</Cluster>
				<h2>ChatBubble</h2>
				<ChatBubble
					name='るふぃ'
					icon='https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s400/onepiece01_luffy.png'
				>
					<DammyText length='m' />
				</ChatBubble>
				<ChatBubble
					name='そげキング'
					icon='https://1.bp.blogspot.com/-mZpzgXC1Sxk/YAOTCAKwWTI/AAAAAAABdOM/5B4hXli0KLU5N-BySHgjVbhZscKLSE-bQCNcBGAsYHQ/s400/onepiece04_usopp_sogeking.png'
					direction='right'
				>
					<DammyText />
					<DammyText length='m' />
				</ChatBubble>
				<ChatBubble
					type='think'
					name='るふぃ'
					icon='https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s400/onepiece01_luffy.png'
				>
					<DammyText length='m' />
				</ChatBubble>
				<ChatBubble
					type='think'
					name='そげキング'
					icon='https://1.bp.blogspot.com/-mZpzgXC1Sxk/YAOTCAKwWTI/AAAAAAABdOM/5B4hXli0KLU5N-BySHgjVbhZscKLSE-bQCNcBGAsYHQ/s400/onepiece04_usopp_sogeking.png'
					direction='right'
				>
					<DammyText />
					<DammyText length='m' />
				</ChatBubble>
				<hr />
				<ChatBubble
					type='box'
					name='るふぃ'
					icon='https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s400/onepiece01_luffy.png'
				>
					<DammyText length='m' />
				</ChatBubble>
				<ChatBubble
					type='box'
					name='そげキング'
					icon='https://1.bp.blogspot.com/-mZpzgXC1Sxk/YAOTCAKwWTI/AAAAAAABdOM/5B4hXli0KLU5N-BySHgjVbhZscKLSE-bQCNcBGAsYHQ/s400/onepiece04_usopp_sogeking.png'
					direction='right'
				>
					<DammyText />
					<DammyText length='m' />
				</ChatBubble>
				<hr />
				<h2>call</h2>
				<DecorationBox variant='call' direction='left'>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='call' direction='right' bdc='red'>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='call' direction='top'>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='call' direction='top'>
					<DammyTextLong />
				</DecorationBox>
				<DecorationBox variant='call' direction='bottom'>
					<DammyText />
				</DecorationBox>
				<h2>balloon</h2>
				<DecorationBox variant='balloon' direction='left'>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='balloon' direction='left' bgc='pale'>
					<DammyText />
				</DecorationBox>
				<DecorationBox
					variant='balloon'
					direction='right'
					bdc='blue'
					bgc='hsl(215deg 98% 96%)'
				>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='balloon' direction='top'>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='balloon' direction='bottom'>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='balloon' direction='top-start'>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='balloon' direction='bottom-start'>
					<DammyText />
				</DecorationBox>
				<h2>pipipi</h2>
				<DecorationBox variant='pipipi' direction='left'>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='pipipi' direction='right' bdc='blue'>
					<DammyText />
				</DecorationBox>
				---
				<DecorationBox variant='sticky'>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='sticky' bdc='blue' bgc='hsl(200 90% 90%)'>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='kakko' direction='lr'>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='kakko' direction='tb'>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='big-kakko' direction='lr'>
					<DammyText />
				</DecorationBox>
				<DecorationBox variant='big-kakko' direction='tb'>
					<DammyText />
				</DecorationBox>
				<h2>BG</h2>
				<Box className='-bg:grid' p='box:l'>
					<DammyText />
				</Box>
				<Box className='-bg:grid' p='box:l' bgc='black:10%'>
					<DammyText />
				</Box>
				<Box className='-bg:stripe' p='box:l'>
					<DammyText />
				</Box>
				<Box className='-bg:stripe' p='box:l' bgc='blue:10%'>
					<DammyText />
				</Box>
				<h2>Glass</h2>
				<Frame aspect='16/9'>
					<MediaLayer
						src='https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80'
						alt=''
						width='960'
						height='640'
					/>
					<Layer gap={20} p={20} bg='glass' radius={2} inset={50} c='white' shadow={2}>
						<Center gap={20} size='cover'>
							<DammyText length='m' />
						</Center>
					</Layer>
				</Frame>
				<Frame aspect='16/9'>
					<MediaLayer
						src='https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
						alt=''
						width='960'
						height='640'
					/>
					<Layer gap={20} p={20} bg='glass' radius={5} inset={50} c='black' shadow={4}>
						<Center gap={20} size='cover'>
							<DammyText length='m' />
						</Center>
					</Layer>
				</Frame>
			</Container>
		</>
	);
}
