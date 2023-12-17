import React from 'react';
import { Grid } from '../Grid';
import { Stack } from '../Flex';
// import TabBtn from './TabBtn';
// import TabList from './TabList';
import TabChildren from './TabChildren';
import getTabProps from './getProps';

// import { TabContext } from './context';

// Tabs, TabList, TabBtn, TabPanel, TabPanels
//
export default function Tabs({
	lismClass = {},
	variant,
	type = 'border',
	// isVertical,
	// keepHeight,
	uuid,
	defaultIndex,
	children,
	...props
}) {
	lismClass.c = 'c--tabs';
	if (variant) {
		lismClass.c += ` c--tabs--${variant}`;
	}

	const tabId = uuid || React.useId();

	const { tabProps, listProps, panelProps } = getTabProps(props);
	if ('Stack' === listProps.as) {
		listProps.as = Stack;
	}

	return (
		<Grid lismClass={lismClass} {...tabProps}>
			<TabChildren
				type={type}
				tabId={tabId}
				defaultIndex={defaultIndex}
				listProps={listProps}
				panelProps={panelProps}
			>
				{children}
			</TabChildren>
		</Grid>
	);
}
