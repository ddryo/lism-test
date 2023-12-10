// see: https://github.com/shuding/nextra/blob/main/packages/nextra-theme-docs/src/mdx-components.tsx
// contexts内の依存ファイルは必要なものだけそのままコピペして持ってきている

// import cn from 'clsx';

import { Box, Badge, Text, Flex, Stack, Note, Alert, TabItem } from '@loos/lism-core';
import Demo from '@/components/Demo';
import Preview from '@/components/Preview';
import Reference from '@/components/Reference';
import DammyText from '@/components/DammyText';
// import { Callout, Tabs, Tab } from 'nextra/components';

const MemoBadge = ({ children, ...props }) => {
	return (
		<Badge fz='11px' lh='1' p='10' variant='subtle' keycolor='orange' {...props}>
			{children}
		</Badge>
	);
};
const PropBadge = ({ type = 'attr', ...props }) => {
	let keycolor = 'blue';
	if (type === 'attr') {
		keycolor = 'green';
	} else if (type === 'cssvar') {
		keycolor = 'purple';
	}
	return <Badge fz='xs' lh='1' p='em2' m='em2' d='ib' variant='subtle' keycolor={keycolor} {...props} />;
};

export const getMyComponents = () => {
	return {
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
		Reference,
		MemoBadge,
		PropBadge,
		TabItem,
	};
};
