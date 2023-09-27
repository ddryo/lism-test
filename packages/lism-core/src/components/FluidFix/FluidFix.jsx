import React from 'react';
import { Core } from '../Core';
// import classnames from 'classnames';
// import { getLismProps } from '@/lib';
// import "./style.scss";

export default function FluidFix({ children, fixW, fluidMinW, fix = 'last', ...props }) {
	const lismStyle = {};
	if (undefined !== fluidMinW) {
		lismStyle['--fluid--miw'] = fluidMinW;
	}
	if (undefined !== fixW) {
		lismStyle['--fixW'] = fixW;
	}

	// const blockProps = {
	// 	// className,
	// 	// style,
	// 	// 'data-fix-mode': 'flex',
	// 	'data-fix': 'first' === fix ? 'first' : 'last', // 必ず first か last になるように,
	// 	// ...attrs,
	// };

	return (
		<Core
			lismClass='l--fluidFix'
			lismStyle={lismStyle}
			data-fix={'first' === fix ? 'first' : 'last'} // 必ず first か last になるように
			{...props}
		>
			{children}
		</Core>
	);
}
