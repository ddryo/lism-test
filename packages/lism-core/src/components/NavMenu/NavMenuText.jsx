// import React from 'react';
import { Flex } from '../Flex';

export default function NavMenuText({ lismClass = {}, hover = '-', children, ...props }) {
	lismClass.c = 'c--navMenu__text';
	let tag = 'span';

	if (props.href) {
		tag = 'a';
	}

	return (
		<Flex tag={tag} lismClass={lismClass} ai='center' hover={hover} isConsumer='p' {...props}>
			{children}
		</Flex>
	);
}
