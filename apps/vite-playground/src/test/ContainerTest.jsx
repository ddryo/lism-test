import { Box, Container, Columns, Spacer, Divider } from '@loos/lism-core';
import './container-test.scss';

export default function ContainerTest() {
	return (
		<>
			{/* <FluidFix fixW='240px' className='has:itemGuide' gap={40} hasGutter>
				<Container tag='main'> */}
			<Box>
				<Spacer h={40} bgc='yellow' />
				<Box alignfull>
					<Divider type='line1' c='red' isFlip />
					<Box py={40} px={40}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
						necessitatibus expedita dignissimos explicabo quisquam eveniet architecto
						fugit perspiciatis reiciendis excepturi velit non pariatur blanditiis
						perferendis, dicta rem quod exercitationem odit.
					</Box>
					<Divider type='line1' c='red' />
				</Box>
				<Box alignfull>
					<Divider isAnimation='' type='line2' c='blue' isFlip />
					<Box py={40} px={40}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
						necessitatibus expedita dignissimos explicabo quisquam eveniet architecto
						fugit perspiciatis reiciendis excepturi velit non pariatur blanditiis
						perferendis, dicta rem quod exercitationem odit.
					</Box>
					<Divider isAnimation='' type='line2' c='blue' />
				</Box>
				<Box alignfull>
					<Divider isAnimation='' level={-3} type='line1' c='blue' isFlip />
					<Box py={40} px={40}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
						necessitatibus expedita dignissimos explicabo quisquam eveniet architecto
						fugit perspiciatis reiciendis excepturi velit non pariatur blanditiis
						perferendis, dicta rem quod exercitationem odit.
					</Box>
					<Divider isAnimation='' level={-3} type='line1' c='blue' />
				</Box>
				<Spacer h={40} bgc='yellow' />
				<Box alignfull>
					<Divider type='wave2' isAnimation level={3} c='green' isFlip />
					<Box isFlow py={70} px={40}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
						necessitatibus expedita dignissimos explicabo quisquam eveniet architecto
						fugit perspiciatis reiciendis excepturi velit non pariatur blanditiis
						perferendis, dicta rem quod exercitationem odit.
					</Box>
					<Divider type='wave1' isAnimation level={3} c='green' />
				</Box>
			</Box>
			<hr />
			<hr />
			<Container isConstrained bd={{ c: 'blue', w: '4px' }}>
				<Box>サイズ普通</Box>
			</Container>
			<Container isConstrained='s' bd={{ c: 'blue', w: '4px' }}>
				<Box>isConstrained=s</Box>
				<Box bgc='b200'>
					<Container size='xs' isConstrained bd={{ c: 'blue', w: '4px' }}>
						<Box>30rem</Box>
					</Container>
				</Box>
			</Container>
			<Container isConstrained size='s' bd={{ c: 'blue', w: '4px' }}>
				<Box>isConstrained=s</Box>
			</Container>
			<hr />
			<Container bd={{ c: 'red', w: '4px' }}>
				<Box>サイズ普通</Box>
			</Container>
			<Container size='s' bd={{ c: 'red', w: '4px' }}>
				<Box>size=s</Box>
				<Box bgc='b200'>
					<Container size='20em' bd={{ c: 'red', w: '4px' }}>
						<Box>20rem</Box>
					</Container>
				</Box>
			</Container>
			<Container size='s' bd={{ c: 'red', w: '4px' }}>
				<Box>size=s</Box>
			</Container>
			<hr />
			<hr />
			<hr />
			<Box hasGutter>
				<Container isFlow bd={{ c: 'red', w: '4px' }} bgc='rgba(200,150,120,0.06)' size='s'>
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
					<Container
						isFlow='s'
						isConstrained
						bd={{ c: 'blue', w: '4px' }}
						bgc='rgba(100,120,200,0.06)'
						// size='s'
					>
						<Box>
							<code>isConstrained</code>
						</Box>
						<Box alignfull p='box:s' bgc='b300'>
							alignfull
						</Box>
						<Box>...Contents...</Box>
					</Container>
					<Container
						isFlow='s'
						bd={{ c: 'red', w: '4px' }}
						bgc='rgba(200,150,120,0.06)'
						// size='s'
					>
						<Box>
							<code>isContainer</code>
						</Box>
						<Box alignfull p='box:s' bgc='b300'>
							alignfull
						</Box>
						<Box>...Contents...</Box>
					</Container>
					<Box>...Contents...</Box>
				</Container>
			</Box>
			<Spacer h={40} />
			<Container
				isFlow
				hasGutter
				isConstrained
				bd={{ c: 'blue', w: '4px' }}
				bgc='rgba(100,120,200,0.06)'
				size='s'
			>
				<Box>
					<code>isConstrained</code>
				</Box>
				<Box alignfull p='box:s' bgc='b300'>
					alignfull
				</Box>
				<Container size='l' bd={{ c: 'b400', w: '1px' }}>
					Container size:l
				</Container>
				<Container
					isFlow='s'
					isConstrained
					bd={{ c: 'blue', w: '4px' }}
					bgc='rgba(100,120,200,0.06)'
				>
					<Box>
						<code>isConstrained size:base</code>
					</Box>
					<Box alignfull p='box:s' bgc='b300'>
						alignfull
					</Box>
				</Container>
				<Container
					isFlow='s'
					isConstrained
					bd={{ c: 'blue', w: '4px' }}
					bgc='rgba(100,120,200,0.06)'
					alignfull
				>
					<Box>
						<code>isConstrained size指定なし, alignfull</code>
					</Box>
				</Container>
				<Container
					isFlow='s'
					isConstrained
					bd={{ c: 'blue', w: '4px' }}
					bgc='rgba(100,120,200,0.06)'
					alignfull
				>
					<Box>
						<code>isConstrained size:base, alignfull</code>
					</Box>
				</Container>
				<Container
					isFlow='s'
					isConstrained
					bd={{ c: 'blue', w: '4px' }}
					bgc='rgba(100,120,200,0.06)'
					alignwide
				>
					<Box>
						<code>isConstrained size:base, alignwide</code>
					</Box>
				</Container>
				<Container isFlow='s' bd={{ c: 'red', w: '4px' }} bgc='rgba(200,120,00,0.06)'>
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
					bd={{ c: 'blue', w: '4px' }}
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
					bd={{ c: 'red', w: '4px' }}
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
		</>
	);
}
