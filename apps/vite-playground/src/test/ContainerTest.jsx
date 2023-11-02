import {
	Box,
	Container,
	Layer,
	Columns,
	Spacer,
	Divider,
	Layout,
	Text,
	Badge,
	Cluster,
} from '@loos/lism-core';
import './container-test.scss';

function TipCode({ text, color = 'blue', ...props }) {
	return (
		<Badge fz='s' lh='1' variant='subtle' lts='1' keycolor={color} {...props}>
			{text}
		</Badge>
	);
}
function LoremContent({ ...props }) {
	return (
		<Text bg='stripe' bd bdc='b200' {...props}>
			Lorem text ...
		</Text>
	);
}

export default function ContainerTest() {
	return (
		<>
			<Layout hasGutter isFlow>
				<h2>isConstrained</h2>
				<Layout isConstrained>
					<Text ta='c' lh='1'>
						<TipCode text='constrained' />
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
						<TipCode text='constrained' />
						{' , '}
						<TipCode text='hasGutter' color='purple' />
						{' , '}
						<TipCode text='is--flow:s' color='green' />
					</Text>
					<LoremContent />
					<LoremContent />
					<Layer className='gutter-guide' mbs='0' />
				</Layout>
				<Container isConstrained='400px' isFlow='s'>
					<Text ta='c' lh='1'>
						<TipCode text='isConstrained=400px' />
						{' , '}
						<TipCode text='is--flow:s' color='green' />
					</Text>
					<LoremContent />
					<LoremContent />
				</Container>
				<hr />
				<h2>isConstrainedの子要素の振る舞い</h2>
				<p>
					has--gutterを持っていても、直下のalignfullはpading分を考慮して全幅に広がります。
				</p>
				<Layout isConstrained hasGutter isFlow='s'>
					{/* <Text ta='c' lh='1'>
						<TipCode text='hasGutter' color='purple' />
					</Text> */}
					<LoremContent />
					<Box alignfull ta='c' bgc='pink:10%'>
						<TipCode text='alignfull' color='pink' m='5' />
					</Box>

					<Box alignwide ta='c' bgc='yellow:10%'>
						<TipCode text='alignwide' color='yellow' m='5' />
					</Box>
					<Box maxW='100' ta='c' bgc='gray:20%'>
						<TipCode text='max-width:100%' m='5' color='gray' />
					</Box>
					<LoremContent />
					<Layer className='gutter-guide' mbs='0' />
				</Layout>
				<p>isConstrainedの直下でisConstrainedを配置した時の挙動</p>
				<Layout isConstrained hasGutter isFlow='s'>
					{/* <Text ta='c' lh='1'>
						<TipCode text='constrained' />
						{' , '}
						<TipCode text='hasGutter' color='purple' />
					</Text> */}
					<LoremContent />
					<Layout isConstrained='s' isFlow='s'>
						<Text ta='c' lh='1'>
							<TipCode text='is--constrained:s' />
						</Text>
						<LoremContent />
						<LoremContent />
					</Layout>
					<Layout isConstrained='s' alignfull isFlow='s'>
						<Text ta='c' lh='1'>
							<TipCode text='is--constrained:s' />
							{' , '}
							<TipCode text='alignfull' color='pink' />
						</Text>
						<LoremContent bg='' bd={null} bgc='gray:.2' />
						<LoremContent bg='' bd={null} bgc='gray:.2' />
					</Layout>
					{/* guide */}
					<Layer className='gutter-guide' mbs='0' />
				</Layout>
				<p>
					ネストすると自身の幅が指定したサイズになってしまう。alignfullで全幅にしつつネストすれば、それを回避できる。
				</p>
				<hr />
				<h3>alignwideの挙動</h3>
				<p>constrainedの幅によってかわります。</p>
				<Layout isConstrained isFlow='s'>
					<Text ta='c' lh='1'>
						<TipCode text='is--constrained' />
					</Text>
					<LoremContent />
					<Box alignwide ta='c' bgc='yellow:10%'>
						<TipCode text='alignwide' color='yellow' m='5' />
					</Box>
					<LoremContent />
				</Layout>
				<Layout isConstrained='s' isFlow='s'>
					<Text ta='c' lh='1'>
						<TipCode text='is--constrained:s' />
					</Text>
					<LoremContent />
					<Box alignwide ta='c' bgc='yellow:10%'>
						<TipCode text='alignwide' color='yellow' m='5' />
					</Box>
					<LoremContent />
				</Layout>
				<Layout isConstrained='l' isFlow='s'>
					<Text ta='c' lh='1'>
						<TipCode text='is--constrained:l' />
					</Text>
					<LoremContent />
					<Box alignwide ta='c' bgc='yellow:10%'>
						<TipCode text='alignwide' color='yellow' m='5' />
					</Box>
					<LoremContent />
				</Layout>
				<h3>コンテナクエリの挙動について</h3>
				<p>
					コンテナ幅の判定値に注意。直下要素での判定値は親要素の幅になる。コンテンツの幅でしっかり判定したい時は、その要素をコンテナで囲んでください。
				</p>
				<Layout isConstrained isFlow='s'>
					<Text ta='c' lh='1'>
						<TipCode text='constrained' />
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
				<h3>isContainer の子要素の振る舞い</h3>
				<p>
					@propetry
					が有効なブラウザでは、直下のalignfullはcontainer要素のさらに親コンテナを基準とした幅まで広がります。
				</p>
				<Box>
					<Container size='l' isFlow='s' hasGutter>
						<Text ta='c' lh='1'>
							<TipCode text='is--container:l' color='orange' />
						</Text>
						<LoremContent />
						<Box alignfull ta='c' bgc='pink:10%'>
							alignfull
						</Box>
						<Container size='s'>
							<Text ta='c' lh='1'>
								<TipCode text='is--container:s' color='orange' />
							</Text>
							<LoremContent />
							<Box alignfull ta='c' bgc='pink:10%'>
								alignfull
							</Box>
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
						<Box alignfull ta='c' bgc='pink:10%'>
							alignfull
						</Box>
					</Container>
					<Layer className='gutter-guide' mbs='0' />
				</Container>

				<h2>ContainerとConstrainedの入れ子</h2>
				<Layout isConstrained isFlow='s'>
					<Text ta='c' lh='1'>
						<TipCode text='constrained' />
					</Text>
					<LoremContent />
					<Box alignfull> alignfull</Box>
					<Box alignwide> alignwide</Box>
					<Box bd className='alignscreen'>
						{' '}
						alignscreen
					</Box>
					<Container size='s' isFlow='s'>
						<Text ta='c' lh='1'>
							<TipCode text='is--container' color='orange' />
						</Text>
						<LoremContent />
						<Box alignfull> alignfull</Box>
						<Box alignwide> alignwide</Box>
						<Box bd className='alignscreen'>
							{' '}
							alignscreen
						</Box>
					</Container>
				</Layout>
				<Container isFlow='s'>
					<Text ta='c' lh='1'>
						<TipCode text='is--container' color='orange' />
					</Text>
					<LoremContent />
					<Box alignfull> alignfull</Box>
					<Box alignwide> alignwide</Box>
					<Box bd className='alignscreen'>
						{' '}
						alignscreen
					</Box>
					<Layout isConstrained='s' isFlow='s'>
						<Text ta='c' lh='1'>
							<TipCode text='constrained:s' />
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
				<hr />
				<hr />
				<hr />
				<hr />
				<hr />

				<Spacer h={40} />
				<Container isFlow hasGutter isConstrained bgc='rgba(100,120,200,0.06)' size='s'>
					<Box>
						<code>isConstrained</code>
					</Box>
					<Box alignfull p='box:s' bgc='b300'>
						alignfull
					</Box>
					<Container size='l' bd={{ c: 'b400', w: '1px' }}>
						Container size:l
					</Container>
					<Container isFlow='s' isConstrained bgc='rgba(100,120,200,0.06)'>
						<Box>
							<code>isConstrained size:base</code>
						</Box>
						<Box alignfull p='box:s' bgc='b300'>
							alignfull
						</Box>
					</Container>

					<Container isFlow='s' bgc='rgba(200,120,00,0.06)'>
						<Box>
							<code>isConstrained size:base</code>
						</Box>
						<Box alignfull p='box:s' bgc='b300'>
							alignfull
						</Box>
					</Container>
					<Container>aaa</Container>
					<Box>...Contents...</Box>
					<Columns cols={[2, null, 3]} className='has:itemGuide'>
						<p>1</p>
						<p>2</p>
						<p>3</p>
					</Columns>
					<Container
						isFlow='s'
						isConstrained
						bgc='rgba(100,120,200,0.06)'
						// size='s'
					>
						<Box>
							<code>isConstrained</code>
						</Box>
						<Box alignfull p='box:s' bgc='b300'>
							alignfull
						</Box>
						<Columns cols={[2, null, 3]} className='has:itemGuide'>
							<p>1</p>
							<p>2</p>
							<p>3</p>
						</Columns>
					</Container>
					<Container
						isFlow='s'
						bgc='rgba(200,150,120,0.06)'
						// size='s'
					>
						<Box>
							<code>isContainer</code>
						</Box>
						<Box alignfull p='box:s' bgc='b300'>
							alignfull
						</Box>
						<Columns cols={[2, null, 3]} className='has:itemGuide'>
							<p>1</p>
							<p>2</p>
							<p>3</p>
						</Columns>
						<Box>...Contents...</Box>
					</Container>

					<Box className='alignscreen' p='box:s' bgc='pink:0.5' ta='c'>
						←← alignscreen →→
					</Box>
					<Box>...Contents...</Box>
				</Container>
				{/* </Container>
				<Box tag='aside'>sidebar</Box>
			</FluidFix> */}
				<hr />
				<hr />
				<h2>Divider</h2>
				<Box>
					<Spacer h={40} bgc='yellow' />
					<Box alignfull>
						<Divider type='line1' c='red' isFlip />
						<Box py={40} px={40}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
							necessitatibus expedita dignissimos explicabo quisquam eveniet
							architecto fugit perspiciatis reiciendis excepturi velit non pariatur
							blanditiis perferendis, dicta rem quod exercitationem odit.
						</Box>
						<Divider type='line1' c='red' />
					</Box>
					<Box alignfull>
						<Divider isAnimation='' type='line2' c='blue' isFlip />
						<Box py={40} px={40}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
							necessitatibus expedita dignissimos explicabo quisquam eveniet
							architecto fugit perspiciatis reiciendis excepturi velit non pariatur
							blanditiis perferendis, dicta rem quod exercitationem odit.
						</Box>
						<Divider isAnimation='' type='line2' c='blue' />
					</Box>
					<Box alignfull>
						<Divider isAnimation='' level={-3} type='line1' c='blue' isFlip />
						<Box py={40} px={40}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
							necessitatibus expedita dignissimos explicabo quisquam eveniet
							architecto fugit perspiciatis reiciendis excepturi velit non pariatur
							blanditiis perferendis, dicta rem quod exercitationem odit.
						</Box>
						<Divider isAnimation='' level={-3} type='line1' c='blue' />
					</Box>
					<Spacer h={40} bgc='yellow' />
					<Box alignfull>
						<Divider type='wave2' isAnimation level={3} c='green' isFlip />
						<Box isFlow py={70} px={40}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
							necessitatibus expedita dignissimos explicabo quisquam eveniet
							architecto fugit perspiciatis reiciendis excepturi velit non pariatur
							blanditiis perferendis, dicta rem quod exercitationem odit.
						</Box>
						<Divider type='wave1' isAnimation level={3} c='green' />
					</Box>
				</Box>
				<hr />
			</Layout>
		</>
	);
}
