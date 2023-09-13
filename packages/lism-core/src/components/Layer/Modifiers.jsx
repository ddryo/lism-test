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
	z,
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

	return <Layer modifier='filter' z={z} lismStyle={lismStyle} {...props} />;
}
