import { Text } from '@loos/lism-core';

const LOREM_TEXT = {
	ja: {
		xs: 'ロレムイプサムの座り雨。',
		s: 'ロレムイプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。',
		m: 'ロレムイプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。長年にわたり、私は学区と長寿であれば。',
		l: 'ロレムイプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。長年にわたり、私は学区と長寿であれば、そのような Liberroy, Foo の取り組み、我らのうち、Mulla Sunt の利点を提案したのなら。',
		xl: 'ロレムイプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。長年にわたり、私は学区と長寿であれば、そのような Liberroy, Foo の取り組み、我らのうち、Mulla Sunt の利点を提案したのなら。つまり、彼らはあなたの悩みに一般的な魂を癒しています。困難な必要性に少ないもの、それがコンテンツの比較です。あなたが選択的な彼女の事実、無意味な含有、便利な阻止と甘さ、誰かがもっと腐敗した残り物。提供する時間の生活、それで発明者が賢明です。',
		codes: (
			<>
				ロレムイプサムの座り雨、<a href='###'>トマ好き学習だったエリット</a>
				、しかし時と活力はそのような木々と楽しみ。長年にわたり、私は学区と長寿であれば、そのような
				<code>Liberroy, Foo</code> の取り組み。
			</>
		),
	},
	en: {
		xs: 'Lorem ipsum dolor sit amet.',
		s: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
		m: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, sed do eiusmod tempor. Non facere laudantium ex eos doloribus aut dolore nisi provident.',
		l: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, sed do eiusmod tempor. Non facere laudantium ex eos doloribus aut dolore nisi provident libero, eum nulla sunt, porro sed dicta. Impedit ullam eveniet obcaecati minima.',
		xl: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Amet ab commodi rerum voluptas iusto dolores numquam cum ratione, dignissimos quia recusandae assumenda magnam, molestiae necessitatibus quas minus, quod consectetur pariatur. Possimus eligendi ipsam rerum, nihil incidunt, commodi impedit eum blanditiis, quisquam maiores corrupti rem. Provident tempora vitae, quo at inventore est sapiente.',
		codes: (
			<>
				Lorem ipsum dolor sit amet. <a href='###'>consectetur adipisicing</a> elit, sed do
				eiusmod tempor. Non facere <code>Laudantium</code> ex eos doloribus aut dolore nisi
				provident.
			</>
		),
	},
	ar: {
		s: 'هذا نص وهمي أنا أكتب جمل ليس لها معنى معين.هذا نص وهمي أنا أكتب جمل ليس لها معنى معين.هذا نص وهمي أنا أكتب جمل ليس لها معنى معين.',
	},
};

const LOREM_CODE_TEXT = {
	ja: (
		<>
			ロレムイプサムの座り雨、<a href='###'>トマ好き学習</a>
			だったエリット、しかし時と活力はそのような木々と楽しみ。
		</>
	),
	en: {
		xs: 'Lorem ipsum dolor sit amet.',
		s: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
		m: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, sed do eiusmod tempor. Non facere laudantium ex eos doloribus aut dolore nisi provident.',
		l: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, sed do eiusmod tempor. Non facere laudantium ex eos doloribus aut dolore nisi provident libero, eum nulla sunt, porro sed dicta. Impedit ullam eveniet obcaecati minima.',
		xl: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Amet ab commodi rerum voluptas iusto dolores numquam cum ratione, dignissimos quia recusandae assumenda magnam, molestiae necessitatibus quas minus, quod consectetur pariatur. Possimus eligendi ipsam rerum, nihil incidunt, commodi impedit eum blanditiis, quisquam maiores corrupti rem. Provident tempora vitae, quo at inventore est sapiente.',
	},
	ar: {
		s: 'هذا نص وهمي أنا أكتب جمل ليس لها معنى معين.هذا نص وهمي أنا أكتب جمل ليس لها معنى معين.هذا نص وهمي أنا أكتب جمل ليس لها معنى معين.',
	},
};

// length: s, m, l
export default function DammyText({ length = 's', lang = 'en', ...props }) {
	return <Text {...props}>{LOREM_TEXT[lang][length]}</Text>;
}
