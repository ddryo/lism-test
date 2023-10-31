// import React from 'react';
import { Lism } from '../Lism';
import { isEmptyObj, filterEmptyObj } from '../../lib/helper';

export default function Flex({
	_flexName = 'flex',
	lismClass = {},
	direction,
	wrap,
	ai,
	ac,
	ji,
	jc,
	gap,
	rowGap,
	columnGap,
	hasDivider,
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

	// stack方向 は divider が B になる
	if (hasDivider && hasDivider === true) {
		if (_flexName === 'stack' || direction === 'column') {
			hasDivider = 'B';
		} else {
			hasDivider = 'I';
		}
	}

	// as や state系 を処理できる
	return <Lism lismClass={lismClass} hasDivider={hasDivider} {...props} />;
}
