import React from 'react';
import { Core } from '../Core';
import { isEmptyObj, filterEmptyObj } from '../../lib';

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

	lismClass.l = `l--${_flexName}`;
	return <Core lismClass={lismClass} {...props} />;
}
