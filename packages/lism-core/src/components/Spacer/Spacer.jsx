// import React from 'react';
import { Core } from '../Core';
import { getBpData, getMaybeCssVar } from '../../lib';

// 縦書きの時どうする？
export default function Spacer({ lismClass = {}, variant, w, h, ...props }) {
	if (undefined !== h) {
		let hObj = getBpData(h);

		// getMaybeCssVar() を適用する
		hObj = Object.entries(hObj).reduce((newObj, [key, h]) => {
			newObj[key] = getMaybeCssVar(h, 'space');
			return newObj;
		}, {});

		props.h = hObj;
	}
	if (undefined !== w) {
		let wObj = getBpData(w);

		// getMaybeCssVar() を適用する
		wObj = Object.entries(wObj).reduce((newObj, [key, w]) => {
			newObj[key] = getMaybeCssVar(w, 'space');
			return newObj;
		}, {});

		props.w = wObj;
	}

	lismClass.l = 'l--spacer';
	if (variant) lismClass.l += ` l--spacer--${variant}`;
	return <Core lismClass={lismClass} {...props} aria-hidden='true' />;
}
