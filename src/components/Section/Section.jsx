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
	p,
	// padding,
	gap = 0,
	...attrs
}) {
	const blockProps = {
		blockClass: 'b--section',
		blockStyle: {
			'--mih': minH || null,
		},
		'data-fullscreen': isFullScreen ? '1' : null,
		...attrs,
	};

	// padding, gap は インナー側へ
	const innerProps = { p, gap };

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

export const SectionBody = ({ children, pY = 50, ...props }) => {
	return (
		<Item blockClass='b--section__body' pY={pY} isFlow isConstrained hasGutter {...props}>
			{children}
		</Item>
	);
};

export const SectionHeader = ({ children, ...props }) => {
	return (
		<Item blockClass='b--section__header' {...props}>
			{children}
		</Item>
	);
};

export const SectionFooter = ({ children, ...props }) => {
	return (
		<Item blockClass='b--section__footer' {...props}>
			{children}
		</Item>
	);
};
