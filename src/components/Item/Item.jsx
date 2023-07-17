import React from 'react';
import { Lism } from '../Lism';
// import classnames from 'classnames';

export function Item({ children, component, ...props }) {
	const Comp = component || Lism;
	return (
		<Comp isItem {...props}>
			{children}
		</Comp>
	);
}
