// import { useRef } from 'react';
import { Layouter } from '../Layouter';

export default function LinkBox({
	// lismClass = {},
	lismState = [],
	as,
	tag,
	href,
	target,
	openNewTab,
	rel,
	ariaLabel,
	// hover = 'fade',
	children,
	...props
}) {
	lismState.push('is--linkBox');
	// lismClass.c = 'c--linkBox';

	// const ref = useRef(null);

	let linkProps = {};

	const Component = as || Layouter;

	if (href) {
		tag = tag || 'a';
		linkProps = {
			href,
			rel,
			target: target || openNewTab ? '_blank' : null,
			'aria-label': ariaLabel || null,
		};
	} else {
		tag = tag || 'div';
	}

	// aタグ以外をリンク化する場合、 hiddenLink でリンクを仕込む
	if (tag !== 'a' && href) {
		return (
			<Component tag={tag} lismState={lismState} hover='fade' {...props}>
				<a className='e--hiddenLink is--skipFlow' {...linkProps}></a>
				{children}
			</Component>
		);
	}

	return (
		<Component tag={tag} lismState={lismState} hover='fade' {...linkProps} {...props}>
			{/* {tag !== 'a' && href && <a className='e--hiddenLink is--skipFlow' {...linkProps} />} */}
			{children}
		</Component>
	);
}
