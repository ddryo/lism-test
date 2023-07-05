import React from 'react';
// import classnames from 'classnames';
// import { Flex } from '../Box';
import { getCommonProps } from '../../lib';
// import "./style.scss";

export default function SideFix({ children, fixWidth, fluidMiw, fix = 'last', ...props }) {
	const { className, style, attrs } = getCommonProps(props, {
		lismClass: 'l--sideFix',
		isFlex: true,
		fxw: 'wrap',
	});

	if (undefined !== fluidMiw) {
		style['--fluid--miw'] = fluidMiw;
	}
	if (undefined !== fixWidth) {
		style['--fix--w'] = fixWidth;
	}

	const blockProps = {
		className,
		style,
		'data-fix': 'first' === fix ? 'first' : 'last', // 必ず first か last になるように,
		...attrs,
	};

	return <div {...blockProps}>{children}</div>;
}
