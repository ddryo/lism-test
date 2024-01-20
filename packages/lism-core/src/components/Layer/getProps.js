import { isEmptyObj, filterEmptyObj } from '../../lib/helper';

export function getInsetProps({ inset, l, r, t, b, is, ie, bs, be, ...props }) {
	const insetProps = filterEmptyObj({
		inset,
		l,
		r,
		t,
		b,
		is,
		ie,
		bs,
		be,
	});

	if (!isEmptyObj(insetProps)) {
		props.inset = Object.assign({}, props.inset || {}, insetProps);
	}

	return props;
}

// css.
export function getEffectProps({
	transform,
	transformOrigin,
	translate,
	rotate,
	scale,
	backdropFilter,
	clipPath,
	...props
}) {
	const cssProps = filterEmptyObj({
		transform,
		transformOrigin,
		translate,
		rotate,
		scale,
		clipPath,
		backdropFilter,
	});

	if (!isEmptyObj(cssProps)) {
		props.css = Object.assign({}, props.css || {}, cssProps);
	}

	return props;
}

// l,r,t,b, translate をそのまま受け取れる
export function getLayerProps(position, size) {
	const layerProps = {};
	if (position === 'center' || position === 'center center') {
		layerProps.inset = 'center';
		// layerProps.l = '50%';
		// layerProps.t = '50%';
		// layerProps.translate = '-50% -50%';
	} else if (position) {
		let hasX = false;
		let hasY = false;

		if (position.indexOf('left') !== -1) {
			layerProps.l = '0';
			hasX = true;
		} else if (position.indexOf('right') !== -1) {
			layerProps.r = '0';
			hasX = true;
		}

		if (position.indexOf('top') !== -1) {
			layerProps.t = '0';
			hasY = true;
		} else if (position.indexOf('bottom') !== -1) {
			layerProps.b = '0';
			hasY = true;
		}

		if (position.indexOf('center') !== -1) {
			if (hasY) {
				layerProps.inset = 'centerX';
				// layerProps.l = '50%';
				// layerProps.translate = '-50%';
			} else if (hasX) {
				layerProps.inset = 'centerY';
				// layerProps.t = '50%';
				// layerProps.translate = '0 -50%';
			}
		}
	}

	// if ('contain' === size) {
	// 	layerProps.maxW = '100%';
	// 	layerProps.maxH = '100%';
	// 	layerProps.ov = 'auto';
	// }

	return layerProps;
}
