import {
	Box,
	Media,
	ChatBubble,
	FilterLayer,
	Container,
	Frame,
	MediaLayer,
	Layer,
	Center,
	Spacer,
	Cluster,
	DecoBox,
} from '@lism/core';
// import DecoBox from './component/DecoBox.jsx';
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

// 流体シェイプ作成 https://toolbox.signalsupply.co/apps/blob
// https://blobanimation.com/
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
				<hr />
				<p>`d--` → l--boxのバリエーションでしかない。 box--hoge, box--hoge:foo とか？</p>
				<p>... ブラウザ風など...</p>
				<hr />
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
				<DecoBox variant='call' subvariant='left'>
					<DammyText />
				</DecoBox>
				<DecoBox
					variant='call'
					subvariant='right'
					data={{ decoratorProps: { bdc: 'red' } }}
				>
					<DammyText />
				</DecoBox>
				<DecoBox variant='call' subvariant='top'>
					<DammyText />
				</DecoBox>
				<DecoBox variant='call' subvariant='top'>
					<DammyTextLong />
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
				<h2>pipipi</h2>
				<DecoBox variant='pipipi' subvariant='left'>
					<DammyText />
				</DecoBox>
				<DecoBox variant='pipipi' subvariant='right' bdc='blue'>
					<DammyText />
				</DecoBox>
				---
				<DecoBox variant='sticky'>
					<DammyText />
				</DecoBox>
				<DecoBox
					variant='sticky'
					data={{ bodyProps: { bdc: 'blue:70%', bgc: 'hsl(200 90% 95%)' } }}
				>
					<DammyText />
				</DecoBox>
				<DecoBox variant='kakko' subvariant='lr'>
					<DammyText />
				</DecoBox>
				<DecoBox variant='kakko' subvariant='tb'>
					<DammyText />
				</DecoBox>
				<DecoBox variant='big-kakko' subvariant='lr'>
					<DammyText />
				</DecoBox>
				<DecoBox variant='big-kakko' subvariant='tb'>
					<DammyText />
				</DecoBox>
				<h2>BG</h2>
				<Box bg='grid' p='box:l'>
					<DammyText />
				</Box>
				<Box bg='grid' p='box:l' bgc='black:10%'>
					<DammyText />
				</Box>
				<Box bg='stripe' p='box:l'>
					<DammyText />
				</Box>
				<Box bg='stripe' p='box:l' bgc='blue:10%'>
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
