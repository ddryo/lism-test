// import React from 'react';
import Flex from '../Flex';

export default function FluidFix({ lismStyle = {}, fixW, fluidMinW, fix = 'last', ...props }) {
	if (undefined !== fluidMinW) {
		lismStyle['--fluid--minW'] = fluidMinW;
	}
	if (undefined !== fixW) {
		lismStyle['--fixW'] = fixW;
	}

	return (
		<Flex
			_flexName='fluidFix'
			lismStyle={lismStyle}
			data-fix={'first' === fix ? 'first' : 'last'} // 必ず first か last になるように
			{...props}
		/>
	);
}
