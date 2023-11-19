'use client';
import { Layouter, Text, Box, Tab, TabItem, Spacer } from '@loos/lism-core';
import DammyText from '@/components/DammyText';
// import { FolderSimple } from '@phosphor-icons/react';
// import { ThumbsUp, SmileyXEyes } from '@phosphor-icons/react';

import './style.scss';

export default function ContainerTest() {
	return (
		<Layouter isFlow hasGutter py={50} isConstrained='s' alignfull id='demo-wrapper'>
			<p>test...</p>
			<p>Tab → TabItem</p>
			<Tab>
				<TabItem label='title1'>
					<p>index:0</p>
					<DammyText />
				</TabItem>
				<TabItem label='title2'>
					<p>index:1</p>
					<DammyText length='l' />
				</TabItem>
			</Tab>
			<Spacer h={40} bg='stripe' />
			<Tab keepHeight defaultIndex={1}>
				<TabItem label='title1' isFlow='s'>
					<p>index:0</p>
					<DammyText />
				</TabItem>
				<TabItem label='title2' isFlow='s'>
					<p>index:1</p>
					<DammyText />
					<DammyText length='l' />
				</TabItem>
			</Tab>
			<Spacer h={40} bg='stripe' />

			<p>Tabs → TabItem</p>
		</Layouter>
	);
}
