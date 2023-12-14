// import { isValidElement } from 'react';
// import { Core } from '../Core';
import presetData from './presets/data';
import PresetIcon from './presets/SVG';
import { getLismProps } from '../../lib';

export default function Icon({
	lismClass = {},
	lismStyle = {},
	// variant,
	// as,
	size,
	name, //
	// preset,
	isInline,
	label,
	scale,
	iconProps = {}, // lismProps として処理しないデータ

	// children,
	...props
}) {
	lismClass.e = 'e--icon';
	if (isInline) lismClass.e += ' e--icon--inline';
	// if (variant) lismClass.e += ` e--icon--${variant}`;

	if (scale) lismStyle['--scale'] = scale;

	// label の有無でaria属性を変える
	if (label) {
		iconProps['aria-label'] = label;
		iconProps['role'] = 'img';
	} else {
		iconProps['aria-hidden'] = 'true';
	}

	let Icon = 'span';

	// iconに ReactElement が渡されてきた場合、childrenとして扱う
	// if (isValidElement(icon)) {
	// 	children = icon;
	// }

	// プリセットアイコンが取得できる場合
	if (!props.as && presetData[name]) {
		props.as = PresetIcon;
		props.name = name;
	}

	// 別コンポーネントを呼び出すか、spanで描画するか
	if (props.as) {
		Icon = props.as;
		if (size) iconProps.size = size; // attr にセットして コンポーネント側に渡す
	} else {
		if (size) props.size = size; // props にセットして lismProps として処理
		if (name) iconProps['data-icon'] = name;
	}

	const lismProps = getLismProps({ lismClass, lismStyle, ...props });
	return <Icon {...iconProps} {...lismProps} />;
	// return <Core tag='span' {...attrs} {...props} />;
}

// Staet系を getLismProps で処理すると全てに動作して過剰すぎるので、<Layouter> で処理する.
// getLismProps だけ処理したい場合は <Core /> を使う。
// export default function Layouter({ children, as, tag, ...props }) {
// 	const lismProps = getLismProps(getAllLayoutStateData(props));

// 	const JSX = as || tag || 'div';
// 	return <JSX {...lismProps}>{children}</JSX>;
// }
