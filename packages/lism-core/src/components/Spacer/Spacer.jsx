import React from 'react';
import { getMaybeSpaceVar } from '@/lib';
import classnames from 'classnames';

// 縦書きの時どうする？
export default function Spacer({ className, width, height, style = {}, ...props }) {
	// const { className, style, attrs } = getLismProps(props);

	let classNames = ['l--spacer'];
	// const lismStyle = {};

	if (undefined !== height) {
		classNames.push('-h:');
		style['--h'] = getMaybeSpaceVar(height);
	}
	if (undefined !== width) {
		classNames.push('-w:');
		style['--w'] = getMaybeSpaceVar(width);
	}
	const blockProps = {
		className: classnames(className, classNames),
		style,
		...props,
	};

	return <div {...blockProps} />;
}
