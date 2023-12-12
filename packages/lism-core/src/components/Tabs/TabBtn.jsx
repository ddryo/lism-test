// import React from 'react';
import { Core } from '../Core';

export default function TabBtn({ lismClass = {}, isActive, controlId, ...props }) {
	lismClass.c = 'c--tab__button';

	return (
		<Core
			tag='button'
			role='tab'
			lismClass={lismClass}
			className='btn--reset'
			// onClick={() => setActiveIndex(index)}
			aria-selected={isActive ? 'true' : 'false'}
			aria-controls={controlId}
			fz='s'
			lh='xs'
			{...props}
		/>
	);
}
