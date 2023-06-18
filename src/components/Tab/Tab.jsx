import React, { useEffect, useState, useLayoutEffect, useContext, createContext } from 'react';
import { Box } from '../index';
import { separateStyleProps } from '../../lib';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
// import setEvent from "./setEvent";

const TabContext = createContext(null);

// animationTime: [s]
export const Tab = ({ children, tabId, defaultIndex, keepHeight, className, ...props }) => {
	const { classNames, styles, attrs } = separateStyleProps(props);

	// エディタ上での開閉状態を管理
	// const [actTab, setActTab] = useState(activeTab);

	const [activeIndex, setActiveIndex] = useState(defaultIndex || 0);
	const [tabs, setTabs] = useState([]);
	const [uuid, setUuid] = useState(null);

	// useEffext の中で uuid 生成しないと Warning: Prop `id` did not match. Server エラーがでる。
	useEffect(() => {
		setUuid(tabId || 'tab-' + uuidv4());
	}, [tabId]);

	const deliverState = {
		tabId: uuid,
		activeIndex,
		setTabs,
	};

	const blockProps = {
		className: classnames('l--tab', className, classNames),
		'data-keep-height': keepHeight ? '1' : undefined,
		style: styles,
		...attrs,
	};

	return (
		<div {...blockProps}>
			<TabContext.Provider value={deliverState}>
				<div className='l--tab__list' role='tablist'>
					{tabs.map(({ title, index }) => {
						const isActiveBtn = activeIndex === index;
						return (
							<button
								role='tab'
								key={index}
								className='l--tab__button'
								onClick={() => setActiveIndex(index)}
								aria-selected={isActiveBtn ? 'true' : 'false'}
								aria-controls={`${tabId}-${index}`}
							>
								{title}
							</button>
						);
					})}
				</div>
				<div className='l--tab__panels'>{children}</div>
			</TabContext.Provider>
		</div>
	);
};

export const TabItem = ({ title, index, children, ...attrs }) => {
	const { tabId, activeIndex, setTabs } = useContext(TabContext);

	useLayoutEffect(() => {
		// setTabsの中でtabsを参照できるので、内部で一気に処理する
		setTabs((tabs) => {
			// console.log("tabs", tabs);
			const alreadyExists = tabs.some((item) => item.index === index);

			// すでに追加されていれば何もせずそのまま返す
			if (alreadyExists) return tabs;

			// 新要素の場合は追加して返す
			return [...tabs, { title, index }];
		});
	}, [setTabs, title, index]);

	// 表示対象になっているタブのみコンテンツ描画
	return (
		<Box
			role='tabpanel'
			id={`${tabId}-${index}`}
			className='l--tab__panel'
			aria-hidden={activeIndex === index ? 'false' : 'true'}
			{...attrs}
		>
			{children}
		</Box>
	);
	// return index === activeIndex ? <>{children}</> : null;
};
