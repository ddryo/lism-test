import { Container, Box, Cluster } from '@loos/lism-core';
export default function DecoratorTest() {
	return (
		<Container hasGutter isFlow isConstrained>
			<p>きれいなグラデーション紹介サービス: https://webgradients.com/</p>

			<h3>bg=gradient:xxx</h3>
			<Cluster>
				<Box
					fz='s'
					gradient='black-to-bottom'
					p='box'
					h='8rem'
					w='12rem'
					bg={{ size: '30px 30px' }}
				>
					`:black-to-bottom`
				</Box>
				<Box fz='s' className='-gradient:blue' shadow='1' p='box' h='8rem' w='12rem'>
					gradient:blue
				</Box>
				<Box fz='s' gradient='sunset' shadow='1' p='box' h='8rem' w='12rem'>
					`.-gradient:sunset`
				</Box>
				<Box fz='s' className='-gradient:2' shadow='1' p='box' h='8rem' w='12rem'>
					gradient:2
				</Box>
			</Cluster>
			<h3>gradient prop</h3>
			<Cluster>
				<Box
					fz='s'
					gradient={{ angle: 'to right', colors: 'to-black' }}
					p='box'
					w='12rem'
					h='8rem'
				>
					colorにだけ変数を使う
				</Box>
				<Box
					fz='s'
					gradient={{ type: 'radial', colors: 'to-black' }}
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
		</Container>
	);
}
