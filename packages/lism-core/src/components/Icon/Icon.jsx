// import { isValidElement } from 'react';
// import { Core } from '../Core';
import presets from './presets';
import SVG from './SVG';
import { getLismProps } from '../../lib';

export default function Icon({
	lismClass = {},
	lismStyle = {},
	// variant,
	as,
	asProps = {}, // lismProps として処理しないデータ
	size,
	name,
	preset,
	icon,
	emoji,
	viewBox,
	// preset,
	isInline,
	label,
	scale,

	// children,
	...props
}) {
	lismClass.e = 'e--icon';
	if (isInline) lismClass.e += ' e--icon--inline';
	// if (variant) lismClass.e += ` e--icon--${variant}`;

	if (scale) lismStyle['--scale'] = scale;

	// label の有無でaria属性を変える
	if (label) {
		asProps['aria-label'] = label;
		asProps['role'] = 'img';
	} else {
		asProps['aria-hidden'] = 'true';
	}

	let Icon = as || 'span';

	// icon で指定された場合、 name, as に振り分ける
	if (icon) {
		if (typeof icon === 'string' && presets[icon]) {
			preset = icon;
		} else if (typeof icon === 'string') {
			name = icon;
		} else if (icon && typeof icon !== 'string') {
			Icon = icon;
		}
	}

	// iconに ReactElement が渡されてきた場合、childrenとして扱う
	// if (isValidElement(icon)) {
	// 	children = icon;
	// }

	// プリセットアイコンが取得できる場合
	const iconData = presets[preset] || null;
	if (null != iconData) {
		Icon = SVG;
		asProps.viewBox = iconData?.viewBox;
		asProps.path = iconData?.path;
	}

	// svg 描画時（childrenにpathなどを渡す場合）
	else if (props.children) {
		Icon = SVG;
		asProps.viewBox = viewBox;
	}

	// 別コンポーネントを呼び出すか、spanで描画するかどうか
	if (Icon) {
		if (size) asProps.size = size; // attr にセットして コンポーネント側に渡す
	} else if (name) {
		asProps['data-icon'] = name;
		props.lismState = ['has--size'];
		if (size) props.size = size; // props にセットして lismProps として処理
	} else if (emoji) {
		asProps.children = emoji;
	}

	const lismProps = getLismProps({ lismClass, lismStyle, ...props });
	return <Icon {...asProps} {...lismProps} />;
}
