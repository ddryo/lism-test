// import React from 'react';
import { Core } from '../Core';
import { getFooterProps } from './getProps';
export default function ChatFoot({ children, ...props }) {
	// {/* aria-label : "name の発言" ? */}
	return (
		<Core _lismClass={['c--chat__footer']} {...getFooterProps(props)}>
			{children}
		</Core>
	);
}
