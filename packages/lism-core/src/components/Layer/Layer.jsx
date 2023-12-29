// import React from 'react';
import { Layouter } from '../Layouter';
import { getLayerProps, getInsetProps, getEffectProps } from './getProps';

export default function Layer({
	lismClass = {},
	// lismStyle = {},
	variant,
	position,
	// size,
	// dataSize=''
	css = {},
	...props
}) {
	lismClass.l = 'l--layer';
	if (variant) lismClass.l += ' l--layer--' + variant;

	// position の 文字列から、プロパティを生成
	const { translate, ...layerProps } = getLayerProps(position);

	// translate は css オブジェクトの中へ。
	if (translate) {
		css.translate = css.translate || translate;
	}

	// positon, size から得られたデータを props とマージ
	props = Object.assign({}, layerProps, props);

	props = getInsetProps(props); // l,r,t,b などのコンテキストpropsのマージ
	props = getEffectProps(props); // effect系propsのマージ

	return <Layouter lismClass={lismClass} css={css} {...props} />;
}
