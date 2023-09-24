import React from 'react';
import { Lism } from '../Lism';

export default function Flow({ gap, hasIndent, ...props }) {
	if (hasIndent) {
		props.lismUtility = 'has:indent';
	}
	return <Lism isFlow flowGap={gap} {...props} />;
}
