'use client';
import { Layouter, Text, Box, Tabs, TabItem, TabList, Tab, TabPanel, Spacer } from '@loos/lism-core';
import DammyText from '@/components/DammyText';
// import { FolderSimple } from '@phosphor-icons/react';
// import { ThumbsUp, SmileyXEyes } from '@phosphor-icons/react';

import './style.scss';

export default function ContainerTest() {
	return (
		<Layouter isFlow hasGutter py={50} isConstrained='s' alignfull id='demo-wrapper'>
			<p>test...</p>

			<p>Tabs → TabItem</p>
			<Tabs variant='line'>
				<TabItem label='title1'>
					<p>index:0</p>
					<DammyText />
				</TabItem>
				<TabItem label='title2'>
					<p>index:1</p>
					<DammyText length='l' />
				</TabItem>
			</Tabs>
			<Tabs variant='line' isVertical>
				<TabItem label='title1'>
					<p>index:0</p>
					<DammyText />
				</TabItem>
				<TabItem label='title2'>
					<p>index:1</p>
					<DammyText length='l' />
				</TabItem>
			</Tabs>
			<Spacer h={40} bg='stripe' />
			<Tabs
				variant='line'
				ji='center'
				// jc='center'
				// listProps={{ w: '100', jc: 'center' }}
			>
				<TabItem label='title1' isFlow p='50' bd>
					<p>index:0</p>
					<DammyText />
					<DammyText />
				</TabItem>
				<TabItem label='title2'>
					<p>index:1</p>
					<DammyText length='l' />
				</TabItem>
			</Tabs>

			<Spacer h={40} bg='stripe' />
			<Tabs variant='lifted' keepHeight defaultIndex={1}>
				<TabItem label='title1' isFlow='s'>
					<p>index:0</p>
					<DammyText />
				</TabItem>
				<TabItem label='title2' isFlow='s'>
					<p>index:1</p>
					<DammyText />
					<DammyText length='l' />
				</TabItem>
			</Tabs>
			<Spacer h={40} bg='stripe' />
			<Tabs variant='box' keepHeight defaultIndex={1} ji='c'>
				<TabItem label='title1' isFlow='s'>
					<p>index:0</p>
					<DammyText />
				</TabItem>
				<TabItem label='title2' isFlow='s'>
					<p>index:1</p>
					<DammyText />
					<DammyText length='l' />
				</TabItem>
			</Tabs>
			<Spacer h={40} bg='stripe' />

			<Tabs variant='box' isVertical keepHeight defaultIndex={1}>
				<TabItem label='title1' isFlow='s'>
					<p>index:0</p>
					<DammyText />
				</TabItem>
				<TabItem label='title2' isFlow='s'>
					<p>index:1</p>
					<DammyText />
					<DammyText length='l' />
				</TabItem>
			</Tabs>

			<Tabs variant='box' isVertical defaultIndex={1} ai='s'>
				<TabItem label='title1' isFlow='s'>
					<p>index:0</p>
					<DammyText />
				</TabItem>
				<TabItem label='title2' isFlow='s'>
					<p>index:1</p>
					<DammyText />
					<DammyText length='l' />
				</TabItem>
			</Tabs>

			<p>TabList, Tab, TabPanel を手動配置</p>
			<Tabs defaultIndex={0}>
				<TabList>
					<Tab index={0}>tab1</Tab>
					<Tab index={1}>tab2</Tab>
				</TabList>
				<TabPanel index={0}>
					<DammyText />
				</TabPanel>
				<TabPanel index={1}>
					<DammyText length='l' />
				</TabPanel>
			</Tabs>
		</Layouter>
	);
}
