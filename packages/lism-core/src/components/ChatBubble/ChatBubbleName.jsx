// import React from 'react';
import { Core } from '../Core';
// import { Layouter } from '../Layouter';
// import { Grid } from '../Grid';
// import { Decorator } from '../Decorator';
// // import { DecoBox } from '../DecoBox';
// import { Avatar } from '../Avatar';
// import { MediaLayer } from '../Layer';

export default function ChatBubble({
	lismClass = {},
	type = 'chat',
	direction = 'left',
	children,
	...props
}) {
	lismClass.c = 'b--chat__name';
	// if (type) lismClass.c += ` b--chat--${type}`;

	let defaultProps = {
		fz: '2xs',
		p: 10,
		translate: '0 -100%',
	};

	if ('box' === type) {
		if (direction === 'left') {
			defaultProps.mr = 'auto';
		} else {
			defaultProps.ml = 'auto';
		}
		// avatarProps = Object.assign({ radius: '1' }, avatarProps);
	}

	// {/* aria-label : "name の発言" ? */}
	return (
		<Core
			lismClass={lismClass}
			lh='xs'
			gridItem={{ area: 'nofix' }}
			{...defaultProps}
			{...props}
		>
			{children}
		</Core>
	);
}
