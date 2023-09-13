import React from 'react';
import { MediaLayer, FilterLayer } from './index';

export const getFilterLayer = (filter) => {
	return undefined !== filter ? <FilterLayer {...filter} /> : null;
};

export const getMediaLayer = (media) => {
	if (undefined !== media) {
		if (media?.src) {
			return <MediaLayer {...media} />;
		} else if (React.isValidElement(media)) {
			return <MediaLayer>{media}</MediaLayer>;
		}
	}
	return null;
};
