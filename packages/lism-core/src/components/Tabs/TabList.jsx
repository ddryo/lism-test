// import React from 'react';
import { Flex } from '../Flex';

export default function TabList({ as, lismClass = {}, variant, ...props }) {
	const TabList = as || Flex;

	lismClass.c = 'c--tabList';
	if (variant) {
		lismClass.c += ` c--tabList--${variant}`;
	}

	return <TabList lismClass={lismClass} jc='s' role='tablist' {...props} />;
}
