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
	if (children) {
		// クラスを付与
		if (React.isValidElement(children)) {
			const mediaProps = children?.props || {};
			const { className, ...mediaAttrs } = mediaProps;

			children = React.cloneElement(children, {
				className: `l--layer__media ${className}`.trim(),
				...mediaAttrs,
			});
		}
		return (
			<Layer modifier='media' {...props}>
				{children}
			</Layer>
		);
	}
	if (undefined === media) return null;

	const {
		tag = 'img',
		// type = 'img',
		src,
		alt,
		className = '',
		...mediaAttrs
	} = media;

	let mediaContent = null;

	// next/image の Image とかは自分で渡してもらう
	const MediaTag = tag; //"img" === type ? "img" : "video";

	mediaContent = (
		<MediaTag
			className={`l--layer__media ${className}`.trim()}
			src={src}
			alt={alt || ''}
			{...mediaAttrs}
		/>
	);

	return (
		<Layer modifier='media' {...props}>
			{mediaContent}
		</Layer>
	);
}
