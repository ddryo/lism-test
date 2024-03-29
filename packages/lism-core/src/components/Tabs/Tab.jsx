import React from 'react';
import { Core } from '../Core';
import { TabContext } from './context';

export default function Tab({
	lismClass = {},
	index = 0,
	//isActive, controlId,
	...props
}) {
	lismClass.c = 'c--tabs_tab'; // c--tabBtn
	const { tabId, activeIndex, setActiveIndex } = React.useContext(TabContext);

	const isActive = activeIndex === index;
	const controlId = `${tabId}-${index}`;

	return (
		<Core
			tag='button'
			role='tab'
			lismClass={lismClass}
			lismState={['is--resetField']}
			onClick={() => setActiveIndex(index)}
			aria-selected={isActive ? 'true' : 'false'}
			aria-controls={controlId}
			fz='s'
			lh='xs'
			{...props}
		/>
	);
}
