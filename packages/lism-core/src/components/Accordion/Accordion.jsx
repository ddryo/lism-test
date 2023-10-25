import React from 'react';
import setEvent from './setEvent';
import { getLismProps } from '../../lib';
import { AccContext } from './context';

// import classnames from 'classnames';

// duration: [s]
export default function Accordion({ children, clickable, duration = 0.3, ...props }) {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (!ref.current) return;
		return setEvent(ref.current, duration, clickable || 'header');
	}, [duration]);

	const { className, style, attrs } = getLismProps(props, { lismClass: 'l--accordion' });
	const blockProps = {
		ref,
		className,
		'data-clickable': clickable,
		style: {
			...style,
			'--duration': `${duration}s`,
		},
		...attrs,
	};
	const deliverState = {
		clickable,
	};
	return (
		<details {...blockProps}>
			<AccContext.Provider value={deliverState}>{children}</AccContext.Provider>
		</details>
	);
}
