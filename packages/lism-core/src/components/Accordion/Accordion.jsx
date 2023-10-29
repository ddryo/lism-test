import React from 'react';
import setEvent from './setEvent';
import { getLismProps } from '../../lib';
// import { AccContext } from './context';

// import classnames from 'classnames';

// duration: [s]
export default function Accordion({
	lismClass = {},
	children,
	// trigger = 'header',
	duration,
	...props
}) {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (!ref.current) return;
		return setEvent(ref.current);
	}, []);

	lismClass.c = 'c--accordion';
	const { className, style, attrs } = getLismProps(props, { lismClass });
	const blockProps = {
		ref,
		className,
		// 'data-trigger': trigger,
	};

	if (duration) {
		style['--duration'] = duration; //`${duration}s`;
	}

	// const deliverState = {
	// 	trigger,
	// };
	return (
		<details {...blockProps} style={style} {...attrs}>
			{/* <AccContext.Provider value={deliverState}>{children}</AccContext.Provider> */}
			{children}
		</details>
	);
}
