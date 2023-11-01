// import React from 'react';
import { Lism } from '../Lism';

export default function Container({ size, isConstrained, ...props }) {
	if (isConstrained) {
		props.isConstrained = size || isConstrained;
	} else {
		props.isContainer = true;
		props.w = size;
	}

	return <Lism {...props} />;
}
