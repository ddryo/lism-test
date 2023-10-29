// import React from 'react';
import { Lism } from '../Lism';
import { isEmptyObj, filterEmptyObj } from '../../lib';

export default function Flex({
	_flexName = 'flex',
	lismClass = {},
	// lismState = [],
	direction,
	wrap,
	ai,
	ac,
	ji,
	jc,
	gap,
	rowGap,
	columnGap,
	// hasDivider,
	// hasDelimiter,
	// delimiter,
	...props
}) {
	const flex = filterEmptyObj({
		direction,
		wrap,
		ai,
		ac,
		ji,
		jc,
		gap,
		rowGap,
		columnGap,
	});

	if (!isEmptyObj(flex)) {
		props.flex = flex;
	}

	if (_flexName) {
		lismClass.l = `l--${_flexName}`;
	}

	// 本当は stack だけでいいが、stack は props をシンプルに渡してるだけなのでこっちで処理してる
	// if (hasDivider) {
	// 	lismState.push('has--divider');
	// }

	return <Lism lismClass={lismClass} {...props} />;
}
