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
	Columns,
} from '@lism/core';

const lismPoints = [
	{
		icon: null,
		title: 'レイアウトプリミティブ',
		desc: `
			WEBサイトでよく使われるデザイン要素を細分化したものをモジュール化し、大枠を組み立てます。
		`,
	},
	{
		icon: null,
		title: 'プリセットとユーティリティ',
		desc: `
			事前のプリセット定義と、それを活用したユーティリティクラスを活用します。
		`,
	},
	{
		icon: null,
		title: 'モダンCSSの活用',
		desc: `
			CSS変数などのモダンなCSSを積極的に活用することで、少量のCSSで柔軟なレイアウトを可能にしています。
		`,
	},
	{
		icon: null,
		title: 'HTML&CSSだけで完結',
		desc: 'Lismはあくまで設計理論。専用コンポーネントでそれを手軽に利用できるようにしていますが、生のHTMLコーディングにも活用できます。',
	},
	{
		icon: null,
		title: '高速な開発フロー',
		desc: `
			"90%をサクッとで作る"のに最適です。100% Lismだけで完結する必要はありません。
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
	return (
		<Box className='a--main' tag='main'>
			<Center isConstrained className='a--atf' minH='50vh' pY={40} bgc='whitesmoke' gap={20}>
				<Text tag='h1' fz='4xl'>
					Lism Web System
				</Text>
				<Flex mbs={60}>
					<Button href='/docs/getting-started'>Docs</Button>
					<Button href='/' variant='outline'>
						Github
					</Button>
				</Flex>
				<Text c='gray' fw='700' mbs={60}>
					レイアウトプリミティブ + ユーティリティベースの、WEB設計システム。
				</Text>
				<Text c='gray' fw='700'>
					サイトの骨組みを爆速構築するためのフレームワークです。
				</Text>
			</Center>
			{/* HTML&CSSだけでも完結できるシンプルな設計がベースにした */}
			<Box className='a--content' pY={40}>
				<Box className='a--article' tag='article'>
					<Box className='a--article__content' isFlow isConstrained hasGutter>
						{/* 特徴 */}
						<Columns cols={[2, 2, 3]}>
							{lismPoints.map((point, i) => {
								return (
									<Stack key={i}>
										<h3>{point.title}</h3>
										{/* <MarkDown del='\t'>{point.desc}</MarkDown> */}
									</Stack>
								);
							})}
						</Columns>

						<h2>About &quot;Lism&quot; ?</h2>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
