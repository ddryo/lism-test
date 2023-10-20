import {
	Box,
	Flex,
	Stack,
	Button,
	Center,
	Text,
	// LinkBox,
	// TileGrid,
	// LismProvider,
	// LismConsumer as Consumer,
	Container,
	Columns,
} from '@lism/core';
import Preview from '@/components/Preview';
import { GithubLogo, BookOpenText } from '@phosphor-icons/react';

// import { useConfig } from 'nextra-theme-docs';

const POINTS = [
	{
		icon: null,
		title: 'レイアウトプリミティブ',
		desc: `
			WEBサイトでよく使われるデザイン要素を細分化したものをモジュール化し、大枠を組み立てます。
		`,
	},
	{
		icon: null,
		title: 'ユーティリティファースト',
		desc: `
			事前にトークンとプリセット値を定義し、それらを流用します。主要なCSSプロパティにはユーティリティクラスも提供します。
		`,
	},
	{
		icon: null,
		title: 'あくまでHTML&CSS',
		desc: 'Lismはただの設計理論。専用コンポーネントでそれを手軽に利用できるようにしていますが、素のHTMLコーディングにも活用できます。',
	},
	{
		icon: null,
		title: '専用コンポーネント',
		desc: 'Lism設計に基づいたコンポーネントを使うことでより手軽なWEBサイト制作を可能にします。',
	},
	{
		icon: null,
		title: '軽量',
		desc: `
			全てのユーティリティクラスをインポートしても、軽量です。
		`,
	},
	{
		icon: null,
		title: 'WordPressフレンドリー',
		desc: `
			ビルド処理が必須ではないので、WordPressでの制作にも採用可能です。（専用テーマも準備中です）
		`,
	},
];

export default function Home() {
	// const { navbar: Nav } = useConfig();
	// console.log('navbar', Nav?.component);
	// const Navbar = Nav?.component;
	return (
		<>
			{/* <Navbar flatDirectories={[]} items={[]} /> */}

			<Preview>
				<Box className='a--main' tag='main'>
					<Container as={Center} isConstrained className='a--atf' minH='50vh' py={40} bgc='pale' gap={40}>
						<Text tag='h1' fz='4xl' ff='mono' fw='light'>
							Lism
						</Text>
						<Flex mbs={40} gap={20}>
							<Button href='/docs/concepts' leftIcon={BookOpenText}>
								Docs
							</Button>
							<Button
								leftIcon={GithubLogo}
								href='https://github.com/loos/lism'
								variant='outline'
								target='_blank'
								rel='noopener noreferrer'
							>
								Github
							</Button>
						</Flex>
						<Text c='pale' fw='700'>
							完成度8割までを爆速構築するためのWEB設計フレームワーク。
						</Text>
					</Container>
					{/* HTML&CSSだけでも完結できるシンプルな設計がベースにした */}
					<Box className='a--content' py={40}>
						<Box className='a--article' tag='article'>
							<Container className='a--article__content' isFlow isConstrained hasGutter>
								{/* 特徴 */}
								<Columns cols={[2, 2, 3]} gap={30}>
									{POINTS.map((point, i) => {
										return (
											<Stack key={i} gap={20} p='box' bd bdc='b200' radius='2' shadow='1'>
												<Text tag='h3' fz='l' lh='s'>
													{point.title}
												</Text>
												<p>{point.desc}</p>
											</Stack>
										);
									})}
								</Columns>

								<h2>About &quot;Lism&quot; ?</h2>
								<p>....</p>
								<p>
									ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio culpa at hic aliquid
									iste, neque reiciendis vero optio perspiciatis nesciunt, id autem pariatur esse.
									Reprehenderit corporis dolores perspiciatis quasi incidunt. Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Vitae sunt maiores consequuntur obcaecati magni
									nesciunt quos tenetur totam rerum quis quae veniam repellat amet ea, asperiores
									provident quibusdam enim perferendis!
								</p>
							</Container>
						</Box>
					</Box>
				</Box>
				{/*  */}
			</Preview>
		</>
	);
}
