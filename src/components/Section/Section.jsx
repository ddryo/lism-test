import React from 'react';
import classnames from 'classnames';
// import Image from "next/image";
import {
	Box,
	// Stack,
	// Layer,
	Divider,
	// MediaLayer,
	// FilterLayer,
} from '../index';
import { filterEmptyFromObj } from '../../lib';
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
		className: classnames('b--section b--section2', className),
		style: filterEmptyFromObj({
			...style,
			'--ls--mih': mih || null,
		}),
		'data-fullscreen': isFullScreen ? '1' : null,
		...attrs,
	};

	// padding, gap は インナー側へ
	const innerProps = { padding, paddings, gap, gaps };

	return (
		<Box {...blockProps}>
			{divider.top && <Divider {...divider.top} flip='xy'></Divider>}
			{getMediaLayer(media)}
			{getFilterLayer(filter)}
			{/* Grid */}
			<Box className='b--section__inner' {...innerProps}>
				{children}
			</Box>
			{divider.bottom && <Divider {...divider.bottom}></Divider>}
		</Box>
	);
}

export const SectionBody = ({ children, className, ...props }) => {
	return (
		<Box
			isFlow
			padding={{ Y: 50 }}
			isConstrained
			hasSidePadding
			className={classnames('b--section__body', className)}
			{...props}
		>
			{children}
		</Box>
	);
};

export const SectionHeader = ({ children, className, ...props }) => {
	return (
		<Box className={classnames('b--section__header', className)} {...props}>
			{children}
		</Box>
	);
};

export const SectionFooter = ({ children, className, ...props }) => {
	return (
		<Box className={classnames('b--section__footer', className)} {...props}>
			{children}
		</Box>
	);
};
