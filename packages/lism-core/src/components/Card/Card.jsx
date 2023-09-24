import React from 'react';
import { Frame } from '../Frame';
import { Lism } from '../Lism';
import { Layer } from '../Layer';
import { LinkBox } from '../LinkBox';
import { Stack } from '../Flex/Stack';
import { Flex } from '../Flex';
// import { getMediaLayer } from '../helper';
// import { Item } from '../Item';

export default function Card({ children, isFlex, href, ...props }) {
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
	if (isFlex) {
		return <Flex {...blockProps}>{children}</Flex>;
	}
	return <Stack {...blockProps}>{children}</Stack>;
}

export function CardMedia({ aspect, children, ...props }) {
	// const Component = aspect ? Frame : Lism;
	return (
		<Frame blockClass='b--card__media' aspect={aspect} {...props}>
			{children}
		</Frame>
	);
}

export function CardBody({ children, isLayer, ...props }) {
	const Component = isLayer ? Layer : Stack;
	return (
		<Component blockClass='b--card__body' p='box' gap={isLayer ? null : 20} {...props}>
			{children}
		</Component>
	);
}
