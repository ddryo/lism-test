import React from 'react';
import { Grid } from '../Grid';
// import classnames from 'classnames';

export default function TileGrid({ children, itemMiw, style = {}, ...props }) {
	style = {
		...style,
		'--item--miw': itemMiw || null,
	};

	// Grid
	return (
		<Grid modifier='tile' {...props} style={style}>
			{children}
		</Grid>
	);
}
