import React from 'react';
import { getCommonProps } from '../../lib';
import classnames from 'classnames';

export default function InlineIcon({ icon, label, size = '1em', width, height, ...props }) {
	const { className, style, attrs } = getCommonProps(props, { lismClass: 'e--icon' });

	// label の有無でaria属性を変える
	const iconProps = {
		// className: classnames(className, icon?.props?.className),
		width: width || size,
		height: height || size,
		style,
		...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true }),
		...attrs,
	};

	// iconがすでにReactElementの場合は、クローンしてprops調整
	if (React.isValidElement(icon)) {
		return React.cloneElement(icon, {
			className: classnames(className, icon?.props?.className),
			...iconProps,
		});
	}

	// component関数が渡されてきた場合は、それを使う
	if (typeof icon === 'function' || typeof icon === 'object') {
		const Icon = icon;
		return <Icon className={className} {...iconProps} />;
	}

	return null;
}
