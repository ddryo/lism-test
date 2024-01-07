// import React from 'react';
import { Core } from '../Core';
// import { Layouter } from '../Layouter';
// import { Grid } from '../Grid';
// import { Decorator } from '../Decorator';
// // import { DecoBox } from '../DecoBox';
// import { Avatar } from '../Avatar';
// import { MediaLayer } from '../Layer';

export default function ChatFoot({
	lismClass = {},
	// context={}, // 親から渡される
	children,
	...props
}) {
	lismClass.c = 'c--chat__footer';
	// if (type) lismClass.c += ` c--chat--${type}`;

	let defaultProps = {
		fz: '2xs',
		px: 'em5',
		py: 'em1',
		c: 'pale',
	};

	// 親から渡されるが、使わない
	delete props.context;

	// {/* aria-label : "name の発言" ? */}
	return (
		<Core lismClass={lismClass} lh='xs' {...defaultProps} {...props}>
			{children}
		</Core>
	);
}
