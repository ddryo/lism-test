import React from 'react';
import { Lism } from '../Lism';
// import classnames from 'classnames';
export default function NavMenuItem({
	children,
	component,
	// padding系、gap系は、aタグ側に流す
	p = 30,
	pX,
	pY,
	pl,
	pr,
	pt,
	pb,
	gap = 30,
	hover,
	href,
	...props
}) {
	// const Link = component || Lism;

	// pX,pY 両方ある場合は p を削除
	if (undefined !== pX && undefined !== pY) {
		p = undefined;
	}

	const linkProps = {
		href,
		blockClass: 'b--navMenu__link',
		isFlex: true,
		component,
		p,
		pX,
		pY,
		pl,
		pr,
		pt,
		pb,
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
