import React from 'react';
import classnames from 'classnames';
import { Frame, FrameContent } from '../Frame';
import { Layer } from '../Layer';
import { LinkBox } from '../LinkBox';
import { Item } from '../Item';
import {
	//Box,
	Stack,
} from '../Box';
import { getMediaLayer } from '../helper';

// "Banner" (b--banner) にする
export default function Card({ children, className, href, ...props }) {
	// let bannerContents = null;
	const blockProps = {
		className: classnames('b--card', className),
		gap: 0,
		shadow: '1',
		...props,
	};

	// 以下、ratio なし
	if (href) {
		return (
			<LinkBox href={href} component={Stack} {...blockProps}>
				{children}
			</LinkBox>
		);
	}

	// href指定なし
	return <Stack {...blockProps}>{children}</Stack>;
}

export function CardMedia({
	ratio,
	media,
	children,
	padding,
	paddings,
	contentProps = {},
	...props
}) {
	const paddingProps = { padding, paddings };
	return (
		<Frame ratio={ratio} {...props}>
			{getMediaLayer(media)}
			<FrameContent {...paddingProps} {...contentProps}>
				{children}
			</FrameContent>
		</Frame>
	);
}

export function CardBody({ children, className, isLayer, ...props }) {
	if (isLayer) {
		return (
			<Layer
				position='bottom left'
				width='100%'
				className={classnames('b--card__body', className)}
				padding={40}
				{...props}
			>
				{children}
			</Layer>
		);
	}
	return (
		<Item
			component={Stack}
			className={classnames('b--card__body', className)}
			padding={40}
			gap={40}
			// fxg='1'
			{...props}
		>
			{children}
		</Item>
	);
}
