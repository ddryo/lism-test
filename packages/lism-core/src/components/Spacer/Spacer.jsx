import React from 'react';
import { Core } from '../Core';
import { getBpData, getMaybeSpaceVar } from '@/lib';
// import classnames from 'classnames';

// 縦書きの時どうする？
export default function Spacer({ w, h, ...props }) {
	// const { className, style, attrs } = getLismProps(props);

	// let classNames = ['l--spacer'];
	// const lismStyle = {};

	if (undefined !== h) {
		let hObj = getBpData(h);
		// objの 中身に getMaybeSpaceVar() を適用する
		hObj = Object.entries(hObj).reduce((newObj, [key, h]) => {
			newObj[key] = getMaybeSpaceVar(h);
			return newObj;
		}, {});

		props.h = hObj;
		// classNames.push('-h:');
		// style['--h'] = getMaybeSpaceVar(h);
	}
	if (undefined !== w) {
		// classNames.push('-w:');
		// style['--w'] = getMaybeSpaceVar(w);
		let wObj = getBpData(w);
		// objの 中身に getMaybeSpaceVar() を適用する
		wObj = Object.entries(wObj).reduce((newObj, [key, w]) => {
			newObj[key] = getMaybeSpaceVar(w);
			return newObj;
		}, {});

		props.w = wObj;
	}
	// const blockProps = {
	// 	className: classnames(className, classNames),
	// 	style,
	// 	...props,
	// };

	return <Core lismClass='l--spacer' {...props} />;
}
