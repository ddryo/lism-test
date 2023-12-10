// import React from 'react';
import Flex from './Flex';

export default function SideFlex({ lismStyle = {}, sideW, mainMinW, ...props }) {
	if (null != mainMinW) {
		lismStyle['--main--minW'] = mainMinW;
	}
	if (null != sideW) {
		lismStyle['--side--w'] = sideW;
	}

	return (
		<Flex
			variant='side'
			lismStyle={lismStyle}
			// data-fix={'first' === fix ? 'first' : 'last'} // 必ず first か last になるように
			{...props}
		/>
	);
}
