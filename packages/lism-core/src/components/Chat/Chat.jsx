import React from 'react';
// import { Core } from '../Core';
// import { Layouter } from '../Layouter';
import { Grid } from '../Grid';
// import { Decorator } from '../Decorator';
import ChatName from './ChatName';
import ChatAvatar from './ChatAvatar';
import ChatContent from './ChatContent';
import ChatFooter from './ChatFooter';
// import { ChatContext } from './context';
import { getProps } from './getProps';

export default function Chat({
	_lismClass = [],
	lismState = [],
	name,
	avatar,
	footer,
	variant = 'speak',
	direction = 'start',
	isFlow = 's',
	bodyProps = {},
	contentProps = {},
	children,
	...props
}) {
	_lismClass.push(`c--chat c--chat--${direction}`);
	if (variant) _lismClass.push(`c--chat--${variant}`);

	// const contextData = { direction, variant };
	return (
		// <ChatContext.Provider value={contextData}>
		<Grid
			_lismClass={_lismClass}
			lismState={lismState}
			data-dir={direction}
			{...getProps(direction, variant)}
			{...props}
		>
			{name && <ChatName>{name}</ChatName>}
			{avatar && <ChatAvatar src={avatar} />}
			<ChatContent
				isFlow={isFlow}
				variant={variant}
				direction={direction}
				contentProps={contentProps}
				{...bodyProps}
			>
				{children}
			</ChatContent>
			{footer && <ChatFooter>{footer}</ChatFooter>}
		</Grid>
		// </ChatContext.Provider>
	);
}
