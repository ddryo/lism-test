import React from 'react';
// import { Lism } from '../Lism';
import { Center } from '../Center';
// import { getCommonProps } from '../../lib';
import { Icon } from './index';
import { getMaybeColorVar } from '../../lib';
// import classnames from 'classnames';

// align: full, wide, ''
export default function BlockIcon({ variant, color, icon, label, size = '2em', ...props }) {
	const lismStyle = {};
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

	if (color) lismStyle['--color'] = getMaybeColorVar(color);

	return (
		<Center {...blockProps} {...props} lismStyle={lismStyle}>
			<Icon {...iconProps} />
		</Center>
	);
}
