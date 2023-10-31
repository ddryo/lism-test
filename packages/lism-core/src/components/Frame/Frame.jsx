// import React from 'react';
import { Lism } from '../Lism';

export default function Frame({ lismClass = {}, ...props }) {
	lismClass.l = 'l--frame';
	return <Lism lismClass={lismClass} {...props} />;
}
