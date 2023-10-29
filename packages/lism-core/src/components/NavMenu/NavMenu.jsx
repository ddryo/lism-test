// import React from 'react';
import { Core } from '../Core';
import { Cluster } from '../Flex/Cluster';
import { getMaybeColorVar, getMaybeSpaceVar } from '../../lib';

export default function NavMenu({
	lismClass = {},
	lismStyle = {},
	children,
	variant,
	nestLevel,
	// border,
	direction,
	itemHovColor,
	itemHovBgc,
	// itemP,
	// style = {},
	itemPadding,
	...props
}) {
	lismClass.c = 'c--navMenu';
	if (variant) {
		// navProps['data-variant'] = variant;
		lismClass.c += ` c--navMenu--${variant}`;
	}

	if (itemHovBgc) {
		lismStyle['--hov--bgc'] = getMaybeColorVar(itemHovBgc, 'bgc');
	}
	if (itemHovColor) {
		lismStyle['--hov--c'] = getMaybeColorVar(itemHovColor, 'c');
	}
	if (itemPadding) {
		lismStyle['--item--p'] = getMaybeSpaceVar(itemPadding);
	}

	// const lismStyle = {};
	const navProps = {
		tag: 'ul',
		lismClass,
		lismStyle,
		// lh: 's',
		// lis: 'none',
	};

	if (nestLevel) {
		// lismStyle['--level'] = parseInt(nestLevel);
		navProps['data-nest-level'] = nestLevel;
	}

	if (direction === 'horizontal') {
		return (
			<Cluster gap={0} {...navProps} {...props}>
				{children}
			</Cluster>
		);
	}
	return (
		<Core {...navProps} {...props}>
			{children}
		</Core>
	);
}
