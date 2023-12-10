// import React from 'react';
import { Lism } from '../Lism';

// .l--layer[data-layer="media|filter|content"] ?
export default function Layer({
	lismClass = {},
	// lismStyle = {},
	variant,
	position,
	size,
	...props
}) {
	let layoutClass = 'l--layer';
	if (variant) {
		layoutClass += ' l--layer--' + variant;
	}
	lismClass.l = layoutClass;

	// position の 文字列から、プロパティを生成
	const layerProps = getLayerPositionProps(position);

	if ('cover' === size) {
		layerProps.inset = '0';
	} else if ('contain' === size) {
		layerProps.maxW = '100%';
		layerProps.maxH = '100%';
	}

	// const Tag = tag || 'div';

	return <Lism lismClass={lismClass} {...layerProps} {...props} />;
}

function getLayerPositionProps(position) {
	const props = {};
	if (position === 'center' || position === 'center center') {
		props.l = '50%';
		props.t = '50%';
		props.translate = '-50% -50%';
	} else if (position) {
		let hasX = false;
		let hasY = false;

		if (position.indexOf('left') !== -1) {
			props.l = '0';
			hasX = true;
		} else if (position.indexOf('right') !== -1) {
			props.r = '0';
			hasX = true;
		}

		if (position.indexOf('top') !== -1) {
			props.t = '0';
			hasY = true;
		} else if (position.indexOf('bottom') !== -1) {
			props.b = '0';
			hasY = true;
		}

		if (position.indexOf('center') !== -1) {
			if (hasY) {
				props.l = '50%';
				props.translate = '-50%';
			} else if (hasX) {
				props.t = '50%';
				props.translate = '0 -50%';
			}
		}
	}

	return props;
}
