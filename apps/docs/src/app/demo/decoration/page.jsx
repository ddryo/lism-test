'use client';
import {
	Box,
	Container,
	Layer,
	Frame,
	Layouter,
	Text,
	Badge,
	Note,
	Stack,
	Flow,
	Spacer,
	Cluster,
	Delimiter,
	Divider,
	Decorator,
	Grid,
	Core,
	Icon,
	Center,
	Reel,
	Flex,
	GridItem,
	FlexItem,
	Component,
} from '@loos/lism-core';
import DammyText from '@/components/DammyText';
import DecoBox from './DecoBox';
// import { ThumbsUp, SmileyXEyes } from '@phosphor-icons/react';

import './style.scss';

export default function ContainerTest() {
	return (
		<Layouter isFlow hasGutter py={50} isConstrained='s' alignfull id='demo-wrapper' _dir='rtl'>
			<p>test...</p>
			<h2>call</h2>
			<Box p='40' ml={[20, 30]} bgc='pale' maxW={['s', 'm']}>
				BOX
			</Box>
			<Box bd m={{ l: 20, b: 30 }} pos='r' l='2em' maxW='50%'>
				.......hohoho
			</Box>
			<Box bd p={{ x: 30, y: 40 }}>
				...
				<Decorator
					w='1em'
					h='1em'
					bgc='blue'
					bd='l'
					rotate='-35deg'
					// className='-trf:flipX'
					transformOrigin='right bottom'
				/>
			</Box>
			<Component name='callout' variant='left' as={Grid} ta='l'>
				<Decorator hasSize size='1.25em' bd='left' rotate='45deg' transformOrigin='left bottom' mr='auto' />
				<Box p='box:s'>
					<DammyText length='m' />
				</Box>
				<Decorator hasSize size='1.25em' bd='left' rotate='-45deg' transformOrigin='left top' mr='auto' />
			</Component>
			<Component name='callout' variant='right' as={Grid} ta='r'>
				<Decorator hasSize size='1.25em' bd='right' rotate='-45deg' transformOrigin='right bottom' ml='auto' />
				<Box p='box:s'>
					<DammyText length='s' />
				</Box>
				<Decorator hasSize size='1.25em' bd='right' rotate='45deg' transformOrigin='right top' ml='auto' />
			</Component>

			<Component name='callout' variant='top' as={Flex} passVariant='ltr' jc='center' ta='c'>
				<Decorator
					as={FlexItem}
					fxsh='0'
					hasSize
					size='1.25em'
					bd='top'
					rotate='-45deg'
					transformOrigin='right top'
				/>
				<FlexItem px='em10' py='em2'>
					<DammyText length='s' />
				</FlexItem>
				<Decorator
					as={FlexItem}
					fxsh='0'
					hasSize
					size='1.25em'
					bd='top'
					rotate='45deg'
					transformOrigin='left top'
				/>
			</Component>
			<Component name='callout' variant='bottom' as={Flex} passVariant='ltr' jc='center' ai='fe' ta='c'>
				<Decorator
					as={FlexItem}
					fxsh='0'
					hasSize
					size='1.25em'
					bd='bottom'
					rotate='45deg'
					transformOrigin='right bottom'
				/>
				<FlexItem px='em10' py='em2' fxg=''>
					<DammyText length='l' />
				</FlexItem>
				<Decorator
					as={FlexItem}
					fxsh='0'
					hasSize
					size='1.25em'
					bd='bottom'
					rotate='-45deg'
					transformOrigin='left bottom'
				/>
			</Component>

			<Spacer h={40} />
			<h2>balloon</h2>

			{/* boxProps: { grid: { gd: 'side:l', ai: 'center' } },
			bodyProps: { mr: 'auto' },
			decoratorProps: {
				rotate: '45deg',
				translate: '50%',
				left: '1px',
				clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%)',
			}, */}
			<Component
				name='balloon'
				variant='left'
				as={Grid}
				gt='side:l'
				ai='center'
				// c='base'
				provide={{ bdc: 'currentColor', bgc: 'base' }}
			>
				<GridItem p='box' radius={4} w='fit-content' bd consume='bdc bgc'>
					<DammyText />
				</GridItem>
				<Decorator
					as={GridItem}
					hasSize
					size='0.875em'
					bd
					consume='bdc bgc'
					ga='side'
					rotate='45deg'
					translate='50%'
					l='1px'
					clipPath='polygon(0% 0%, 0% 100%, 100% 100%)'
				/>
			</Component>

			<Component
				name='balloon'
				variant='right'
				as={Grid}
				gt='side:r'
				ai='center' // start, end
				// c='base'
				provide={{ bdc: 'currentColor', bgc: 'pale' }}
			>
				<GridItem p='box' radius={4} w='fit-content' bd consume='bdc bgc' ml='auto'>
					<DammyText length='l' />
				</GridItem>
				<Decorator
					as={GridItem}
					hasSize
					size='0.875em'
					bd
					consume='bdc bgc'
					ga='side'
					rotate='-45deg'
					translate='-50%'
					r='1px'
					my='1.5em'
					clipPath='polygon(0% 100%, 100% 0%, 100% 100%)'
				/>
			</Component>

			<Component
				name='balloon'
				variant='top'
				as={Grid}
				// gt='side:t'
				ji='center' // start, end
				// c='base'
				provide={{ bdc: 'base', bgc: 'pale', bdw: '2px' }}
			>
				<GridItem p='box' radius={4} w='fit-content' bd consume='bdc bgc bdw'>
					<DammyText length='l' />
				</GridItem>
				<Decorator
					as={GridItem}
					hasSize
					size='0.875em'
					bd
					consume='bdc bgc bdw'
					grs='1'
					rotate='45deg'
					translate='0 50%'
					t='var(--bdw)'
					mx='1.5em'
					clipPath='polygon(0% 0%, 0% 100%, 100% 0%)'
				/>
			</Component>

			<Component
				name='balloon'
				variant='bottom'
				as={Grid}
				// gt='side:b'
				ji='center' // start, end
				// c='base'
				provide={{ bdc: 'base', bgc: 'pale', bdw: '2px' }}
			>
				<GridItem p='box' radius={4} w='fit-content' bd consume='bdc bgc bdw'>
					<DammyText length='l' />
				</GridItem>
				<Decorator
					as={GridItem}
					hasSize
					size='0.875em'
					bd
					consume='bdc bgc bdw'
					grs='2'
					rotate='45deg'
					translate='0 -50%'
					b='var(--bdw)'
					mx='1.5em'
					clipPath='polygon(100% 0%, 0% 100%, 100% 100%)'
				/>
			</Component>
			<Spacer h={40} />
			<h2>pipipi</h2>
			<DecoBox variant='pipipi' subvariant='left'>
				<DammyText />
			</DecoBox>
			<DecoBox variant='pipipi' subvariant='right' bdc='blue'>
				<DammyText />
			</DecoBox>
			<Spacer h={40} />
			<h2>sticky</h2>
			<DecoBox variant='sticky'>
				<DammyText />
			</DecoBox>

			<DecoBox variant='sticky' data={{ bodyProps: { bdc: 'blue:70%', bgc: 'hsl(200 90% 95%)' } }}>
				<DammyText />
			</DecoBox>
			<Spacer h={40} />
			<h2>kakko</h2>
			<DecoBox variant='kakko' subvariant='lr'>
				<DammyText />
			</DecoBox>
			<DecoBox variant='kakko' subvariant='tb'>
				<DammyText />
			</DecoBox>
			<DecoBox variant='big-kakko' subvariant='lr' isFlow>
				<DammyText />
				<DammyText />
			</DecoBox>
			<DecoBox variant='big-kakko' subvariant='tb' isFlow>
				<DammyText />
				<DammyText />
			</DecoBox>
			<Spacer h={40} />
		</Layouter>
	);
}
