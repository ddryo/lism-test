// import React from 'react';
import { Stack } from '../Flex/Stack';
import { Lism } from '../Lism';
// import { Item } from '../Item';
import { Grid } from '../Grid';
import { Divider } from '../Divider';
// import { filterEmptyObj } from '../../lib';
import { getMediaLayer, getFilterLayer } from '../helper';

// align: full, wide, ''
export default function Section({
	children,
	minH,
	media,
	filter,
	isFullScreen,
	divider = {},
	// p,
	// gap = 0,
	innerProps = {},
	...attrs
}) {
	const blockProps = {
		blockClass: 'b--section',
		lismStyle: {
			'--mih': minH || null,
		},
		'data-fullscreen': isFullScreen ? '1' : null,
		...attrs,
	};

	return (
		<Stack alignfull {...blockProps}>
			{divider.top && <Divider {...divider.top} flip='xy' />}
			{getMediaLayer(media)}
			{getFilterLayer(filter)}
			<Grid blockClass='b--section__inner' {...innerProps}>
				{children}
			</Grid>
			{divider.bottom && <Divider {...divider.bottom} />}
		</Stack>
	);
}

export const SectionBody = ({ children, ...props }) => {
	// Containerを使う
	return (
		<Lism blockClass='b--section__body' ga='-' isFlow isConstrained hasGutter {...props}>
			{children}
		</Lism>
	);
};

export const SectionHeader = ({ children, ...props }) => {
	return (
		<Lism blockClass='b--section__header' ga='-' {...props}>
			{children}
		</Lism>
	);
};

export const SectionFooter = ({ children, ...props }) => {
	return (
		<Lism blockClass='b--section__footer' ga='-' {...props}>
			{children}
		</Lism>
	);
};
