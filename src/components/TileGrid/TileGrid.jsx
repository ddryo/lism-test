import React from 'react';
import { Grid } from '../Grid';
// import classnames from 'classnames';

export default function TileGrid({ children, itemMinW, style = {}, ...props }) {
	if (itemMinW) {
		style['--item--miw'] = itemMinW;
	}

	// Grid
	return (
		<Grid modifier='tile' style={style} {...props}>
			{children}
		</Grid>
	);
}
