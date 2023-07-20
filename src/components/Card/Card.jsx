import React from 'react';
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
export default function Card({ children, href, ...props }) {
	// let bannerContents = null;
	const blockProps = {
		blockClass: 'b--card',
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
	// padding,
	// p,
	// contentProps = {},
	...props
}) {
	// const paddingProps = { padding, p };
	return (
		<Frame ratio={ratio} {...props}>
			{getMediaLayer(media)}
			{/* <FrameContent {...paddingProps} {...contentProps}> */}
			{children}
			{/* </FrameContent> */}
		</Frame>
	);
}

export function CardBody({ children, isLayer, ...props }) {
	if (isLayer) {
		return (
			<Layer blockClass='b--card__body' position='bottom left' w='100%' p={40} {...props}>
				{children}
			</Layer>
		);
	}
	return (
		<Item
			component={Stack}
			blockClass='b--card__body'
			p={40}
			gap={40}
			// fxg='1'
			{...props}
		>
			{children}
		</Item>
	);
}
