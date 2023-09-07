import React from 'react';
import { Lism } from '../Lism';

export default function Center({ size, ...props }) {
	return <Lism useFlexProps lismClass='l--center' data-size={size || null} {...props} />;
}
