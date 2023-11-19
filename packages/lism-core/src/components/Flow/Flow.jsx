// import React from 'react';
import { Layouter } from '../Layouter';

export default function Flow({ gap = true, ...props }) {
	return <Layouter isFlow={gap} {...props} />;
}
