import React from 'react';
import Layer from './Layer';

const FILTERS = [
	'blur',
	'contrast',
	'brightness',
	'drop-shadow',
	'grayscale',
	'hue-rotate',
	'invert',
	'opacity',
	'saturate',
	'sepia',
];

export function ContentLayer(props) {
	return <Layer modifier='content' p={40} {...props} />;
}

export function FilterLayer({
	//texture,
	...props
}) {
	const lismStyle = {};
	const backdropFilters = [];

	FILTERS.forEach((filterName) => {
		if (props[filterName]) {
			backdropFilters.push(`${filterName}(${props[filterName]})`);
			delete props[filterName];
		}
	});

	if (backdropFilters.length > 0) {
		lismStyle.backdropFilter = backdropFilters.join(' ');
	}

	return <Layer modifier='filter' lismStyle={lismStyle} {...props} />;
}

export function MediaLayer({ children, media, ...props }) {
	let mediaContent = null;
	if (children) {
		// クラスを付与
		// if (React.isValidElement(children)) {
		// 	const mediaProps = children?.props || {};
		// 	const { className, ...mediaAttrs } = mediaProps;
		// 	children = React.cloneElement(children, {
		// 		className: `l--layer__media ${className || ''}`.trim(),
		// 		...mediaAttrs,
		// 	});
		// }
		// return (
		// 	<Layer modifier='media' {...props}>
		// 		{children}
		// 	</Layer>
		// );
		mediaContent = children;
	}

	if (React.isValidElement(media)) {
		mediaContent = media;
	} else if (typeof media === 'object') {
		const { as, tag = 'img', ...mediaAttrs } = media;

		// next/image の Image とかは自分で渡してもらう
		const MediaTag = as || tag; //"img" === type ? "img" : "video";
		if (typeof MediaTag === 'function' && !MediaTag.prototype?.isReactComponent) {
			console.error('Lism MediaLayer: Invalid Media component passed.');
			mediaContent = <p data-has-lism-error>Error@MediaLayer: Invalid component passed.</p>;
		} else {
			mediaContent = <MediaTag {...mediaAttrs} />;
		}
	}

	return (
		<Layer modifier='media' {...props}>
			{mediaContent}
		</Layer>
	);
}
