import React from 'react';
import { Stack } from '../Box';
import { Item } from '../Item';
import { Grid } from '../Grid';
import { Divider } from '../Divider';
import { filterEmptyObj } from '../../lib';
import { getMediaLayer, getFilterLayer } from '../helper';
// import classnames from 'classnames';

// align: full, wide, ''
export default function Section({
	children,
	minH,
	// bgc,
	media,
	medias,
	filter,
	isFullScreen,
	divider = {},
	style = {},
	p,
	padding,
	gap = 0,
	...attrs
}) {
	const blockProps = {
		blockClass: 'b--section',
		style: filterEmptyObj({
			...style,
			'--mih': minH || null,
		}),
		'data-fullscreen': isFullScreen ? '1' : null,
		...attrs,
	};

	// padding, gap は インナー側へ
	const innerProps = { p, gap, padding };

	return (
		<Stack alignfull {...blockProps}>
			{divider.top && <Divider {...divider.top} flip='xy'></Divider>}
			{getMediaLayer(media)}
			{getFilterLayer(filter)}
			<Grid blockClass='b--section__inner' {...innerProps}>
				{children}
			</Grid>
			{divider.bottom && <Divider {...divider.bottom}></Divider>}
		</Stack>
	);
}

export const SectionBody = ({ children, ...props }) => {
	return (
		<Item blockClass='b--section__body' ga='body' isFlow isConstrained hasGutter {...props}>
			{children}
		</Item>
	);
};

export const SectionHeader = ({ children, ...props }) => {
	return (
		<Item blockClass='b--section__header' ga='header' {...props}>
			{children}
		</Item>
	);
};

export const SectionFooter = ({ children, ...props }) => {
	return (
		<Item blockClass='b--section__footer' ga='footer' {...props}>
			{children}
		</Item>
	);
};
