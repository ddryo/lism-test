import { Box, Container, Columns, Spacer } from '@lism/core';

export default function ContanerTest() {
	return (
		<>
			{/* <FluidFix fixW='240px' className='has:itemGuide' gap={40} hasGutter>
				<Container tag='main'> */}
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
				<Container maxW='base' bd={{ c: 'b400', w: '1px' }}>
					Container maxW:base
				</Container>
				<Container
					isFlow='s'
					isConstrained
					bd={{ c: 'blue', w: '4px' }}
					bgc='rgba(100,120,200,0.06)'
					size='base'
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
					size='base'
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
					size='base'
					alignwide
				>
					<Box>
						<code>isConstrained size:base, alignwide</code>
					</Box>
				</Container>
				<Container
					isFlow='s'
					bd={{ c: 'red', w: '4px' }}
					bgc='rgba(200,120,00,0.06)'
					size='base'
				>
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

				<Box>...Contents...</Box>
			</Container>
			{/* </Container>
				<Box tag='aside'>sidebar</Box>
			</FluidFix> */}
		</>
	);
}
