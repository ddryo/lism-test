import { useRef } from 'react';
import { Core } from '../Core';

export default function LinkBox({
	as,
	tag = 'a',
	lismState = [],
	href,
	target,
	openNewTab,
	rel,
	ariaLabel,
	hover = 'fade',
	children,
	...props
}) {
	lismState.push('is--linkbox');
	const ref = useRef(null);

	const theProps = { lismState, hover, forwardedRef: ref };

	const linkProps = {
		href,
		rel,
		target: target || openNewTab ? '_blank' : null,
		'aria-label': ariaLabel || null,
	};

	const Component = as || Core;

	// aタグ以外をリンク化する場合
	if (tag !== 'a') {
		return (
			<Component tag={tag} {...theProps} {...props}>
				<a href='/#linkbox' data-hidden-link {...linkProps}></a>
				{children}
			</Component>
		);
	}

	// 普通にaタグで囲む
	return (
		<Component tag='a' {...theProps} {...props} {...linkProps}>
			{children}
		</Component>
	);
}
