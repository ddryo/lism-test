import React from 'react';
import TabBtn from './TabBtn';
import TabList from './TabList';
import TabPanel from './TabPanel';

export default function TabChildren({
	children,
	type,
	tabId,
	defaultIndex,
	listProps = {},
	panelProps = {},
	// ...props
}) {
	const [activeIndex, setActiveIndex] = React.useState(defaultIndex || 0);
	const items = [];
	const panels = [];
	React.Children.forEach(children, (child, index) => {
		const childProps = child.props || {};
		const { label, ..._panelProps } = childProps;

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

	if (items.length === 0) {
		return children;
	}
	return (
		<>
			<TabList variant={type} {...listProps}>
				{items}
			</TabList>
			{panels}
		</>
	);
}
