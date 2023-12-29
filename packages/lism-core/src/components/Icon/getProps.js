import presets from './presets';

export default function getProps(
	{
		// asProps = {}, // lismProps として処理しないデータ
		as,
		scale,
		size,
		name,
		preset,
		icon,
		label,
		style = {},
		...props
	},
	hasChildren
) {
	const iconProps = {};
	// label の有無でaria属性を変える
	if (label) {
		iconProps['aria-label'] = label;
		iconProps['role'] = 'img';
	} else {
		iconProps['aria-hidden'] = 'true';
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
		Icon = '_SVG_';
		iconProps.viewBox = iconData?.viewBox;
		iconProps.path = iconData?.path;
	} else if (hasChildren) {
		// svg 描画時（childrenにpathなどを渡す場合）
		Icon = '_SVG_';
	}

	if (Icon !== 'span') {
		// 別コンポーネントを呼び出す場合

		// attr にセットして コンポーネント側に渡す
		if (size) iconProps.size = size;

		// else {
		// 	// size 指定なければ 初期値 として w,hセット → _SVG_の時以外では予期せぬ影響が出るかもしれないので不要
		// 	iconProps.width = '1em';
		// 	iconProps.height = '1em';
		// }
	} else if (name) {
		// span[data-icon] で描画する場合

		iconProps['data-icon'] = name;
		// props.lismState = ['has--size'];
		if (size) props.size = size; // props にセットして lismProps として処理
	}

	if (scale) style['--scale'] = scale;
	props.style = style;
	return { as: Icon, iconProps, props };
}
