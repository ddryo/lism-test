import React from 'react';
import { Lism } from '../Lism';
// import { TabContext } from './context';
// import classnames from 'classnames';

// animationTime: [s]
export default function Tab({
	// panels,
	// items,
	children,
	customTabId,
	defaultIndex,
	keepHeight,
	...props
}) {
	// const { className, style, attrs } = getCommonProps(props, { lismClass: 'l--tab' });

	// エディタ上での開閉状態を管理
	// const [actTab, setActTab] = useState(activeTab);

	const theTabId = React.useId();
	const [activeIndex, setActiveIndex] = React.useState(defaultIndex || 0);
	// const [tabs, setTabs] = useState([]);
	// const [tabId, setTabId] = useState(customTabId || theTabId);
	const tabId = customTabId || theTabId;

	const blockProps = {
		...props,
		'data-keep-height': keepHeight ? '1' : undefined,
	};

	// childrenからタブのラベルとパネルコンテンツを取得

	const items = [];
	const panels = [];

	React.Children.forEach(children, (child, index) => {
		const lebel = child.props?.label || '';

		const isActive = activeIndex === index;
		const controlId = `${tabId}-${index}`;

		items.push(
			<button
				role='tab'
				// key={controlId}
				className='l--tab__button'
				onClick={() => setActiveIndex(index)}
				aria-selected={isActive ? 'true' : 'false'}
				aria-controls={controlId}
			>
				{lebel}
			</button>
		);
		panels.push(React.cloneElement(child, { panelId: controlId, isActive }));
	});

	return (
		<Lism lismClass='l--tab' {...blockProps}>
			<div className='l--tab__list' role='tablist'>
				{items}
			</div>
			<div className='l--tab__panels'>{panels}</div>
		</Lism>
	);
}
