// import React from 'react';

import { Avatar } from '../Avatar';

export default function ChatAvatar(props) {
	return (
		<Avatar
			_lismClass={['c--chat__icon']}
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
