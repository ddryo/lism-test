// import React from 'react';
import { Layout } from '../Layout';

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

	return <Layout {...contentProps} {...props} />;
}
