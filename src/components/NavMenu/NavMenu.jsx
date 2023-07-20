import React from 'react';
import { Lism } from '../Lism';
// import classnames from 'classnames';

export default function NavMenu({ children, variant = 'box', ...props }) {
	return (
		<Lism tag='ul' blockClass='b--navMenu' p={0} data-variant={variant} {...props}>
			{children}
		</Lism>
	);
}
