import React from 'react';
import { Core } from '../Core';

export default function Box({ lismClass = {}, ...props }) {
	lismClass.l = 'l--box';
	return <Core lismClass={lismClass} {...props} />;
}
