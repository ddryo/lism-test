// import React from 'react';
import { Avatar } from '../Avatar';

export default function ChatAvatar({ img, ...props }) {
	return (
		<Avatar blockClass='b--chatBubble__icon' radius='99' {...props}>
			{img}
		</Avatar>
	);
}
