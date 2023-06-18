import React from 'react';
import classnames from 'classnames';
import setEvent from './setEvent';
import { separateStyleProps } from '../../lib';

// duration: [s]
export default function Accordion({ children, className, duration = 0.3, ...props }) {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (!ref.current) return;
		return setEvent(ref.current, duration);
	}, [duration]);

	const { classNames, styles, attrs } = separateStyleProps(props);
	const blockProps = {
		ref,
		className: classnames('l--accordion', className, classNames),
		style: {
			...styles,
			'--duration': `${duration}s`,
		},
		...attrs,
	};
	return <details {...blockProps}>{children}</details>;
}
