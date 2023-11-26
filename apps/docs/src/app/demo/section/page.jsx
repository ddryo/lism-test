'use client';
import {
	Layouter,
	Spacer,
	Center,
	Frame,
	Text,
	Divider,
	Box,
	Stack,
	Container,
	Hero,
	HeroInner,
	HeroBody,
	HeroHeader,
	HeroFooter,
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
			<p>test...</p>
			リサイズ可能エリアです ↑
			<Center p={30} gap={30} h='25vh' bd ovy='auto'>
				<Text fz='l' fw='700'>
					Center自体に高さ設定してコンテンツがはみ出すとアウト。
				</Text>
				<p>Lorem ipsum...</p>
				<DammyText length='xl' />
				<DammyText length='xl' />
				<DammyText length='xl' />
			</Center>
			<Box bgc='pale' py={50} h='50vh' bd ovy='auto'>
				<Center gap={30} minH='100%'>
					<p>親に高さ設定 & ovy:auto, minH:100%を自身に設定すればスクロール時問題なし.</p>
					<DammyText length='xl' />
					<DammyText length='xl' />
				</Center>
			</Box>
			<Frame aspect='4/3' bgc='pale' bd>
				<Center size='cover' variant='y' gap={30} p='box'>
					<Text fz='l' fw='700'>
						size=cover
					</Text>
					<DammyText length='l' />
					{/* <DammyText length='xl' />
					<DammyText length='xl' />
					<DammyText length='xl' /> */}
				</Center>
			</Frame>
			<Box bgc='pale'>
				<Center size='content' p={20} bd>
					<Text fz='l' fw='700'>
						Center
					</Text>
				</Center>
			</Box>
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
					<p>Hero？？</p>
				</Box>
				<Divider shape='wave3' c='#fff' />
			</Layouter>
			<Spacer bg='stripe' h='60' />
			<Hero c='dimgray' bgc='whitesmoke' py={40}>
				<HeroInner>
					<HeroBody>
						<h3>見出し</h3>
						<DammyText />
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
					</HeroBody>
				</HeroInner>
			</Hero>
			{/* <Container isFlow isConstrained hasGutter> */}
			<p>...セクション外のコンテンツ...</p>
			<Hero c='dimgray' bgc='whitesmoke' py={40}>
				<HeroBody isConstrained='s'>
					<h3>見出し</h3>
					<DammyText />
					<DammyText length='m' />
				</HeroBody>
			</Hero>
			<p>...セクション外のコンテンツ...</p>
			{/* </Container> */}
			<Spacer bg='stripe' h='60' />
			<Hero c='dimgray' bgc='whitesmoke'>
				<HeroInner>
					<HeroHeader bd='guide'>
						<div>Header</div>
					</HeroHeader>
					<HeroBody py={40} bd='guide'>
						<h3>HeroHeader, HeroFooterの設置例</h3>
						<DammyText />
						<DammyText length='m' />
					</HeroBody>
					<HeroFooter bd='guide'>
						<div>Footer</div>
					</HeroFooter>
				</HeroInner>
			</Hero>
			<Spacer bg='stripe' h='60' />
			{/* <Demo.Preview resize alignfull> */}
			<Hero c='dimgray' bgc='whitesmoke' innerProps={{ gap: 40 }}>
				<HeroHeader py={20} isConstrained hasGutter bd='guide'>
					<div>Header</div>
				</HeroHeader>
				<HeroBody py={40} bd='guide'>
					<h3>Header, Footer内のコンテンツ幅をBodyに揃える例</h3>
					<DammyText />
					<DammyText length='m' />
				</HeroBody>
				<HeroFooter py={20} isConstrained hasGutter bd='guide'>
					<div>Footer</div>
				</HeroFooter>
			</Hero>
			{/* </Demo.Preview> */}
			<Spacer bg='stripe' h='60' />
			{/* `<HeroBody>` にも padding を付けれますが、その時は hasGutter を false にしないと内部のalignfullの幅がおかしくなることに注意してください。 */}
			<Spacer bg='stripe' h='60' />
			{/* <Demo.Title>`minH`で高さ指定。HeroBody の `isConstrained` を`false`にして内部のコンテンツも全幅に</Demo.Title> */}
			<Hero
				minH='50vh'
				c='white'
				media={{ src: '/img/demo-img.jpeg', alt: '', width: 960, height: 640 }}
				filter={{ blur: '4px', bgc: 'rgba(0,0,0,0.5)' }}
			>
				<HeroInner>
					<HeroBody hasGutter={false} isConstrained={false}>
						<DammyText length='l' />
						<DammyText length='l' />
						<DammyText length='l' />
					</HeroBody>
					<HeroFooter>
						<p>`minH`で高さ指定。HeroBody の `isConstrained` を`false`にして内部のコンテンツも全幅に</p>
					</HeroFooter>
				</HeroInner>
				<Divider shape='wave3' c='#fff' />
			</Hero>
			<Hero
				minH='50vh'
				c='white'
				media={{ src: '/img/demo-img.jpeg', alt: '', width: 960, height: 640 }}
				filter={{ blur: '4px', bgc: 'rgba(0,0,0,0.5)' }}
			>
				<Divider shape='wave3' c='#fff' isFlip />
				<HeroHeader>
					<p>HeroHeader</p>
				</HeroHeader>
				<HeroBody hasGutter={false} isConstrained={false} flexItem={{ grow: '1' }}>
					<DammyText length='l' />
					<DammyText length='l' />
					<DammyText length='l' />
				</HeroBody>
				<HeroFooter isFlex jc='flex-end'>
					<p>`minH`で高さ指定。HeroBody の `isConstrained` を`false`にして内部のコンテンツも全幅に</p>
				</HeroFooter>
				<Divider shape='wave3' c='#fff' />
			</Hero>
			<h2>フルスクリーンモード</h2>
			<Hero isFullScreen c='dimgray' bgc='whitesmoke'>
				<HeroInner>
					<HeroHeader bd='guide' p={20}>
						<p>HeroHeader</p>
					</HeroHeader>
					<HeroBody
					//alignSelf='start'
					>
						<h3>見出し</h3>
						<DammyText />
						<DammyText length='m' />
					</HeroBody>
					<HeroFooter bd='guide' p={20}>
						<p>HeroFooter</p>
					</HeroFooter>
				</HeroInner>
			</Hero>
			<h2>境界線の設定</h2>
			<p>...セクション外のコンテンツ...</p>
			<Hero
				minH='30em'
				filter={{ blur: '4px', bgc: 'rgba(0,0,0,0.5)' }}
				media={{ src: '/img/demo-img.jpeg', alt: '', width: 960, height: 640 }}
				divider={{
					top: { type: 'wave3', color: '#fff' },
					bottom: { type: 'wave3', color: '#fff' },
				}}
			>
				<HeroBody py={40} c='white' grow={1} as={Center}>
					{/* <Center size='cover'> */}
					<p>grow:1 と Centerの組み合わせ？</p>
					<DammyText length='l' />
					{/* </Center> */}
				</HeroBody>
			</Hero>
			<p>...セクション外のコンテンツ...</p>
			<Hero
				c='white'
				minH='30em'
				filter={{ blur: '4px', bgc: 'rgba(0,0,0,0.5)' }}
				media={{ src: '/img/demo-img.jpeg', alt: '', width: 960, height: 640 }}
				divider={{ bottom: { type: 'wave3', color: '#fff', isAnimation: true } }}
			>
				<HeroHeader bd='guide' p={20}>
					<p>HeroHeader</p>
				</HeroHeader>
				<HeroBody c='white'>
					<DammyText length='l' />
				</HeroBody>
			</Hero>
		</Layouter>
	);
}
