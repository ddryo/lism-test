// import React from 'react';
import { Core } from '../Core';

export default function Frame({ lismClass = {}, ...props }) {
	lismClass.l = 'l--frame';
	return <Core lismClass={lismClass} {...props} />;
}
