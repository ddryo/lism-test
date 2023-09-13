import React from 'react';
import Layer from './Layer';

export default function MediaLayer({ children, tag = 'img', z, ...props }) {
	let mediaContent = null;

	// childrenに渡ってくる場合
	if (children) {
		return (
			<Layer modifier='media' z={z} {...props}>
				{children}
			</Layer>
		);
	}

	// ptops で渡ってきた場合
	if (props.src) {
		// next/image の Image とか受け取れるように
		const MediaTag = tag; //"img" === type ? "img" : "video";

		// if (typeof MediaTag === 'function' && !MediaTag.prototype?.isReactComponent) {
		// 	console.error('Lism MediaLayer: Invalid Media component passed.');
		// 	// mediaContent = <p data-has-lism-error>Error@MediaLayer: Invalid component passed.</p>;
		// } else {
		// 	mediaContent = <MediaTag {...props} />;
		// }
		mediaContent = <MediaTag {...props} />;
	}

	return (
		<Layer modifier='media' z={z}>
			{mediaContent}
		</Layer>
	);
}
