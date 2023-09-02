import React from 'react';
import { Lism } from '../Lism';

export default function Flow(props) {
	return <Lism lismClass='l--flow' {...props} />;
}

// export default function Flow({ as, children, modifier, ...props }) {
// 	const { className, style, attrs } = getCommonProps(props, {
// 		lismClass: 'l--flow',
// 		useFlexProps: true,
// 	});

// 	// --fxw:, --fxd:, クラスを削除する

// 	const blockProps = {
// 		className,
// 		style,
// 		...attrs,
// 	};

// 	const Flex = as || 'div';
// 	return <Flex {...blockProps}>{children}</Flex>;
// }
