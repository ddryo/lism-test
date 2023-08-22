import React from 'react';
import { getCommonProps } from '../../lib';
// import { getLismClass } from '../../lib';

export default function Grid({ as, children, modifier, ...props }) {
	const { className, style, attrs } = getCommonProps(props, {
		lismClass: 'l--grid',
		lismModifier: modifier && 'l--grid--' + modifier,
		isGrid: true,
	});

	const blockProps = {
		className,
		style,
		...attrs,
	};

	// is--grid は削除したい

	const Grid = as || 'div';
	return <Grid {...blockProps}>{children}</Grid>;
}
