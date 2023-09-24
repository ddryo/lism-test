import React from 'react';
import { Core } from '../Core';
import { isEmptyObj, filterEmptyObj } from '@/lib';

export default function Flex({ isInline, direction, wrap, ...props }) {
	const flex = filterEmptyObj({
		isInline,
		direction,
		wrap,
	});

	const noOptions = isEmptyObj(flex);

	// inline-flex にする時以外は、display の出力不要
	if (!noOptions && !isInline) {
		flex.skipDisplay = true;
	}

	return <Core lismClass='l--flex' flex={noOptions ? null : flex} {...props} />;
}
