// import React from 'react';
import { Layouter } from '../Layouter';

export default function Container({ size = true, ...props }) {
	return <Layouter isContainer={size} {...props} />;
}
