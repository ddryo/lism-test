import React, { useEffect, useState } from 'react';
import { Lism } from '../Lism';
import { v4 as uuidv4 } from 'uuid';
import { TabContext } from './context';
import { theTabID, theActiveIndex } from './store';
import { useStore } from '@nanostores/react';

// import classnames from 'classnames';
// import setEvent from "./setEvent";

// animationTime: [s]
export default function Tab({ children, tabId, defaultIndex, keepHeight, ...props }) {
	// tabId = useStore(theTabID);
	const $theActiveIndex = useStore(theActiveIndex);
	const $theTabID = useStore(theTabID);

	// const { className, style, attrs } = getCommonProps(props, { lismClass: 'l--tab' });
	// エディタ上での開閉状態を管理
	// const [actTab, setActTab] = useState(activeTab);
	// const [activeIndex, setActiveIndex] = useState(defaultIndex || 0);
	const [tabs, setTabs] = useState([]);
	// const [uuid, setUuid] = useState(null);

	// useEffext の中で uuid 生成しないと Warning: Prop `id` did not match. Server エラーがでる。
	useEffect(() => {
		// setUuid(tabId || 'tab-' + uuidv4());
		theTabID.set(tabId || 'tab-' + uuidv4());
		theActiveIndex.set(defaultIndex || 0);
	}, []);

	console.log('$theTabID', $theTabID, $theActiveIndex, defaultIndex);

	const deliverState = {
		// tabId: uuid,
		// activeIndex,
		setTabs,
	};

	const blockProps = {
		...props,
		'data-keep-height': keepHeight ? '1' : undefined,
	};

	return (
		<Lism lismClass='l--tab' {...blockProps}>
			<TabContext.Provider value={deliverState}>
				<div className='l--tab__list' role='tablist'>
					{tabs.map(({ title, index }) => {
						const isActiveBtn = $theActiveIndex === index;
						return (
							<button
								role='tab'
								key={index}
								className='l--tab__button'
								onClick={() => theActiveIndex.set(index)}
								aria-selected={isActiveBtn ? 'true' : 'false'}
								aria-controls={`${$theTabID}-${index}`}
							>
								{title}
							</button>
						);
					})}
				</div>
				<div className='l--tab__panels'>{children}</div>
			</TabContext.Provider>
		</Lism>
	);
}
