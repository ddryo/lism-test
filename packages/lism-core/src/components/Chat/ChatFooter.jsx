// import React from 'react';
import { Core } from '../Core';

export default function ChatFoot({ lismClass = {}, children, ...props }) {
	lismClass.c = 'c--chat__footer';
	// if (type) lismClass.c += ` c--chat--${type}`;

	let defaultProps = {
		fz: '2xs',
		px: 'em5',
		py: 'em1',
		c: 'content-2',
	};

	// {/* aria-label : "name の発言" ? */}
	return (
		<Core lismClass={lismClass} lh='xs' {...defaultProps} {...props}>
			{children}
		</Core>
	);
}
