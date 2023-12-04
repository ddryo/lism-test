import { isValidElement } from 'react';
import { Core } from '../Core';
import { IconPresets } from '../../config/components';

export default function Icon({
	lismClass = {},
	lismStyle = {},
	icon,
	isInline,
	label,
	size = '1em',
	scale,
	children,
	...props
}) {
	lismClass.e = 'e--icon';
	if (isInline) lismClass.e += ' e--icon--inline';

	// label の有無でaria属性を変える
	const iconProps = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true };

	// iconに ReactElement が渡されてきた場合、childrenとして扱う
	if (isValidElement(icon)) {
		children = icon;
	} else if (typeof icon === 'string' && IconPresets[icon]) {
		// presetsの取得
		icon = IconPresets[icon];
	}

	if (scale) lismStyle['--scale'] = scale;

	if (children) {
		// childrenある場合
		iconProps.tag = 'span';
		if ('1em' !== size) lismStyle['--size'] = size;
	} else if (typeof icon === 'string') {
		// cssでアイコンを描画する場合

		// svg-で始まる場合は mask で CSSからsvgを描画する
		if (icon.startsWith('svg-')) props.mask = '-';

		iconProps.tag = 'span';
		iconProps['data-icon'] = icon.replace('svg-', '');
		if ('1em' !== size) lismStyle['--size'] = size;
	} else if (typeof icon === 'function' || typeof icon === 'object') {
		// component関数が渡されてきた場合は、それを使う
		iconProps.as = icon;
		iconProps.width = size;
		iconProps.height = size;
	}

	return (
		<Core tag='span' lismClass={lismClass} lismStyle={lismStyle} {...iconProps} {...props}>
			{children}
		</Core>
	);
}
