import { Box, Container, Layer, Layout, Text, Badge, Note } from '@loos/lism-core';
import './style.scss';

function TipCode({ text, color = 'blue', ...props }) {
	return (
		<Badge tag='code' fz='s' lh='1' variant='subtle' keycolor={color} {...props}>
			{text}
		</Badge>
	);
}
function LoremContent({ ...props }) {
	return (
		<Text px='10' bg='stripe' bd bdc='b200' {...props}>
			Lorem text ...
		</Text>
	);
}

function AlignWide({ text, children, ...props }) {
	return (
		<Box alignwide ta='c' bg='stripe' bgc='yellow:10%' {...props}>
			<TipCode text='alignwide' color='yellow' m='5' />
			{text}
			{children}
		</Box>
	);
}

function AlignFull({ text, children, ...props }) {
	return (
		<Box alignfull ta='c' bg='stripe' bgc='pink:10%' {...props}>
			<TipCode text='alignfull' color='pink' m='5' />
			{text}
			{children}
		</Box>
	);
}

export default function ContainerTest() {
	return (
		<Layout isFlow hasGutter py={50} isContainer alignfull id='demo-wrapper'>
			<Note heading='このページの注意点' preset='warning'>
				<p>
					小めの画面でも確認しやすいように、各コンテナサイズをLismのデフォルト値よりも狭くなるように上書きセットしています。
				</p>
			</Note>
			<h2>is--constrained</h2>
			<Layout isConstrained>
				<Text ta='c' lh='1'>
					<TipCode text='is--constrained' />
				</Text>
				<LoremContent />
				<LoremContent />
			</Layout>
			<Container isConstrained='s' isFlow>
				<Text ta='c' lh='1'>
					<TipCode text='is--constrained:s' />
					{' , '}
					<TipCode text='is--flow' color='green' />
				</Text>
				<LoremContent />
				<LoremContent />
			</Container>
			<Layout isConstrained hasGutter isFlow='s'>
				<Text ta='c' lh='1'>
					<TipCode text='is--constrained' />
					{' , '}
					<TipCode text='hasGutter' color='purple' />
					{' , '}
					<TipCode text='is--flow:s' color='green' />
				</Text>
				<LoremContent />
				<LoremContent />
				<Layer className='gutter-guide' mbs='0' />
			</Layout>
			{/* <Container isConstrained='400px' isFlow='s'>
				<Text ta='c' lh='1'>
					<TipCode text='isConstrained=400px' />
					{' , '}
					<TipCode text='is--flow:s' color='green' />
				</Text>
				<LoremContent />
				<LoremContent />
			</Container> */}

			<hr />

			<h2>is--constrainedの子要素の振る舞い</h2>

			<h3>alignfull</h3>
			<p>alignfull は、親が has--gutter を持っていても全幅に広がります。</p>
			<Layout isConstrained hasGutter isFlow='s'>
				{/* <Text ta='c' lh='1'>
						<TipCode text='hasGutter' color='purple' />
					</Text> */}
				<LoremContent />

				<AlignFull />
				<AlignWide />
				<Box maxW='100' ta='c' bgc='gray:20%'>
					<TipCode text='max-width:100%' m='5' color='gray' />
				</Box>

				<LoremContent />
				<Layer className='gutter-guide' mbs='0' />
			</Layout>
			<h3>alignwide</h3>
			<p>constrainedの幅によってかわります。</p>

			<Layout isConstrained='s' isFlow='s'>
				<Text ta='c' lh='1'>
					<TipCode text='is--constrained:s' />
				</Text>
				<LoremContent />

				<AlignWide>
					: <code>--size--m</code>
				</AlignWide>
				{/* <LoremContent /> */}
			</Layout>
			<Layout isConstrained isFlow='s'>
				<Text ta='c' lh='1'>
					<TipCode text='is--constrained' />
				</Text>
				<LoremContent />
				<AlignWide>
					: <code>--size--l</code>
				</AlignWide>
				{/* <LoremContent /> */}
			</Layout>
			<Layout isConstrained='l' isFlow='s'>
				<Text ta='c' lh='1'>
					<TipCode text='is--constrained:l' />
				</Text>
				<LoremContent />
				<AlignWide>
					: <code>100%</code>
				</AlignWide>
				{/* <LoremContent /> */}
			</Layout>

			<h3>is--constrainedのネスト</h3>
			<p>
				is--constrained の直下で is--constrained をネストすると自身の幅が指定したサイズになってしまう。
				<br />
				(alignfullで全幅にしつつネストすれば回避できる。)
			</p>
			<Layout isConstrained hasGutter isFlow='s'>
				<Text ta='c' lh='1'>
					<TipCode text='is--constrained' />
					{' , '}
					<TipCode text='hasGutter' color='purple' />
				</Text>
				<LoremContent />
				<Layout isConstrained='s' isFlow='s'>
					<Text ta='c' lh='1'>
						<TipCode text='is--constrained:s' />
					</Text>
					<LoremContent />
					<LoremContent />
				</Layout>
				<Layout isConstrained='s' alignfull isFlow='s' bgc='pink:.01' bg='stripe'>
					<Text ta='c' lh='1'>
						<TipCode text='is--constrained:s' />
						{' , '}
						<TipCode text='alignfull' color='pink' />
					</Text>
					<LoremContent bg='' bgc='gray:.15' />
					<LoremContent bg='' bgc='gray:.15' />
				</Layout>
				{/* guide */}
				<Layer className='gutter-guide' mbs='0' />
			</Layout>

			<hr />

			<h3>コンテナクエリの挙動について</h3>
			<p>
				コンテナ幅の判定値に注意。直下要素での判定値は親要素の幅になる。コンテンツの幅でしっかり判定したい時は、その要素をコンテナで囲んでください。
			</p>
			<Layout isConstrained isFlow='s'>
				<Text ta='c' lh='1'>
					<TipCode text='is--constrained' />
				</Text>
				{/* <LoremContent /> */}
				<Box p='10'>
					<Text>↓表示が切り替わります</Text>
					<Box w='10cqw' bd fz='xs' whs='nw'>
						width:10cqw
					</Box>
					<Text d={['n', 'inline-block']}>@sm~で表示</Text>
					<Text d={['n', null, 'inline-block']}>@md~で表示</Text>
					<Text d={['n', null, null, 'inline-block']}>@lg~で表示</Text>
				</Box>
				<Container>
					<Text ta='c' lh='1'>
						<TipCode text='is--container' color='orange' />
					</Text>
					<Box p='10'>
						<Text>↓表示が切り替わります</Text>
						<Box w='10cqw' bd fz='xs' whs='nw'>
							width:10cqw
						</Box>
						<Text d={['n', 'inline-block']}>@sm~で表示</Text>
						<Text d={['n', null, 'inline-block']}>@md~で表示</Text>
						<Text d={['n', null, null, 'inline-block']}>@lg~で表示</Text>
					</Box>
				</Container>
			</Layout>
			<hr />
			<h2>Container</h2>
			<Box bd='guide'>
				<Layout isContainer>
					<Text ta='c' lh='1'>
						<TipCode text='is--container' color='orange' />
					</Text>
					<LoremContent />
					<LoremContent />
				</Layout>
			</Box>
			<Box bd='guide'>
				<Container hasGutter>
					<Text ta='c' lh='1'>
						<TipCode text='is--container' color='orange' />
						{' , '}
						<TipCode text='hasGutter' color='purple' />
					</Text>
					<LoremContent />
					<LoremContent />
					<Layer className='gutter-guide' mbs='0' />
				</Container>
			</Box>
			<Box hasGutter bd='guide'>
				<Text ta='c' lh='1'>
					<TipCode text='hasGutter' color='purple' />
				</Text>
				<Container>
					<Text ta='c' lh='1'>
						<TipCode text='is--container' color='orange' />
					</Text>
					<LoremContent />
					<LoremContent />
				</Container>
				<Layer className='gutter-guide' mbs='0' />
			</Box>
			<Box bd='guide'>
				<Container size='s'>
					<Text ta='c' lh='1'>
						<TipCode text='is--container:s' color='orange' />
					</Text>
					<LoremContent />
					<LoremContent />
				</Container>
			</Box>
			<h3>is--container の子要素の振る舞い</h3>
			<p>
				@propetry が有効なブラウザでは、直下の alignfull は container
				要素のさらに親コンテナを基準とした幅まで広がります。
			</p>
			<Box>
				<Container size='l' isFlow='s' hasGutter>
					<Text ta='c' lh='1'>
						<TipCode text='is--container:l' color='orange' />
					</Text>
					<LoremContent />
					<AlignFull />
					<Container size='s'>
						<Text ta='c' lh='1'>
							<TipCode text='is--container:s' color='orange' />
						</Text>
						<LoremContent />
						<AlignFull />
					</Container>
					<Layer className='gutter-guide' mbs='0' />
				</Container>
			</Box>

			<Container isConstrained hasGutter isFlow='s'>
				<LoremContent />

				<Container size='s'>
					<Text ta='c' lh='1'>
						<TipCode text='is--container:s' color='orange' />
					</Text>
					<LoremContent />
					<AlignFull />
				</Container>
				<Layer className='gutter-guide' mbs='0' />
			</Container>

			<h2>container と constrained の入れ子</h2>
			<Layout isConstrained isFlow='s' hasGutter>
				<Text ta='c' lh='1'>
					<TipCode text='is--constrained' />
				</Text>
				<LoremContent />
				<AlignFull />
				<AlignWide />
				{/* <Box bd className='alignscreen'>
					alignscreen
				</Box> */}
				<Container size='s' isFlow='s'>
					<Text ta='c' lh='1'>
						<TipCode text='is--container' color='orange' />
					</Text>
					<LoremContent />
					<AlignFull />
					<AlignWide />
					{/* <Box bd className='alignscreen'>
						alignscreen
					</Box> */}
				</Container>
				<Layer className='gutter-guide' mbs='0' />
			</Layout>
			<Layout hasGutter bd='guide'>
				<Container isFlow='s'>
					<Text ta='c' lh='1'>
						<TipCode text='is--container' color='orange' />
					</Text>
					<LoremContent />
					<AlignFull />
					<AlignWide />
					{/* <Box bd className='alignscreen'>
					alignscreen
				</Box> */}
					<Layout isConstrained='s' isFlow='s'>
						<Text ta='c' lh='1'>
							<TipCode text='is--constrained:s' />
						</Text>
						<LoremContent />
						<Box alignfull> alignfull</Box>
						<Box alignwide> alignwide</Box>
						<Box bd className='alignscreen'>
							{' '}
							alignscreen
						</Box>
					</Layout>
				</Container>
				<Layer className='gutter-guide' mbs='0' />
			</Layout>
		</Layout>
	);
}
