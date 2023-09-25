import React from 'react';
import { Lism } from '../Lism';
import { Grid } from '../Grid';
// import { Center } from '../Center';
// import { Text } from '../Text';
// import { Layer } from '../Layer';
// import { Decorator } from '../Decorator';

// import { Flex } from '../Flex';
// import { Avatar } from '../Avatar';
// import { MediaLayer } from '../Layer';

// const DECORATOR_PROPS = {
// 	// chat: {
// 	left: {
// 		// rtl言語を考慮してleftも明示的にセット
// 		top: 0,
// 		right: '100%',
// 	},
// 	right: {
// 		top: 0,
// 		left: '100%',
// 	},
// 	// },
// };

export default function ChatBubble({
	name,
	// img,
	variant = 'chat',
	direction = 'left',
	// contentProps = {},
	// avatarProps = {},
	children,
	...props
}) {
	// let decorators = null;
	// const fxd = 'left' === direction ? null : 'row-reverse';

	let chatBoxProps = {};
	// let _avatarProps = { radius: '99' };

	// let _contentProps = {
	// 	isFlow: true,
	// 	flowGap: 30,
	// 	radius: '-',
	// 	p: '-',
	// };
	if ('box' === variant) {
		chatBoxProps.gap = 0;
		// _contentProps.radius = 1;
		// _avatarProps.shadow = 1;
	}
	//  else {}

	return (
		<Grid
			blockClass='b--chatBubble'
			data-variant={variant}
			data-direction={direction}
			{...chatBoxProps}
			{...props}
		>
			{name && (
				<Lism blockClass='b--chatBubble__name' fz='2xs' p={10}>
					{name}
				</Lism>
			)}
			{children}
		</Grid>
	);
}