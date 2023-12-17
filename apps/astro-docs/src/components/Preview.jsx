import React from 'react';
import { Layouter, Layer, Core, Tabs, TabItem } from '@loos/lism-core';

export const PreviewTitle = ({ children }) => {
	return (
		<div className='c--previewTitle l--flex -ai:c -gap:20 -mb:10'>
			<span className='__decorator l--center'>↓</span>
			<div className='c--previewTitle__text -fz:s -fx:1'>{children}</div>
		</div>
	);
};
