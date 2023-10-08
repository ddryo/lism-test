import React from 'react';
import Grid from '../Grid';

export default function AreaGrid({
	children,
	isBodyCenter,
	direction, // horizontal, vertical
	...props
}) {
	const blockProps = {
		'data-direction': direction || 'vertical',
		...props,
	};

	if (isBodyCenter) {
		blockProps['data-body'] = 'center';
	}

	return (
		<Grid _gridName='areaGrid' {...blockProps}>
			{children}
		</Grid>
	);
}
