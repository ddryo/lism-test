// import { useRef } from 'react';
import { Core } from '../Core';

export default function LinkBox({
	lismClass = {},
	// lismState = [],
	href,
	target,
	openNewTab,
	rel,
	// ariaLabel,
	// hover = 'fade',
	children,
	...props
}) {
	// lismState.push('is--linkbox');
	lismClass.e = 'e--overlayLink';

	let linkProps = {
		href,
		rel,
		target: target || openNewTab ? '_blank' : null,
		// 'aria-label': ariaLabel || null,
	};

	return (
		<Core tag='a' lismClass={lismClass} {...linkProps} {...props}>
			{/* {tag !== 'a' && href && <a className='e--hiddenLink is--skipFlow' {...linkProps} />} */}
			{children}
		</Core>
	);
}
