import React from 'react';
import Layer from './Layer';
import { Media } from '../Media';

export default function MediaLayer({
	lismState = [],
	// hasTransitionMedia,
	children,
	// tag = 'img',
	z,
	...props
}) {
	let mediaContent = null;

	// if (hasTransitionMedia) {
	// 	lismState.push('has--transitionMedia');
	// }

	// childrenに渡ってくる場合
	if (children) {
		return (
			<Layer modifier='media' lismState={lismState} z={z} {...props}>
				{children}
			</Layer>
		);
	}

	// ptops で mediaデータ渡ってきた場合
	if (props.src) {
		mediaContent = <Media {...props} />;
	}

	return (
		<Layer modifier='media' lismState={lismState} z={z}>
			{mediaContent}
		</Layer>
	);
}
