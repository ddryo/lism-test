// import React from 'react';
import { Lism } from '../Lism';
import { isPresetValue } from '../../lib';

// asも受け取れるように Lism
export default function Container({
	// lismClass = {},
	lismState = [],
	lismStyle = {},
	size,
	isConstrained,
	hasGutter,
	...props
}) {
	if (isConstrained) {
		lismState.push('is--constrained');
	} else {
		lismState.push('is--container');
	}

	if (hasGutter) {
		lismState.push('has--gutter');
	}

	if (size) {
		if (isPresetValue('contentSize', size)) {
			props['data-size'] = size;
		} else if (isConstrained) {
			lismStyle['--contentSize'] = size;
			props['data-size'] = 'custom';
		} else {
			lismStyle['--size'] = size;
			props['data-size'] = 'custom';
		}
	}

	return <Lism lismStyle={lismStyle} lismState={lismState} {...props} />;
}
