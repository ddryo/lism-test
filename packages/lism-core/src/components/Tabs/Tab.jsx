// import React from 'react';
import { Core } from '../Core';

export default function Tab({ lismClass = {}, isActive, controlId, ...props }) {
	lismClass.c = 'c--tabs_tab'; // c--tabBtn

	return (
		<Core
			tag='button'
			role='tab'
			lismClass={lismClass}
			lismState={['is--resetField']}
			// onClick={() => setActiveIndex(index)}
			aria-selected={isActive ? 'true' : 'false'}
			aria-controls={controlId}
			fz='s'
			lh='xs'
			{...props}
		/>
	);
}
