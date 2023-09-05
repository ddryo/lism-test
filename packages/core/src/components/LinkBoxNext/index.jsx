import React, { forwardRef, useEffect } from 'react';
import { Box } from '../index';
import classnames from 'classnames';

// Link の子要素は forwardRef でrefを受け取れるようにしておかないとコンソールエラーが出る
// https://blog.n-t.jp/post/tech/react-ref-warn-from-next-link/
// forwardRef はちゃんと props として引数をセットしないとだめなことに注意
const RefBox = forwardRef((props, ref) => {
	const { component, ...attrs } = props;
	const Comp = component || Box;
	return <Comp {...attrs} />;
});

const setLinkboxScript = () => {
	const script = document.createElement('script');
	script.src = '/js/linkbox.js';
	script.async = true;

	document.body.appendChild(script);

	return () => {
		document.body.removeChild(script);
	};
};

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
	useEffect(() => {
		if (!isDiv) return;
		setLinkboxScript();
	}, [isDiv]);

	const blockProps = {
		tag: isDiv ? 'div' : 'a',
		className: classnames(className, 'b--linkBox'),
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

	// divをリンク化する場合
	if (isDiv) {
		const Comp = component || Box;
		return (
			<Comp {...blockProps} tabIndex='0' role='link'>
				{children}
				<Link {...linkProps} data-linkbox='a' aria-hidden='true'>
					{ariaLabel || ''}
				</Link>
			</Comp>
		);
	}

	// 普通にaタグで囲む
	return (
		<Link href={href} passHref legacyBehavior>
			<RefBox as={component} {...blockProps} {...linkProps}>
				{children}
			</RefBox>
		</Link>
	);
};
export default LinkBox;
