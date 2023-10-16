// import React from 'react';
import { Frame } from '../Frame';
import { Layer, MediaLayer } from '../Layer';
import { LinkBox } from '../LinkBox';
import { Stack } from '../Flex/Stack';
import { Flex } from '../Flex';
import { defaultProps } from '../../config/components';
const _default = defaultProps?.Card || {};

export default function Card({
	lismClass = {},
	// lismStyle = {},
	children,
	...props
}) {
	props = Object.assign({}, _default, props);
	let { variant, isFlex, ...attrs } = props;

	lismClass.c = 'c--card';
	if (variant) lismClass.c += ` c--card--${variant}`;

	let CardComponent = isFlex ? Flex : Stack;

	// 以下、 href なし
	if (attrs.href) {
		return (
			<LinkBox as={CardComponent} lismClass={lismClass} {...attrs}>
				{children}
			</LinkBox>
		);
	}

	// href 指定なし
	return (
		<CardComponent lismClass={lismClass} {...attrs}>
			{children}
		</CardComponent>
	);
}

export function CardMedia({ lismClass = {}, children, ...props }) {
	lismClass.c = 'c--card__media';
	return (
		<Frame lismClass={lismClass} {...props}>
			{/* <MediaLayer> */}
			{children}
			{/* </MediaLayer> */}
		</Frame>
	);
}

export function CardBody({ lismClass = {}, isLayer, ...props }) {
	const Component = isLayer ? Layer : Stack;
	lismClass.c = 'c--card__body';
	return <Component lismClass={lismClass} p='box' gap={isLayer ? null : 20} {...props} />;
}
