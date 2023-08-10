import React from 'react';
// import { Lism } from '../Lism';
import { Center } from '../Center';
// import { getCommonProps } from '../../lib';
import { Icon } from './index';
import { getMaybeColorVar } from '../../lib';
// import classnames from 'classnames';

// align: full, wide, ''
export default function BlockIcon({
	variant,
	color,
	icon,
	label,
	size = '2em',
	width,
	height,
	style = {},
	...props
}) {
	const blockProps = {
		// lismClass: 'l--icon',
		blockClass: 'b--icon',
		'data-variant': variant,
	};

	const iconProps = {
		icon,
		label,
		size,
	};

	if (color) {
		style['--color'] = getMaybeColorVar(color);
	}
	// if (variant === 'full') {
	// 	style['--color'] = color;
	// } else if (variant === 'outline') {
	// }

	return (
		<Center {...blockProps} {...props} style={style}>
			<Icon {...iconProps} />
		</Center>
	);
}
