import React from 'react';
import { Lism } from '../Lism';

export default function Cluster({ itemMinW, ...props }) {
	const lismStyle = {};
	if (itemMinW) {
		lismStyle['--item--minW'] = itemMinW;
	}
	return <Lism useFlexProps lismClass='l--cluster' lismStyle={lismStyle} gap={20} {...props} />;
}

// セパレーターを項目間に追加する
// see: https://react.dev/reference/react/Children#running-some-code-for-each-child
