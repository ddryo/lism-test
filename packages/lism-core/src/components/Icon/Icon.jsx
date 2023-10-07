import React from 'react';
// import { getLismProps } from '@/lib';
import { Lism } from '../Lism';
// import classnames from 'classnames';

export default function Icon({ icon, isInline, label, size = '1em', scale, children, ...props }) {
	const iconProps = {
		lismClass: 'e--icon',
		lismModifier: isInline ? 'e--icon--inline' : '',
		lismStyle: {},
		// label の有無でaria属性を変える
		...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true }),
	};

	if (scale) {
		iconProps.lismStyle['--scale'] = scale;
	}

	if (React.isValidElement(icon)) {
		children = icon;
	}

	// childrenある場合
	if (children) {
		if ('1em' !== size) iconProps.lismStyle['--size'] = size;
		return (
			<Lism tag='span' {...iconProps} {...props}>
				{children}
			</Lism>
		);
	}

	// cssでアイコンを描画する場合
	if (typeof icon === 'string') {
		if ('1em' !== size) iconProps.lismStyle['--size'] = size;
		return (
			<Lism tag='span' data-icon={icon} {...iconProps} {...props}>
				{children}
			</Lism>
		);
	}

	//以下、普通にsvg
	// label の有無でaria属性を変える
	iconProps.width = size;
	iconProps.height = size;

	// component関数が渡されてきた場合は、それを使う
	if (typeof icon === 'function' || typeof icon === 'object') {
		return <Lism as={icon} {...iconProps} {...props} />;
	}

	return null;
}
