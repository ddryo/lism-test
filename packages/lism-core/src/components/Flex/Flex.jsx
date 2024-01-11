// import React from 'react';
import { Layouter } from '../Layouter';
import { getFlexProps } from '../../lib';

export default function Flex({ _flex = 'flex', variant, lismClass = {}, ...props }) {
	if (_flex) lismClass.l = `l--${_flex}`;
	if (variant) lismClass.l += ` l--${_flex}--${variant}`;

	// まだ l クラスがない場合は l--flex を追加
	// if (!lismClass.l) {
	// 	lismClass.l = `l--flex`;
	// }

	// flex 系の props をまとめる
	props = getFlexProps(props);
	// props = getPlaceProps(props);

	// stack方向 は divider が B, それ以外が I になる
	// if (props.hasDivider === true && _flex === 'stack') {
	// 	props.hasDivider = 'B';
	// } else if (props.hasDivider === true) {
	// 	props.hasDivider = 'I';
	// }

	// as や state系 を処理できる
	return <Layouter lismClass={lismClass} {...props} />;
}
