// import React from 'react';
import { Core } from '../Core';
import { getBpData, getMaybeSpaceVar } from '../../lib';

// 縦書きの時どうする？
export default function Spacer({ lismClass = {}, w, h, ...props }) {
	if (undefined !== h) {
		let hObj = getBpData(h);

		// getMaybeSpaceVar() を適用する
		hObj = Object.entries(hObj).reduce((newObj, [key, h]) => {
			newObj[key] = getMaybeSpaceVar(h);
			return newObj;
		}, {});

		props.h = hObj;
	}
	if (undefined !== w) {
		let wObj = getBpData(w);

		// getMaybeSpaceVar() を適用する
		wObj = Object.entries(wObj).reduce((newObj, [key, w]) => {
			newObj[key] = getMaybeSpaceVar(w);
			return newObj;
		}, {});

		props.w = wObj;
	}

	lismClass.l = 'l--spacer';
	return <Core lismClass={lismClass} {...props} />;
}
