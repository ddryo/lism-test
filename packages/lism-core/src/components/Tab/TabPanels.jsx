import React from 'react';
// import { Lism } from '../Lism';
// import { TabContext } from './context';

// import classnames from 'classnames';
// import setEvent from "./setEvent";

// animationTime: [s]
export default function TabPanels({ children, tabId, activeIndex }) {
	// const { className, style, attrs } = getLismProps(props, { lismClass: 'l--tab' });

	// console.log('children', children);
	return (
		<div className='l--tab__panels'>
			{React.Children.map(children, (child, index) => {
				const isActive = activeIndex === index;
				const panelId = `${tabId}-${index}`;
				return React.cloneElement(child, { key: index, panelId, isActive });
			})}
		</div>
	);
}
