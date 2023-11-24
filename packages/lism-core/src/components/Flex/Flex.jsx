// import React from 'react';
import { Layouter } from '../Layouter';
import { getFlexProps } from '../../lib';

export default function Flex({ _flexName = 'flex', lismClass = {}, hasDivider, ...props }) {
	if (_flexName) {
		lismClass.l = `l--${_flexName}`;
	}

	// flex 系の props をまとめる
	props = getFlexProps(props);

	// stack方向 は divider が B になる
	if (hasDivider && hasDivider === true) {
		if (_flexName === 'stack' || props.flex?.direction === 'column') {
			hasDivider = 'B';
		} else {
			hasDivider = 'I';
		}
	}

	// as や state系 を処理できる
	return <Layouter lismClass={lismClass} hasDivider={hasDivider} {...props} />;
}
