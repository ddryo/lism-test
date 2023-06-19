import React from 'react';
import {
	//isEmptyObj, filterEmptyFromObj,
	// getFlexClasses,""
	getCommonProps,
} from '../../lib';
import classnames from 'classnames';
// import { useRef, forwardRef, useEffect } from "react";

export default function Flex({ children, tag, className, fxw, ...props }) {
	const { classNames, styles, attrs } = getCommonProps({ ...props, isFlex: true });

	const blockProps = {
		className: classnames('l--flex', className, classNames),
		style: styles,
		'data-fxw': fxw,
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
