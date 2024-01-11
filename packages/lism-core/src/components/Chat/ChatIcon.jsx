// import React from 'react';

import { Avatar } from '../Avatar';

export default function ChatIcon({ lismClass = {}, ...props }) {
	lismClass.c = 'c--chat__icon';

	// 親から渡されるが、使わない
	delete props.context;

	return (
		<Avatar
			lismClass={lismClass}
			bgc='base'
			bdrs='full'
			aria-hidden='true'
			alt=''
			width={60}
			height={60}
			{...props}
		/>
	);
}
