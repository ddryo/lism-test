import React from 'react';
import {
	//isEmptyObj, filterEmptyObj,
	// getFlexClasses,""
	getCommonProps,
} from '../../lib';
import classnames from 'classnames';
// import { useRef, forwardRef, useEffect } from "react";

export default function Stack({
	children,
	tag,
	className,
	// flexOption,
	...props
}) {
	const { classNames, styles, attrs } = getCommonProps({ ...props, isFlex: true });

	const blockProps = {
		className: classnames('l--stack', className, classNames),
		style: styles,
		...attrs,
	};

	const Tag = tag || 'div';
	return (
		<Tag
			//ref={forwardedRef}
			{...blockProps}
		>
			{children}
		</Tag>
	);
}
