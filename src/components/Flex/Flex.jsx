import React from 'react';
import { getCommonProps } from '../../lib';

export default function Flex({ as, children, modifier, ...props }) {
	const { className, style, attrs } = getCommonProps(props, {
		lismClass: 'l--flex',
		lismModifier: modifier && 'l--flex--' + modifier,
		useFlexProps: true,
	});

	// --fxw:, --fxd:, クラスを削除する

	const blockProps = {
		className,
		style,
		...attrs,
	};

	const Flex = as || 'div';
	return <Flex {...blockProps}>{children}</Flex>;
}
