import React from 'react';
import { Lism } from '../Lism';
// import { getLismClass } from '../../lib';

// .l--layer[data-layer="media|filter|content"] ?
export default function Layer({ children, modifier, position, size, ...props }) {
	const layerProps = {
		// lismClass:getLismClass('l', 'layer', modifier),
		lismClass: 'l--layer',
		lismModifier: modifier && 'l--layer--' + modifier,
		'data-size': size || null,
	};

	if (position === 'center' || position === 'center center') {
		layerProps.left = '50%';
		layerProps.top = '50%';
		layerProps.translate = '-50% -50%';
	} else if (position) {
		let hasX = false;
		let hasY = false;

		if (position.indexOf('left') !== -1) {
			layerProps.left = '0';
			hasX = true;
		} else if (position.indexOf('right') !== -1) {
			layerProps.right = '0';
			hasX = true;
		}

		if (position.indexOf('top') !== -1) {
			layerProps.top = '0';
			hasY = true;
		} else if (position.indexOf('bottom') !== -1) {
			layerProps.bottom = '0';
			hasY = true;
		}

		if (position.indexOf('center') !== -1) {
			if (hasY) {
				layerProps.left = '50%';
				layerProps.translate = '-50% 0';
			} else if (hasX) {
				layerProps.top = '50%';
				layerProps.translate = '0 -50%';
			}
		}
	}

	// if ('cover' === size) {
	// 	layerProps.inset = '0';
	// } else if ('contain' === size) {
	// 	layerProps.maxW = '100%';
	// 	layerProps.maxH = '100%';
	// }

	// const Tag = tag || 'div';

	return (
		<Lism {...layerProps} {...props}>
			{children}
		</Lism>
	);
}
