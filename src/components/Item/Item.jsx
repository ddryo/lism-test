import React from 'react';
import { Box } from '../Box';
// import classnames from 'classnames';

export function Item({ children, as, ...props }) {
	const Item = as || Box;
	return (
		<Item useItemProps {...props}>
			{children}
		</Item>
	);
}
