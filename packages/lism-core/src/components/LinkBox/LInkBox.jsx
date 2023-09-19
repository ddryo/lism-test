import React from 'react';
import { Box } from '../Box';
// import { Lism } from '../Lism';
// import setEvent from './setEvent';
// import classnames from 'classnames';

/**
 * linkbox用のスクリプトどう読み込ませる？？
 */
// const setLinkboxScript = () => {
// 	const script = document.createElement("script");
// 	script.src = "./linkbox.js";
// 	script.async = true;

// 	document.body.appendChild(script);

// 	return () => {
// 		document.body.removeChild(script);
// 	};
// };

export default function LinkBox({
	as,
	tag = 'a',
	href,
	target,
	openNewTab,
	rel,
	ariaLabel,
	hover,
	children,
	...props
}) {
	const ref = React.useRef(null);

	// React.useEffect(() => {
	// 	if (tag === 'a') return;
	// 	if (!ref.current) return;
	// 	return setEvent(ref.current);
	// }, [tag]);

	const blockProps = {
		forwardedRef: ref,
		isLinkbox: true,
		hover: hover || 'fade',
		// 'aria-label': ariaLabel || null,
		...props,
	};

	const linkProps = {
		href,
		rel,
		target: target || openNewTab ? '_blank' : null,
		'aria-label': ariaLabel || null,
	};

	const Component = as || Box;
	// aタグ以外をリンク化する場合
	if (tag !== 'a') {
		return (
			<Component tag={tag} {...blockProps}>
				<a href='/#linkbox' data-hidden-link {...linkProps}></a>
				{children}
			</Component>
		);
	}

	// 普通にaタグで囲む
	return (
		<Component tag='a' {...blockProps} {...linkProps}>
			{children}
		</Component>
	);
}
