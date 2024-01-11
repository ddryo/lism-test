// import React from 'react';
import { Layouter } from '../Layouter';

export default function Container({ size = true, isConstrained, ...props }) {
	if (isConstrained && typeof isConstrained === 'string') {
		size = isConstrained;
	}
	return <Layouter isContainer={size} {...props} />;
}
