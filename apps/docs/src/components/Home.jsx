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
			事前のプリセット定義と、それを活用したユーティリティクラスを活用します。
		`,
	},
	{
		icon: null,
		title: 'HTML&CSSだけで完結',
		desc: 'Lismはあくまで設計理論。専用コンポーネントでそれを手軽に利用できるようにしていますが、生のHTMLコーディングにも活用できます。',
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
			ビルド処理が必須ではない分、WordPressでの制作ベースにも採用可能です。専用テーマも用意しています。（予定）
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
					<Center isConstrained className='a--atf' minH='50vh' pY={40} bgc='pale' gap={40}>
						<Text tag='h1' fz='4xl' ff='mono' fw='light'>
							Lism UI
						</Text>
						<Flex mbs={40} gap={20}>
							<Button href='/docs/getting-started'>Docs</Button>
							<Button href='/' variant='outline'>
								Github
							</Button>
						</Flex>
						<Text c='pale' fw='700'>
							完成度8割までを爆速構築するためのWEB設計フレームワーク。
						</Text>
					</Center>
					{/* HTML&CSSだけでも完結できるシンプルな設計がベースにした */}
					<Box className='a--content' pY={40}>
						<Box className='a--article' tag='article'>
							<Box className='a--article__content' isFlow isConstrained hasGutter>
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
							</Box>
						</Box>
					</Box>
				</Box>
				{/*  */}
			</Preview>
		</>
	);
}
