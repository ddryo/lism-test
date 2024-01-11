// import React from 'react';
import { Frame } from '../Frame';
import { Layer, MediaLayer } from '../Layer';
import { LinkBox } from '../LinkBox';
import { Flex, Stack } from '../Flex';

const defaultProps = {
	bxsh: '2',
	bdrs: 's',
};

// function getLismClass(className, lismClass, variant) {
// 	lismClass.c = className;
// 	if (variant) lismClass.c += ` ${className}--${variant}`;
// }

export default function Card({
	lismClass = {},
	// lismStyle = {},
	lismState = [],
	variant,
	isFlex,
	children,
	...props
}) {
	lismClass.c = 'c--card';
	if (variant) lismClass.c += ` c--card--${variant}`;

	let CardComponent = isFlex ? Flex : Stack;

	// 以下、 href なし
	if (props.href) {
		lismState.push('is--test');
		return (
			<LinkBox
				as={CardComponent}
				lismState={lismState}
				lismClass={lismClass}
				{...defaultProps}
				{...props}
			>
				{children}
			</LinkBox>
		);
	}

	// href 指定なし
	return (
		<CardComponent lismClass={lismClass} {...defaultProps} {...props}>
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
