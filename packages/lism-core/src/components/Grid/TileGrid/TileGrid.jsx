import React from 'react';
import Grid from '../Grid';
// import classnames from 'classnames';

export default function TileGrid({ itemMinW, ...props }) {
	const theProps = {
		lismStyle: {},
		gap: 20, // 初期値
	};
	if (itemMinW) {
		theProps.lismStyle['--item--minW'] = itemMinW;
	}

	return <Grid lismClass='l--tileGrid' {...theProps} {...props} />;
}
