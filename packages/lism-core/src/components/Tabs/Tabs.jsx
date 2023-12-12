import React from 'react';
import { Grid } from '../Grid';
import { Stack } from '../Flex';
import TabBtn from './TabBtn';
import TabList from './TabList';
import TabPanel from './TabPanel';
// import { TabContext } from './context';

// Tabs, TabList, TabBtn, TabPanel, TabPanels
//
export default function Tabs({
	lismClass = {},
	variant,
	type = 'border',
	isVertical,
	children,
	uuid,
	listProps = {},
	panelProps = {},
	defaultIndex,
	keepHeight,
	...props
}) {
	lismClass.c = 'c--tabs';
	if (variant) {
		lismClass.c += ` c--tabs--${variant}`;
	}
	// if (direction) {
	// 	lismClass.c += ` c--tabs--${direction}`;
	// }

	const tabData = [];

	// エディタ上での開閉状態を管理
	// const [actTab, setActTab] = useState(activeTab);

	// const theTabId = React.useId();
	const [activeIndex, setActiveIndex] = React.useState(defaultIndex || 0);
	// const [tabs, setTabs] = useState([]);
	// const [tabId, setTabId] = useState(customTabId || theTabId);
	const tabId = uuid || React.useId();

	// console.log('keepHeight', keepHeight);

	if (isVertical) {
		props.gt = 'side:s';
		panelProps = Object.assign({}, panelProps, { gcs: 2, grs: 1, ai: 's' });
		listProps = Object.assign({}, listProps, { as: Stack });
		tabData.push('vertical');
	} else {
		panelProps = Object.assign({}, panelProps, { gcs: 1, grs: 2 });
	}

	if (keepHeight) {
		tabData.push('keep-height');
	}

	// childrenからタブのラベルとパネルコンテンツを取得
	const items = [];
	const panels = [];

	React.Children.forEach(children, (child, index) => {
		// const label = child.props?.label || '';
		const childProps = child.props || {};
		const { label, ..._panelProps } = childProps;

		// console.log('child.props', child.props);

		const isActive = activeIndex === index;
		const controlId = `${tabId}-${index}`;

		// label を持っていれば、btn, panelを作成
		if (!label) return;

		items.push(
			<TabBtn
				key={controlId}
				isActive={isActive}
				onClick={() => setActiveIndex(index)}
				controlId={controlId}
			>
				{label}
			</TabBtn>
		);
		panels.push(
			<TabPanel
				key={controlId}
				id={controlId}
				isActive={isActive}
				{..._panelProps}
				{...panelProps}
			/>
		);
		// panels.push(React.cloneElement(child, { key: controlId, panelId: controlId, isActive }));
	});

	if (tabData.length) {
		console.log(props);
		props['data-tab'] = tabData.join(' ');
	}

	if (items.length === 0) {
		return (
			<Grid lismClass={lismClass} {...props}>
				{children}
			</Grid>
		);
	}
	return (
		<Grid lismClass={lismClass} {...props}>
			<TabList variant={type} {...listProps}>
				{items}
			</TabList>
			{panels}
		</Grid>
	);
}
