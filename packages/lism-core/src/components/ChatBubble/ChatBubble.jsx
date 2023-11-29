// import React from 'react';
import { Core } from '../Core';
import { Layouter } from '../Layouter';
import { Grid } from '../Grid';
import { Decorator } from '../Decorator';
// import { DecoBox } from '../DecoBox';
import { Avatar } from '../Avatar';
// import { MediaLayer } from '../Layer';
import ChatBubbleName from './ChatBubbleName';
import ChatBubbleIcon from './ChatBubbleIcon';

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
	name,
	iconSrc,
	variant,
	direction = 'left',
	// nameProps = {},
	children,
	...props
}) {
	lismClass.c = `b--chat b--chat--${direction}`;
	if (variant) lismClass.c += ` b--chat--${variant}`;

	// let decorator = null;
	// const fxd = 'left' === direction ? null : 'row-reverse';

	let boxProps = {
		template: direction === 'left' ? 'fix:l' : 'fix:r',
		// ji: direction === 'left' ? 'start' : 'end',
	};

	// let namePropsDefault = {
	// 	fz: '2xs',
	// 	p: 10,
	// 	translate: '0 -100%',
	// };
	// nameProps = Object.assign(namePropsDefault, nameProps);

	// let gridTemplate = direction === 'left' ? 'fix:l' : 'fix:r';

	return (
		<Grid lismClass={lismClass} data-dir={direction} {...boxProps} {...props}>
			{/* aria-label : "name の発言" */}
			{name && <ChatBubbleName>{name}</ChatBubbleName>}
			{iconSrc && <ChatBubbleIcon src={iconSrc} />}
			{children}
		</Grid>
	);
}
