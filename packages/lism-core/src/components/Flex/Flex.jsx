// import React from 'react';
import { Layouter } from '../Layouter';
import { getFlexProps, getPlaceProps } from '../../lib';

export default function Flex({ _flexName = 'flex', variant, lismClass = {}, ...props }) {
	if (_flexName) lismClass.l = `l--${_flexName}`;
	if (variant) lismClass.l += ` l--${_flexName}--${variant}`;

	// まだ l クラスがない場合は l--flex を追加
	// if (!lismClass.l) {
	// 	lismClass.l = `l--flex`;
	// }

	// flex 系の props をまとめる
	props = getFlexProps(props);
	props = getPlaceProps(props);

	// stack方向 は divider が B になる
	if (props.hasDivider === true && _flexName === 'stack') {
		props.hasDivider = 'B';
	}

	// as や state系 を処理できる
	return <Layouter lismClass={lismClass} {...props} />;
}
