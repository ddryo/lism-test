import React from 'react';
import { Lism } from '../Lism';
import { isPresetValue } from '@/lib';

// asも受け取れるように Lism
export default function Container({ size, isConstrained, ...props }) {
	let stateClass = '';
	let lismStyle = {};

	if (isConstrained) {
		stateClass = 'is--constrained';
		// if (size) {
		// 	lismStyle['--size'] = size;
		// }
	} else {
		stateClass = 'is--container';
		// if (size) {
		// 	lismStyle['--size'] = size;
		// }
	}

	if (size) {
		if (isPresetValue('contentSize', size)) {
			props['data-size'] = size;
		} else if (isConstrained) {
			lismStyle['--contentSize'] = size;
		} else {
			lismStyle['--size'] = size;
		}
	}

	return <Lism lismStyle={lismStyle} lismUtility={stateClass} {...props} />;
}
