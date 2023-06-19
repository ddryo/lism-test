import React from 'react';
// import { getCommonProps } from '../../lib';
// import classnames from 'classnames';
import { Grid } from '../index';

export default function AreaGrid({
	children,
	isBodyCenter,
	direction, // horizontal, vertical
	...props
}) {
	// const { classNames, styles, attrs } = getCommonProps(props);

	const blockProps = {
		'data-direction': direction || 'vertical',
		...props,
	};

	if (isBodyCenter) {
		blockProps['data-body'] = 'center';
	}

	return (
		<Grid modifier='area3' {...blockProps}>
			{children}
		</Grid>
	);
}
