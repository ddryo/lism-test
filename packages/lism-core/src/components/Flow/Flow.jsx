import React from 'react';
import { Lism } from '../Lism';

export default function Flow({ gap, ...props }) {
	return <Lism isFlow flowGap={gap} {...props} />;
}
