// import React from 'react';
import { Lism } from '../Lism';

// 省略可能にするかどうかは、要検討
export default function Media({ isTransitionMedia, lismState = [], tag = 'img', ...props }) {
	if (isTransitionMedia) {
		lismState.push('is--transitionMedia');
	}

	// const MediaTag = as || tag;
	return <Lism tag={tag} lismState={lismState} {...props} />;
}
