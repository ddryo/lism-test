import React from 'react';
// import classnames from 'classnames';
import { getCommonProps } from '../../lib';
// import "./style.scss";

export default function SideFixFlex({ children, fixW, fluidMinW, fix = 'last', ...props }) {
	const { className, style, attrs } = getCommonProps(props, {
		lismClass: 'l--sideFix',
		isFlex: true,
		fxw: 'wrap',
	});

	if (undefined !== fluidMinW) {
		style['--fluid--miw'] = fluidMinW;
	}
	if (undefined !== fixW) {
		style['--fixW'] = fixW;
	}

	const blockProps = {
		className,
		style,
		'data-fix': 'first' === fix ? 'first' : 'last', // 必ず first か last になるように,
		...attrs,
	};

	return <div {...blockProps}>{children}</div>;
}
