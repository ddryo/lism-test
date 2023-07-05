import React from 'react';
import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

export default function Reel({ children, itemWidth, ...props }) {
	// const Tag = tag;
	const { className, style, attrs } = getCommonProps(props, {
		lismClass: 'l--reel',
		isFlex: true,
	});

	if (undefined !== itemWidth) {
		style['--item--width'] = itemWidth;
	}

	const blockProps = {
		className,
		style,
		...attrs,
	};

	return (
		<div {...blockProps} tabIndex='0'>
			{children}
		</div>
	);
}
