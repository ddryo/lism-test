import React from 'react';
import Layer from './Layer';

export default function ContentLayer(props) {
	return <Layer modifier='content' p={40} {...props} />;
}
