import React from 'react';
import { getLismProps } from '@/lib';
import classnames from 'classnames';

export default function Icon({ icon, label, size = '1em', scale, width, height, ...props }) {
	const { className, style, attrs } = getLismProps(props, { lismClass: 'e--icon' });

	// label の有無でaria属性を変える
	const iconProps = {
		// className: classnames(className, icon?.props?.className),
		style,
		...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true }),
		...attrs,
	};

	if (scale) {
		iconProps.style['--scale'] = scale;
	}

	// cssでアイコンを描画する場合
	if (typeof icon === 'string') {
		if ('1em' !== size) iconProps.style['--size'] = size;

		if (icon.startsWith('U+')) {
			const emoji = String.fromCodePoint(parseInt(icon.replace('U+', ''), 16));
			return (
				<span className={className} data-emoji={emoji} {...iconProps}>
					{emoji}
				</span>
			);
		}
		return <span className={className} data-css-icon={icon} {...iconProps}></span>;
	}

	//以下、普通にsvg
	// label の有無でaria属性を変える
	iconProps.width = width || size;
	iconProps.height = height || size;

	// iconがすでにReactElementの場合は、クローンしてprops調整
	if (React.isValidElement(icon)) {
		return React.cloneElement(icon, {
			className: classnames(className, icon?.props?.className),
			...iconProps,
		});
	}

	// component関数が渡されてきた場合は、それを使う
	if (typeof icon === 'function' || typeof icon === 'object') {
		const TheIcon = icon;
		return <TheIcon className={className} {...iconProps} />;
	}

	return null;
}
