// see: https://github.com/shuding/nextra/blob/main/packages/nextra-theme-docs/src/mdx-components.tsx
// contexts内の依存ファイルは必要なものだけそのままコピペして持ってきている

// import cn from 'clsx';
import { useEffect, useRef } from 'react';
import { useSetActiveAnchor } from './contexts';
import { useIntersectionObserver, useSlugs } from './contexts/active-anchor';
import { Box, Text, Flex, Stack, Note, Alert } from '@lism/core';
import Demo from '@/components/Demo';
import Preview from '@/components/Preview';
// import { Callout, Tabs, Tab } from 'nextra/components';

const LOREM_TEXT = {
	ja: {
		xs: 'ロレムイプサムの座り雨。',
		s: 'ロレムイプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。',
		m: 'ロレムイプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。長年にわたり、私は学区と長寿であれば。',
		l: 'ロレムイプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。長年にわたり、私は学区と長寿であれば、そのような Liberroy, Foo の取り組み、我らのうち、Mulla Sunt の利点を提案したのなら。',
		xl: 'ロレムイプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。長年にわたり、私は学区と長寿であれば、そのような Liberroy, Foo の取り組み、我らのうち、Mulla Sunt の利点を提案したのなら。つまり、彼らはあなたの悩みに一般的な魂を癒しています。困難な必要性に少ないもの、それがコンテンツの比較です。あなたが選択的な彼女の事実、無意味な含有、便利な阻止と甘さ、誰かがもっと腐敗した残り物。提供する時間の生活、それで発明者が賢明です。',
	},
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
const DammyText = ({ length = 's', lang = 'en', ...props }) => {
	return <Text {...props}>{LOREM_TEXT[lang][length]}</Text>;
};

// Anchor links
function HeadingLink({ tag: Tag, context, children, id, ...props }) {
	const setActiveAnchor = useSetActiveAnchor();
	const slugs = useSlugs();
	const observer = useIntersectionObserver();
	const obRef = useRef(null);

	useEffect(() => {
		if (!id) return;
		const heading = obRef.current;
		if (!heading) return;
		slugs.set(heading, [id, (context.index += 1)]);
		observer?.observe(heading);

		return () => {
			observer?.disconnect();
			slugs.delete(heading);
			setActiveAnchor((f) => {
				const ret = { ...f };
				delete ret[id];
				return ret;
			});
		};
	}, [id, context, slugs, observer, setActiveAnchor]);

	return (
		<Tag className={`lsdoc--${Tag}`} {...props}>
			{children}

			{/* そのまま */}
			<span className='nx-absolute -nx-mt-20' id={id} ref={obRef} />
			<a href={`#${id}`} className='subheading-anchor' aria-label='Permalink for this section' />
		</Tag>
	);
}

export const getMyComponents = () => {
	const context = { index: 0 };
	return {
		h1: (props) => <h1 className='lsdoc--h1' {...props} />,
		h2: (props) => <HeadingLink tag='h2' context={context} {...props} />,
		h3: (props) => <HeadingLink tag='h3' context={context} {...props} />,
		h4: (props) => <HeadingLink tag='h4' context={context} {...props} />,
		h5: (props) => <HeadingLink tag='h5' context={context} {...props} />,
		h6: (props) => <HeadingLink tag='h6' context={context} {...props} />,

		p: ({ children }) => <p>{children}</p>,
		h: ({ children }) => <h1 className='lsdoc--h1'>{children}</h1>,
		ul: ({ children }) => <ul className='lsdoc--ul'>{children}</ul>,
		ol: ({ children }) => <ol className='lsdoc--ol'>{children}</ol>,
		li: ({ children }) => <li className='lsdoc--li'>{children}</li>,

		// nextra標準コンポーネント
		// Callout,
		// Tabs,
		// Tab,

		// Lism
		//lism
		Text,
		Alert,
		Note,
		Box,
		Flex,
		Stack,
		// Flex,
		// Stack,
		// lism-docs
		Demo,
		Preview,
		DammyText,
	};
};
