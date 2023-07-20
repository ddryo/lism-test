import React from 'react';
import { Lism } from '../Lism';
// import classnames from 'classnames';
// { bgc: 'gray.100' }
export default function NavMenuItem({
	children,
	component,
	p = 30,
	gap = 30,
	hover,
	href,
	...props
}) {
	// const Link = component || Lism;

	const linkProps = {
		href,
		blockClass: 'b--navMenu__link',
		isFlex: true,
		component,
		p,
		gap,
		hover,
		// is--flex -gap:30 -p:30 -hov:bgc:
	};
	if (undefined === component) {
		linkProps.tag = 'a';
	}

	return (
		<Lism tag='li' blockClass='b--navMenu__item' {...props}>
			<Lism {...linkProps}>{children}</Lism>
		</Lism>
	);
}
