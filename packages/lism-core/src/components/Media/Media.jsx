// import React from 'react';
import { Core } from '../Core';

// デフォルトで img にしているだけの Core
export default function Media({ isTransitionMedia, lismState = [], tag = 'img', ...props }) {
	if (isTransitionMedia) {
		// 名前要検討
		lismState.push('is--transitionMedia');
	}

	return <Core tag={tag} lismState={lismState} {...props} />;
}
