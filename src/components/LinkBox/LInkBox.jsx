import React from 'react';
import { Box } from '../Box';
import classnames from 'classnames';
import setEvent from './setEvent';
// import { getCommonProps } from '../../lib';

// const setLinkboxScript = () => {
// 	const script = document.createElement("script");
// 	script.src = "./linkbox.js";
// 	script.async = true;

// 	document.body.appendChild(script);

// 	return () => {
// 		document.body.removeChild(script);
// 	};
// };

// ref を 投げる要素は forwardRef でrefを受け取れるようにしておかないとコンソールエラーが出る
// forwardRef はちゃんと props として引数をセットしないとだめなことに注意
// const RefBox = forwardRef((props, ref) => {
// 	const { component, ...attrs } = props;
// 	const Comp = component || Box;
// 	return <Comp {...attrs} forwardedRef={ref} />;
// });

function getHovClass(hover) {
	if (typeof hover === 'string') return `-hov:${hover}`;
	if (Array.isArray(hover)) {
		return hover.map((h) => `-hov:${h}`).join(' ');
	}

	return '';
}

// .l--box.is--linkBox にする？
export default function LinkBox({
	href,
	target,
	openNewTab,
	rel,
	ariaLabel,
	isDiv,
	component,
	className,
	children,
	hover = 'opacity',
	...props
}) {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (!isDiv) return;
		if (!ref.current) return;
		return setEvent(ref.current);
	}, [isDiv]);

	// const { classNames, styles, attrs } = getCommonProps(props);

	const blockProps = {
		forwardedRef: ref,
		className: classnames(className, 'is--linkBox', getHovClass(hover)),
		// style: styles,
		'aria-label': ariaLabel || null,
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
