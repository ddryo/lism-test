import React from 'react';
import { Grid } from '../Grid';
// import classnames from 'classnames';

export default function TileGrid({ itemMinW, ...props }) {
	// const lismStyle = {};
	// if (itemMinW) lismStyle['--item--minW'] = itemMinW;

	// const clms = getLismMainProp(clm, { sm, md, lg, xl });
	const blockProps = {
		// lismClass: 'l--tileGrid',
		modifier: 'tile',
		gap: 20, // 初期値
		lismVar: itemMinW,
		// ismStyle={lismStyle}
	};

	// Grid
	return <Grid {...blockProps} {...props} />;
}
