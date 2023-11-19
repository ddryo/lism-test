// import React from 'react';
import { Layouter } from '../Layouter';

export default function Container({ size, isConstrained, ...props }) {
	const contentProps = {};
	if (isConstrained) {
		contentProps.isConstrained = size || isConstrained;
	} else {
		contentProps.isContainer = true;
		if (size) {
			// maxSize ？
			contentProps.maxW = size;
		}
	}

	return <Layouter {...contentProps} {...props} />;
}
