import React from 'react';
import { Grid } from '../Grid';
// import classnames from 'classnames';

export default function TileGrid({ itemMinW, style = {}, ...props }) {
	if (itemMinW) {
		style['--item--miw'] = itemMinW;
	}

	// Grid
	return <Grid lismClass='l--tileGrid' style={style} {...props} />;
}
