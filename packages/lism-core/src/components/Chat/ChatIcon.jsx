// import React from 'react';

import { Avatar } from '../Avatar';

export default function ChatIcon({
	lismClass = {},
	context, // 親から渡される
	src = '',
	children,
	imgProps = {},
	...props
}) {
	lismClass.c = 'c--chat__icon';

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
			aria-hidden='true'
			// bd='-'
			{...props}
		>
			{img}
		</Avatar>
	);
}
