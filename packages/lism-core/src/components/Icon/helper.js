import presets from './presets';

export const getIconProps = (
	{
		asProps = {}, // lismProps として処理しないデータ
		as,
		size,
		name,
		preset,
		icon,
		label,
		...props
	},
	hasChildren
) => {
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
	}

	// svg 描画時（childrenにpathなどを渡す場合）
	else if (hasChildren) {
		Icon = '_SVG_';
		// iconProps.viewBox = viewBox;
	}

	if (Icon !== 'span') {
		// 別コンポーネントを呼び出す場合

		if (size) {
			iconProps.size = size; // attr にセットして コンポーネント側に渡す
		} else {
			// size 指定なければ 初期値 として w,hセット
			iconProps.width = '1em';
			iconProps.height = '1em';
		}
	} else if (name) {
		// span[data-icon] で描画する場合

		iconProps['data-icon'] = name;
		props.lismState = ['has--size'];
		if (size) props.size = size; // props にセットして lismProps として処理
	}

	return { Icon, asProps: { ...iconProps, ...asProps }, props };
};
