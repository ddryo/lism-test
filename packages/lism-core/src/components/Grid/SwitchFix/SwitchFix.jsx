// import React from 'react';
import Grid from '../Grid';

export default function SwitchFix({
	lismStyle = {},
	fixW,
	fix = 'right down', // "left up"|"left down"|"right up"|"right down"
	breakPoint = 'sm',
	customBreakPoint,
	...props
}) {
	if (undefined !== fixW) {
		lismStyle['--fixW'] = fixW;
	}

	const blockProps = {
		'data-fix': fix,
		'data-bp': breakPoint,
	};

	if (customBreakPoint) {
		blockProps['data-break'] = 'custom';
		blockProps['data-custom-break'] = customBreakPoint;
	}

	return <Grid _gridName='switchFix' lismStyle={lismStyle} {...blockProps} {...props} />;
}
