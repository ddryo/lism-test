import React from 'react';
import { Core } from '../Core';
import { isEmptyObj, filterEmptyObj } from '@/lib';

export default function Flex({ direction, wrap, ai, ac, ji, jc, ...props }) {
	const flex = filterEmptyObj({
		direction,
		wrap,
		ai,
		ac,
		ji,
		jc,
	});

	if (!isEmptyObj(flex)) {
		props.flex = flex;
	}

	return <Core lismClass='l--flex' {...props} />;
}
