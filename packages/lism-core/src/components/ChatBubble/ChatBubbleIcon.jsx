// import React from 'react';
import { Core } from '../Core';
import { Layouter } from '../Layouter';
import { Grid } from '../Grid';
import { Decorator } from '../Decorator';
// import { DecoBox } from '../DecoBox';
import { Avatar } from '../Avatar';
// import { MediaLayer } from '../Layer';

const DECORATOR_PROPS = {
	// chat: {
	// 	left: { box: { template: 'fix:l' }, body: {}, content: {}, deco: {} },
	// 	right: { box: { template: 'fix:r' }, deco: { flip: 'x' } },
	// },
	// think: {
	// 	left: { box: { template: 'fix:l' }, body: {}, content: {}, deco: {} },
	// 	right: { box: { template: 'fix:r' }, deco: { flip: 'x' } },
	// },
	// box: {
	// 	content: {
	// 		radius: 1,
	// 		p: 'box',
	// 	},
	// },
	left: {
		// rtl言語を考慮してleftも明示的にセット
		top: '0',
		right: '100%',
	},
	right: {
		top: '0',
		left: '100%',
	},
};

export default function ChatBubble({
	lismClass = {},
	// variant = 'chat',
	src = '',
	children,
	imgProps = {},
	...props
}) {
	lismClass.c = 'b--chat__icon';
	// if (variant) lismClass.c += ` b--chat__icon`;

	// loading? decode?
	const img = children || (
		<img
			src={src}
			alt=''
			width={60}
			height={60}
			loading='lazy'
			//decoding='async'
			{...imgProps}
		/>
	);
	return (
		<Avatar
			lismClass={lismClass}
			bgc='base'
			radius='99'
			gridItem={{ area: 'fix' }}
			aria-hidden='true'
			{...props}
		>
			{img}
		</Avatar>
	);
}
