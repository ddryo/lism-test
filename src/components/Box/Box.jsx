import React from 'react';
import {
	//isEmptyObj, filterEmptyObj,
	// getFlexClasses,""
	getCommonProps,
} from '../../lib';
import classnames from 'classnames';
// import { useRef, forwardRef, useEffect } from "react";

export default function Box({
	children,
	modifier,
	tag,
	className,
	// isItem,
	// isFlow,
	isConstrained,
	hasGutter,
	...props
}) {
	let boxClass = 'l--box';
	if (modifier) {
		boxClass += `--${modifier}`;
	}

	const { classNames, styles, attrs } = getCommonProps(props);

	const blockProps = {
		className: classnames(
			boxClass,
			className,
			{
				'is--constrained': isConstrained || false,
				'has--gutter': hasGutter || false,
				// "has--layer": hasLayer || false,
			},
			classNames
		),
		style: styles,
		...attrs,
	};

	const Tag = tag || 'div';
	return <Tag {...blockProps}>{children}</Tag>;
}
