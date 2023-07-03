import React from 'react';
import classnames from 'classnames';
// import Image from "next/image";
import { Box, Stack } from '../Box';
import { Item } from '../Item';
import { Grid } from '../Grid';
// import { Stack } from '../Stack';
import { Divider } from '../Divider';
import { filterEmptyObj } from '../../lib';
import { getMediaLayer, getFilterLayer } from '../helper';

// align: full, wide, ''
export default function Section({
	children,
	className,
	mih,
	// bgc,
	media,
	medias,
	filter,
	isFullScreen,
	divider = {},
	style = {},
	padding, // = { Y: 50 },
	paddings,
	gap = 0,
	gaps,
	...attrs
}) {
	// const paddingStyles = getPaddingStyles(padding, paddings);
	// const hasPadding = !isEmptyObj(paddingStyles);

	const blockProps = {
		className: classnames('b--section', className),
		style: filterEmptyObj({
			...style,
			'--mih': mih || null,
		}),
		'data-fullscreen': isFullScreen ? '1' : null,
		...attrs,
	};

	// padding, gap は インナー側へ
	const innerProps = { padding, paddings, gap, gaps };

	return (
		<Stack alignfull {...blockProps}>
			{divider.top && <Divider {...divider.top} flip='xy'></Divider>}
			{getMediaLayer(media)}
			{getFilterLayer(filter)}
			<Grid className='b--section__inner' {...innerProps}>
				{children}
			</Grid>
			{divider.bottom && <Divider {...divider.bottom}></Divider>}
		</Stack>
	);
}

export const SectionBody = ({ children, className, ...props }) => {
	return (
		<Item
			ga='body'
			isFlow
			isConstrained
			hasGutter
			className={classnames('b--section__body', className)}
			{...props}
		>
			{children}
		</Item>
	);
};

export const SectionHeader = ({ children, className, ...props }) => {
	return (
		<Item ga='header' className={classnames('b--section__header', className)} {...props}>
			{children}
		</Item>
	);
};

export const SectionFooter = ({ children, className, ...props }) => {
	return (
		<Item ga='footer' className={classnames('b--section__footer', className)} {...props}>
			{children}
		</Item>
	);
};
