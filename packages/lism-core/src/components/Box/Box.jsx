import React from 'react';
import { Core } from '../Core';

export default function Box({ ...props }) {
	return <Core lismClass='l--box' {...props} />;
}
