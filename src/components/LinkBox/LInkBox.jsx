import React from 'react';
import { Box } from '../index';
import classnames from 'classnames';
import setEvent from './setEvent';

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

// .l--box.is--linkBox にする？
const LinkBox = ({
	href,
	target,
	openNewTab,
	rel,
	ariaLabel,
	isDiv,
	className,
	component,
	children,
	hover,
	...props
}) => {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (!isDiv) return;
		if (!ref.current) return;
		return setEvent(ref.current);
	}, [isDiv]);

	const blockProps = {
		forwardedRef: ref,
		tag: isDiv ? 'div' : 'a',
		className: classnames(className, 'is--linkBox'),
		'data-hover': hover || 'opacity',
		'data-linkbox': isDiv ? 'div' : 'a',
		'aria-label': ariaLabel || null,
		...props,
	};

	const linkProps = {
		href,
		rel,
		target: target || openNewTab ? '_blank' : null,
	};

	const Comp = component || Box;

	// // divをリンク化する場合
	if (isDiv) {
		// const Comp = component || Box;
		return (
			<Comp {...blockProps} tabIndex='0' role='link'>
				{children}
				<a {...linkProps} data-linkbox='a' aria-hidden='true'>
					{ariaLabel || ''}
				</a>
			</Comp>
		);
	}

	// 普通にaタグで囲む
	return (
		<Comp tag='a' {...blockProps} {...linkProps}>
			{children}
		</Comp>
	);
};
export default LinkBox;
