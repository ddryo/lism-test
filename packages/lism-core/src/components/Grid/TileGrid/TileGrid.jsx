// import React from 'react';
import Grid from '../Grid';
// import classnames from 'classnames';

export default function TileGrid({ lismStyle = {}, itemMinW, ...props }) {
	const gridProps = {
		_gridName: 'tileGrid',
		gap: 20, // 初期値
	};
	if (itemMinW) {
		lismStyle['--item--minW'] = itemMinW;
	}

	return <Grid {...gridProps} lismStyle={lismStyle} {...props} />;
}
