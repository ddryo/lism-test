import React from 'react';
import { Box } from '../Box';
import setEvent from './setEvent';
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
	href,
	target,
	openNewTab,
	rel,
	ariaLabel,
	isDiv,
	component,
	hover,
	children,
	...props
}) {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (!isDiv) return;
		if (!ref.current) return;
		return setEvent(ref.current);
	}, [isDiv]);

	const blockProps = {
		forwardedRef: ref,
		blockClass: 'b--linkBox',
		'aria-label': ariaLabel || null,
		hover: hover || 'opacity',
		...props,
	};

	const linkProps = {
		href,
		rel,
		target: target || openNewTab ? '_blank' : null,
	};

	const Comp = component || Box;

	// divをリンク化する場合
	if (isDiv) {
		return (
			<Comp data-linkbox='div' tabIndex='0' role='link' {...blockProps}>
				{children}
				<a {...linkProps} data-linkbox='a' aria-hidden='true'>
					{ariaLabel || ''}
				</a>
			</Comp>
		);
	}

	// 普通にaタグで囲む
	return (
		<Comp tag='a' data-linkbox='a' {...blockProps} {...linkProps}>
			{children}
		</Comp>
	);
}
