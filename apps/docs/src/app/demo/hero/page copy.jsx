import {
	Layouter,
	Spacer,
	Center,
	Grid,
	Frame,
	Layer,
	Text,
	Item,
	Divider,
	Box,
	Stack,
	Container,
	Hero,
	HeroContent,
	// Section,
	// SectionInner,
	// SectionBody,
	// SectionHeader,
	// SectionFooter,
	MediaLayer,
	FilterLayer,
} from '@loos/lism-core';
import DammyText from '@/components/DammyText';
// import { FolderSimple } from '@phosphor-icons/react';
// import { ThumbsUp, SmileyXEyes } from '@phosphor-icons/react';

import './style.scss';
/*
section
layer--media,filter
[shapeDivider]
section__inner
	[section__header]
	section__body
	[section__footer]
[shapeDivider]
*/
export default function ContainerTest() {
	return (
		<Layouter isFlow hasGutter py={50} isConstrained='s' alignfull id='demo-wrapper'>
			<p>親ブロックからbodyブロックを上・中央・下寄せをコントロールできるように。(marginを変える)</p>
			<p>初期展開ブロックを選べるようにする。内部gridパターンも。</p>
			<Hero bd>
				<Text fw='bold' fz='xl'>
					DEMO 01
				</Text>
				<DammyText length='l' />
			</Hero>{' '}
			<Spacer bg='stripe' h='60' />
			<Hero bd>
				<HeroContent type='center'>
					<Text fw='bold' fz='xl'>
						DEMO 02
					</Text>
					<DammyText length='l' />
				</HeroContent>
			</Hero>
			<Spacer bg='stripe' h='60' />
			<Hero bd minH='50vh'>
				<HeroContent type='top'>
					<p>type:top</p>
				</HeroContent>
				<HeroContent type='center'>
					<Text fw='bold' fz='xl'>
						DEMO 03
					</Text>
					<DammyText length='l' />
				</HeroContent>
				<HeroContent type='bottom'>
					<p>type:bottom</p>
				</HeroContent>
			</Hero>{' '}
			<Spacer bg='stripe' h='60' />
			<Hero bd minH='50vh'>
				<HeroContent type='top'>
					<Text fw='bold' fz='xl'>
						DEMO 04
					</Text>
					<DammyText length='l' />
				</HeroContent>
				<HeroContent type='bottom' alignSelf='flex-end'>
					<p>type:bottom</p>
				</HeroContent>
			</Hero>
			<Spacer bg='stripe' h='60' />
			<Hero bd c='white' minH='50vh'>
				<MediaLayer>
					<img src='/img/demo-img.jpeg' alt='' width={960} height={640} loading='lazy' />
				</MediaLayer>
				<FilterLayer blur='4px' bgc='black:.4' />
				<Divider shape='wave3' c='#fff' isFlip />
				<HeroContent type='center' isConstrained='s' bd='guide'>
					<Text fw='bold' fz='xl'>
						DEMO 05
					</Text>
					<DammyText length='l' />
				</HeroContent>
				<Divider shape='wave3' c='#fff' />
			</Hero>
			<Spacer bg='stripe' h='60' />
			<Hero bd c='white' minH='50vh' gap={30}>
				<MediaLayer>
					<img src='/img/demo-img.jpeg' alt='' width={960} height={640} loading='lazy' />
				</MediaLayer>
				<FilterLayer blur='4px' bgc='black:.4' />
				<Divider shape='line2' c='#fff' isFlip />
				<HeroContent type='top' p='em5' bd='guide'>
					<p>type:top</p>
				</HeroContent>
				<HeroContent type='center' isConstrained='s' bd='guide'>
					<Text fw='bold' fz='xl'>
						DEMO 06
					</Text>
					<DammyText length='l' />
				</HeroContent>
				<HeroContent type='bottom' p='em5' bd='guide'>
					<p>type:bottom</p>
				</HeroContent>
				<Divider shape='line2' c='#fff' />
			</Hero>
			<Spacer bg='stripe' h='60' />
			<Hero bd minH='70vh'>
				<Divider shape='line2' c='#fff' isFlip />
				<HeroContent type='top' p='em5' bd='guide'>
					<p>type:top</p>
				</HeroContent>
				<HeroContent grow='1' bd>
					<Layer bgc='blue:.2' inset='0' hasGutter isConstrained='s'>
						<Grid ac='c' ji='e' h='100%'>
							<Text fw='bold' fz='xl'>
								DEMO 07 grid
							</Text>
							<DammyText length='l' />
						</Grid>
					</Layer>
				</HeroContent>
				<HeroContent type='bottom' p='em5' bd='guide'>
					<p>type:bottom</p>
				</HeroContent>
				<Divider shape='line2' c='#fff' />
			</Hero>
			<Hero
				bd
				minH='70vh'
				gradient={{
					angle: '35deg',
					colors: 'rgb(154 186 255) 0%, rgb(190 220 250) 99%, rgb(190 247 250) 100%',
				}}
			>
				<Divider shape='line2' c='#fff' isFlip />
				<HeroContent type='top' p='em5' bd='guide'>
					<p>
						HeroContentをfxg:1で、かつgridにしてac:strechにすると、内部要素にheightが%でつかえるようになる。
					</p>
				</HeroContent>
				{/* <HeroContent as={Grid} grow='1' ac='stretch' ai='center' bd isConstrained='s'>
					<Layouter bd h='100%' isContainer='s'>
						<Text fw='bold' fz='xl'>
							HeroContent.gridがisConstrained
						</Text>
						<DammyText length='l' />
					</Layouter>
				</HeroContent> */}
				<HeroContent as={Grid} grow='1' ac='stretch' ai='center' bd isContainer='s'>
					<Center bd h='50%'>
						<Text fw='bold' fz='xl'>
							HeroContent.grid直下要素がisContainer
						</Text>
						<DammyText length='l' />
					</Center>
				</HeroContent>
				{/* <HeroContent as={Grid} grow='1' ac='stretch' ai='center' bd isConstrained='s'>
					<Center bd minH='50%' p={40}>
						<Text fw='bold' fz='xl'>
							DEMO 07 grid
						</Text>
						<DammyText length='l' />
					</Center>
				</HeroContent> */}
				{/* <HeroContent type='bottom' p='em5' bd='guide'>
					<p>type:bottom</p>
				</HeroContent> */}
				<Divider shape='line2' c='#fff' />
			</Hero>
			{/* <Stack bd minH='70vh' bgc='b200' alignfull>
				<Divider shape='line2' c='#fff' isFlip />
				<Layouter minH='inherit' as={Stack} grow='1' ac='c' jc='e' bd>
					<Layouter maxW='s' hasGutter>
						<Text fw='bold' fz='xl'>
							DEMO 07 grid
						</Text>
						<DammyText length='l' />
					</Layouter>
				</Layouter>

				<Divider shape='line2' c='#fff' />
			</Stack> */}
			<Spacer bg='stripe' h='60' />
			<Stack minH='40em' hasLayer alignfull c='white'>
				<MediaLayer z={-1}>
					<img src='/img/demo-img.jpeg' alt='' width={960} height={640} loading='lazy' />
				</MediaLayer>
				<FilterLayer z={-1} blur='4px' bgc='black:.5' />
				<Divider shape='wave3' c='#fff' isFlip />
				<Box
					bd='guide'
					p={20} //</Grid>gridItem={{}}
				>
					<p>SectionHeader</p>
				</Box>
				<Item bd isConstrained='s' my='auto' py={50}>
					<p>bodyのmYをautoにするだけ</p>
					<DammyText length='l' />
				</Item>
				<Box bd='guide' p={20}>
					<p>Footer content</p>
				</Box>
				<Divider shape='wave3' c='#fff' />
			</Stack>
			<Spacer bg='stripe' h='60' />
			<Stack minH='40em' hasLayer alignfull c='white'>
				<MediaLayer z={-1}>
					<img src='/img/demo-img.jpeg' alt='' width={960} height={640} loading='lazy' />
				</MediaLayer>
				<FilterLayer z={-1} blur='4px' bgc='rgba(0,0,0,0.5)' />
				<Divider shape='wave3' c='#fff' isFlip />
				<Box bd='guide' p={20} mb='auto'>
					<p>SectionHeader</p>
				</Box>
				<Box bd='guide' p={20} mt='auto'>
					<p>Footer content</p>
				</Box>
				<Divider shape='wave3' c='#fff' />
			</Stack>
			<Spacer bg='stripe' h='60' />
			<Stack bgc='b200' minH='40em' alignfull>
				<Divider shape='wave3' c='#fff' isFlip />
				<Box bd='guide' p={20}>
					<p>SectionHeader</p>
				</Box>
				<Item
					bd
					// h='100%'
					// isConstrained='s'
					// my='auto'
					// mt='auto'
					hasGutter
					py={50}
					className='-fxg:1'
					// alignSelf='flex-end'
					// justifySelf='flex-end'
					as={Grid}
					// grid={{
					// 	//rows: 'auto'

					// }}
					ac='start'
				>
					<Item
						bd='guide' //alignSelf='start' justifySelf='end'
					>
						<p>fxgrowを1にすると、height:100%的な挙動になる</p>
					</Item>
					<Item
						bd='guide' //alignSelf='end'
					>
						<p>fxgrowを1にすると、height:100%的な挙動になる</p>
						<DammyText length='l' />
					</Item>
				</Item>
				<Box
					bd='guide'
					p={20} //</Grid>gridItem={{}}
				>
					<p>Footer content</p>
				</Box>
				<Divider shape='wave3' c='#fff' />
			</Stack>
			<Spacer bg='stripe' h='60' />
			<Stack bgc='b200' minH='40em' hasLayer alignfull>
				{/* <MediaLayer z={-1}>
					<img src='/img/demo-img.jpeg' alt='' width={960} height={640} loading='lazy' />
				</MediaLayer>
				<FilterLayer z={-1} blur='4px' bgc='rgba(0,0,0,0.5)' /> */}
				{/* <Divider shape='wave3' c='#fff' /> */}
				<Box
					bd='guide'
					p={20} //</Grid>gridItem={{}}
				>
					<p>SectionHeader</p>
				</Box>
				<Item
					isConstrained='s'
					// my='auto'
					// mb='auto'
					className='-fxg:1'
					justifySelf='center'
				>
					<p>bodyのmYをautoにするだけ</p>
					<DammyText length='l' />
				</Item>
				<Divider shape='wave3' c='#fff' />
			</Stack>
			<Spacer bg='stripe' h='60' />
			<Grid bgc='b200' minH='40em' hasLayer alignfull>
				{/* <MediaLayer z={-1}>
					<img src='/img/demo-img.jpeg' alt='' width={960} height={640} loading='lazy' />
				</MediaLayer>
				<FilterLayer z={-1} blur='4px' bgc='rgba(0,0,0,0.5)' /> */}
				{/* <Divider shape='wave3' c='#fff' /> */}
				<Item
					bd='guide'
					p={20} //area='top'
					h='fit-content'
				>
					<p>SectionHeader</p>
				</Item>
				<Item
					isConstrained='s'
					// my='auto'
					// area='center'
					alighSelf='center'
					h='fit-content'
					// className='-fxg:1'
					// flexItem={{
					// 	grow: '1',
					// 	justifySelf: 'ceter',
					// }}
				>
					<p>gridでinnnerなしはきつい。gtr: auto 1fr auto;いるし...。</p>
					<DammyText length='l' />
				</Item>
				<Divider shape='wave3' c='#fff' gridItem={{ alignSelf: 'end' }} />
			</Grid>
			<p>test...</p>
			<Layouter
				alignfull
				hasLayer
				gradient={{
					angle: '35deg',
					colors: 'rgb(154 186 255) 0%, rgb(190 220 250) 99%, rgb(190 247 250) 100%',
				}}
			>
				<MediaLayer z={-1}>
					<img src='/img/demo-img.jpeg' alt='' width={960} height={640} loading='lazy' />
				</MediaLayer>
				<Spacer h='em20' />
				<Box className='sectionBody' py='60' hasGutter isConstrained>
					<p>Section？？</p>
				</Box>
				<Divider shape='wave3' c='#fff' />
			</Layouter>
		</Layouter>
	);
}
