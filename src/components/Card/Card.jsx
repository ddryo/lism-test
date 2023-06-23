import React from 'react';
import classnames from 'classnames';
import {
	Frame,
	//FrameContent
} from '../Frame';
import { LinkBox } from '../LinkBox';
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
		shadow: 'md',
		...props,
	};

	// 以下、ratio なし
	if (href) {
		return (
			<LinkBox
				href={href}
				component={Stack}
				// hover='mediaDark'
				{...blockProps}
			>
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
			{getMediaLayer(media || children)}
		</Frame>
	);
}

export function CardBody({ children, className, ...props }) {
	return (
		<Stack
			className={classnames('b--card__body', className)}
			padding={40}
			gap={40}
			fxg='1'
			isItem
			{...props}
		>
			{children}
		</Stack>
	);
}
