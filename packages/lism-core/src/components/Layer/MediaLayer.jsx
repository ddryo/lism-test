// import React from 'react';
import Layer from './Layer';
import { Media } from '../Media';
import { separateMediaAttrs } from '../../lib';

export default function MediaLayer({
	children,
	media = 'img',
	hover,
	mediaProps = {},
	// z,
	...props
}) {
	if (children) {
		return (
			<Layer variant='media' hover={hover} {...props}>
				{children}
			</Layer>
		);
	}

	// children ではなく MediaLayerに直接 メディア情報 を指定する場合
	const { mediaAttrs, otherProps } = separateMediaAttrs(props);

	return (
		<Layer variant='media' {...otherProps}>
			<Media
				as={media}
				loading='lazy'
				decoding='async'
				objectFit='cover'
				{...mediaAttrs}
				{...mediaProps}
			/>
		</Layer>
	);
}
