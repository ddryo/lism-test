// import React from 'react';
import { Core } from '../Core';
import { getNameProps } from './getProps';
export default function ChatName({ children, ...props }) {
	// {/* aria-label : "name の発言" ? */}
	return (
		<Core _lismClass={['c--chat__name']} {...getNameProps(props)}>
			{children}
		</Core>
	);
}
