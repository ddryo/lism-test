// import React from 'react';
import { Layouter } from '../Layouter';
import { GridItem } from '../Grid';

export default function TabPanel({ lismClass = {}, isActive, ...props }) {
	lismClass.c = 'c--tabs_panel';

	return (
		<GridItem
			as={Layouter}
			lismClass={lismClass}
			role='tabpanel'
			aria-hidden={isActive ? 'false' : 'true'}
			{...props}
		/>
	);
}
