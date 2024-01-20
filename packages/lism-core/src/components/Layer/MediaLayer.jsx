// import React from 'react';
import Layer from './Layer';
import { Media } from '../Media';
import { Frame } from '../Frame';
import { separateMediaAttrs } from '../../lib';

// memo: picture対応
export default function MediaLayer({ media = 'img', hover, mediaProps = {}, children, ...props }) {
	if (children) {
		return (
			<Frame as={Layer} variant='media' hover={hover} {...props}>
				{children}
			</Frame>
		);
	}

	// children ではなく MediaLayerに直接 メディア情報 を指定する場合
	const { mediaAttrs, otherProps } = separateMediaAttrs(props);

	return (
		<Frame as={Layer} variant='media' {...otherProps}>
			<Media
				as={media}
				hover={hover}
				loading='lazy'
				decoding='async'
				{...mediaAttrs}
				{...mediaProps}
			/>
		</Frame>
	);
}
