import React from 'react';
import { Core } from '../Core';
// import { TabContext } from './context';

// Tabs, TabList, TabBtn, TabPanel, TabPanels
//
export default function Tabs({
	lismClass = {},
	children,
	// customTabId,
	// defaultIndex,
	// keepHeight,
	isActive,
	index, //controlId,
	...props
}) {
	lismClass.c = 'c--tab';

	return (
		<button
			role='tab'
			className='c--tab__button'
			aria-selected={isActive ? 'true' : 'false'}
			aria-controls={index}
			{...props}
			// onClick={() => setActiveIndex(index)}
		>
			{children}
		</button>
	);
}
