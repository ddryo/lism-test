import { Layouter, Spacer, Center, Text, Divider, Hero, HeroContent, MediaLayer, FilterLayer } from '@loos/lism-core';
import DammyText from '@/components/DammyText';

// import './style.scss';

export default function ContainerTest() {
	return (
		<Layouter isFlow hasGutter py={50} isConstrained='s' alignfull id='demo-wrapper'>
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
			<Spacer bg='stripe' h='60' />
			<Hero minH='70vh' bd='guide' p='5' gap='5'>
				<HeroContent type='top' p='em5' bd='guide'>
					<p>top</p>
				</HeroContent>
				<HeroContent grow='1' bd='guide'>
					<Text fw='bold' fz='xl'>
						DEMO 7
					</Text>
					<DammyText length='l' />
				</HeroContent>
				<HeroContent type='bottom' p='em5' bd='guide'>
					<p>bottom</p>
				</HeroContent>
			</Hero>
			{/* <Hero bd minH='70vh'>
				<Divider shape='line2' c='#fff' isFlip />
				<HeroContent type='top' p='em5' bd='guide'>
					<p>type:top</p>
				</HeroContent>
				<HeroContent grow='1' bd>
					<Layer bgc='blue:.2' inset='0' hasGutter isConstrained='s'>
						<Grid ac='c' ji='e' h='100%'>
							<Text fw='bold' fz='xl'>
								DEMO 07 Layerパターン
							</Text>
							<DammyText length='l' />
						</Grid>
					</Layer>
				</HeroContent>
				<HeroContent type='bottom' p='em5' bd='guide'>
					<p>type:bottom</p>
				</HeroContent>
				<Divider shape='line2' c='#fff' />
			</Hero> */}
			<Spacer bg='stripe' h='60' />
			<Hero bd='guide' minH='70vh'>
				<MediaLayer>
					<img src='/img/demo-img.jpeg' alt='' width={960} height={640} loading='lazy' />
				</MediaLayer>
				<FilterLayer bgc='black:0.2' />
				<HeroContent type='strech' hasGutter ai='center' bd='guide'>
					<Center minH='50%' isContainer='s' bg='glass' p='box' c='white' radius='2' gap={20}>
						<Text fw='bold' fz='xl'>
							DEMO 8
						</Text>
						<DammyText length='l' />
					</Center>
				</HeroContent>
			</Hero>
			<Spacer bg='stripe' h='60' />
			<Hero bd='guide' isFullScreen>
				{/* <MediaLayer>
					<img src='/img/demo-img.jpeg' alt='' width={960} height={640} loading='lazy' />
				</MediaLayer> */}
				<FilterLayer
					// bgc='black:0.2'
					// opacity='0.5'
					gradient={{
						angle: '35deg',
						colors: 'rgb(55 75 120) 0%, rgb(20 40 60) 100%',
					}}
				/>
				<HeroContent type='strech' hasGutter ai='center' bd='guide'>
					<Center minH='50%' isContainer='s' bg='glass' p='box' c='white' radius='2' gap={20}>
						<Text fw='bold' fz='xl'>
							DEMO 9 - isFullScreen
						</Text>
						<DammyText length='l' />
					</Center>
				</HeroContent>
			</Hero>
		</Layouter>
	);
}
