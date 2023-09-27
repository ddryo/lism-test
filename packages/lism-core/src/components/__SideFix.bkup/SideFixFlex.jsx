import React from 'react';
// import classnames from 'classnames';
import { getLismProps } from '@/lib';
// import "./style.scss";

export default function SideFixFlex({ children, fixW, fluidMinW, fix = 'last', ...props }) {
	const { className, style, attrs } = getLismProps(props, {
		lismClass: 'l--sideFix--flex',
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
		// 'data-fix-mode': 'flex',
		'data-fix': 'first' === fix ? 'first' : 'last', // 必ず first か last になるように,
		...attrs,
	};

	return <div {...blockProps}>{children}</div>;
}
