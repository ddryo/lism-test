import React from 'react';
// import { Core } from '../Core';
// import { Layouter } from '../Layouter';
import { Grid } from '../Grid';
// import { Decorator } from '../Decorator';
// import { DecoBox } from '../DecoBox';
// import { Avatar } from '../Avatar';
// import { MediaLayer } from '../Layer';
// import ChatBubbleName from './ChatBubbleName';
// import ChatBubbleIcon from './ChatBubbleIcon';

export default function ChatBubble({
	lismClass = {},
	lismState = [],
	// name,
	// iconSrc,
	variant = 'speak',
	direction = 'start',
	// nameProps = {},
	children,
	...props
}) {
	lismClass.c = `c--chat c--chat--${direction}`;
	if (variant) lismClass.c += ` c--chat--${variant}`;

	let boxProps;

	if (direction === 'start') {
		boxProps = {
			// template: 'fix:l',
			ji: 'start',
			ai: 'start',
		};
	} else {
		boxProps = {
			// template: 'fix:r',
			ji: 'end',
			ai: 'start',
		};
	}

	if (props.keycolor) {
		lismState.push(`has--mixcolor`);
	}

	return (
		<Grid
			lismClass={lismClass}
			lismState={lismState}
			data-dir={direction}
			{...boxProps}
			{...props}
		>
			{/* aria-label : "name の発言" */}
			{/* {name && <ChatBubbleName>{name}</ChatBubbleName>}
			{iconSrc && <ChatBubbleIcon src={iconSrc} />} */}
			{/* {children} */}
			{React.Children.map(children, (child) => {
				// 子コンポーネントにも direction, variant の情報を渡す
				return React.cloneElement(child, { context: { direction, variant } });
			})}
		</Grid>
	);
}
