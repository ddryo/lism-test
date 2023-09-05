import React from 'react';
import { Frame } from '../Frame';
// import { Layer } from '../Layer';
import { LinkBox } from '../LinkBox';
import { Stack } from '../Stack';
import { getMediaLayer } from '../helper';
// import { Item } from '../Item';

export default function Card({ children, href, ...props }) {
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
	return <Stack {...blockProps}>{children}</Stack>;
}

export function CardMedia({ ratio, media, children, ...props }) {
	return (
		<Frame ratio={ratio} {...props}>
			{getMediaLayer(media)}
			{children}
		</Frame>
	);
}

export function CardBody({ children, as, ...props }) {
	const Component = as || Stack;
	return (
		<Component blockClass='b--card__body' p={40} gap={30} {...props}>
			{children}
		</Component>
	);
}
