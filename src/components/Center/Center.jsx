import React from 'react';
import { Lism } from '../Lism';

export default function Center({ fit, ...props }) {
	// isGrid?
	return <Lism lismClass='l--center' data-fit={fit || null} {...props} />;
}
