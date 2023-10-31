// import React from 'react';
import Flex from '../Flex';
import { getMaybeCssVar } from '../../../lib';

export default function Cluster({ lismStyle = {}, delimiterColor, itemMinW, ...props }) {
	if (delimiterColor) {
		lismStyle['--delimiter--c'] = getMaybeCssVar(delimiterColor, 'color');
	}

	if (itemMinW) {
		lismStyle['--item--minW'] = itemMinW;
	}
	return <Flex _flexName='cluster' lismStyle={lismStyle} {...props} />;
}

// セパレーターを項目間に追加する
// see: https://react.dev/reference/react/Children#running-some-code-for-each-child
