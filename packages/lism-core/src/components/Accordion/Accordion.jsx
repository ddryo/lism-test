import React from 'react';
import setEvent from './setEvent';
import { getLismProps } from '../../lib';
// import { AccContext } from './context';

// duration: [s]
export default function Accordion({
	lismClass = {},
	lismStyle = {},
	children,
	duration,
	// hasDivider,
	...props
}) {
	const ref = React.useRef(null);

	React.useEffect(() => {
		console.log('acc useEffect!');
		if (!ref.current) return;
		return setEvent(ref.current);
	}, []);

	lismClass.c = 'c--accordion';
	if (duration) {
		lismStyle['--duration'] = duration; //`${duration}s`;
	}

	let lismState = [];
	if (props.hasDivider === true) {
		// props.hasDivider = 'B';
		lismState = ['has--divider:B'];
	}

	const lismProps = getLismProps(props, { lismClass, lismStyle, lismState });

	// const deliverState = {
	// 	trigger,
	// };

	return (
		<details ref={ref} {...lismProps}>
			{/* <AccContext.Provider value={deliverState}>{children}</AccContext.Provider> */}
			{children}
		</details>
	);
}
