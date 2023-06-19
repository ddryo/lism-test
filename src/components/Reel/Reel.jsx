import React from 'react';
import { getCommonProps } from '../../lib';
import classnames from 'classnames';

export default function Reel({ children, className, itemWidth, ...props }) {
	// const Tag = tag;
	const { classNames, styles, attrs } = getCommonProps({ ...props, isFlex: true });

	if (undefined !== itemWidth) {
		styles['--item--width'] = itemWidth;
	}

	const blockProps = {
		className: classnames('l--reel', className, classNames),
		style: styles,
		...attrs,
	};

	return (
		<div {...blockProps} tabIndex='0'>
			{children}
		</div>
	);
}
