// import React from 'react';
import Layer from './Layer';
import { Media } from '../Media';

export default function MediaLayer({
	children,
	// tag = 'img',
	z,
	...props
}) {
	let mediaContent = null;

	// childrenに渡ってくる場合
	if (children) {
		return (
			<Layer variant='media' z={z} {...props}>
				{children}
			</Layer>
		);
	}

	// ptops で mediaデータ渡ってきた場合
	if (props.src) {
		mediaContent = <Media {...props} />;
	}

	return (
		<Layer variant='media' z={z}>
			{mediaContent}
		</Layer>
	);
}
