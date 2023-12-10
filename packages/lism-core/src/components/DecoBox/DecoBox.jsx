// import React from 'react';
import { Core } from '../Core';

export default function DecoBox({ lismClass = {}, ...props }) {
	lismClass.c = 'c--decoBox';

	return <Core lismClass={lismClass} {...props} />;
}
