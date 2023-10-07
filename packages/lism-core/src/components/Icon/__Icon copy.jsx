import React from 'react';
import { getLismProps } from '@/lib';
import classnames from 'classnames';

export default function Icon({
	icon,
	isInline,
	label,
	size = '1em',
	scale,
	// width,
	// height,
	children,
	...props
}) {
	const lismClass = 'e--icon';
	const { className, style, attrs } = getLismProps(props, {
		lismClass,
		lismModifier: isInline ? 'e--icon--inline' : '',
	});

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

	// childrenある場合
	if (children) {
		if ('1em' !== size) iconProps.style['--size'] = size;
		return (
			<span className={className} {...iconProps}>
				{children}
			</span>
		);
	}

	// cssでアイコンを描画する場合
	if (typeof icon === 'string') {
		if ('1em' !== size) iconProps.style['--size'] = size;

		// emojiをアイコンとして使う場合
		// if (icon.startsWith('U+')) {
		// 	const emoji = String.fromCodePoint(parseInt(icon.replace('U+', ''), 16));
		// 	return (<span className={className} data-emoji={emoji} {...iconProps}>{emoji}</span>);
		// }
		return <span className={className} data-icon={icon} {...iconProps}></span>;
	}

	//以下、普通にsvg
	// label の有無でaria属性を変える
	iconProps.width = size;
	iconProps.height = size;

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
