import React from 'react';
import { Frame } from '../Frame';
// import { Lism } from '../Lism';
import { Layer } from '../Layer';
import { LinkBox } from '../LinkBox';
import { Stack } from '../Stack';
import { Flex } from '../Flex';
import { getMediaLayer } from '../helper';
// import { Item } from '../Item';

export default function Card({ children, isHorizontal, href, ...props }) {
	// let bannerContents = null;
	const blockProps = {
		blockClass: 'b--card',
		// gap: 0,
		shadow: '2',
		radius: '2',
		...props,
	};

	// 以下、ratio なし
	if (href) {
		return (
			<LinkBox href={href} as={Stack} {...blockProps}>
				{children}
			</LinkBox>
		);
	}

	// href指定なし
	if (isHorizontal) {
		return <Flex {...blockProps}>{children}</Flex>;
	}
	return <Stack {...blockProps}>{children}</Stack>;
}

export function CardMedia({ ratio, media, children, ...props }) {
	return (
		<Frame blockClass='b--card__media' ratio={ratio} {...props}>
			{getMediaLayer(media)}
			{children}
		</Frame>
	);
}

export function CardBody({ children, isLayer, ...props }) {
	const Component = isLayer ? Layer : Stack;
	return (
		<Component blockClass='b--card__body' p={40} gap={isLayer ? null : 30} {...props}>
			{children}
		</Component>
	);
}
