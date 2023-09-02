import React from 'react';
import { getCommonProps } from '../../lib';
// import { getLismClass } from '../../lib';

export default function Grid({ as, children, modifier, ...props }) {
	const { className, style, attrs } = getCommonProps(props, {
		lismClass: 'l--grid',
		lismModifier: modifier && 'l--grid--' + modifier,
		useGridProps: true,
	});

	// --gta:, --gtc:, --gtr: クラスを削除する

	const blockProps = {
		className,
		style,
		...attrs,
	};

	const Grid = as || 'div';
	return <Grid {...blockProps}>{children}</Grid>;
}
