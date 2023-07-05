import React from 'react';
import setEvent from './setEvent';
import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

// duration: [s]
export default function Accordion({ children, duration = 0.3, ...props }) {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (!ref.current) return;
		return setEvent(ref.current, duration);
	}, [duration]);

	const { className, style, attrs } = getCommonProps(props, { lismClass: 'l--accordion' });
	const blockProps = {
		ref,
		className,
		style: {
			...style,
			'--duration': `${duration}s`,
		},
		...attrs,
	};
	return <details {...blockProps}>{children}</details>;
}
