import React from 'react';
import { Grid } from '../Grid';
// import classnames from 'classnames';

export default function TileGrid({ itemMinW, ...props }) {
	const lismStyle = {};
	if (itemMinW) lismStyle['--item--miw'] = itemMinW;

	// Grid
	return <Grid lismClass='l--tileGrid' lismStyle={lismStyle} {...props} />;
}
