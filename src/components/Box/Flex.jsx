import React from 'react';
import {
	//isEmptyObj, filterEmptyFromObj,
	// getFlexClasses,""
	separateStyleProps,
} from '../../lib';
import classnames from 'classnames';
// import { useRef, forwardRef, useEffect } from "react";

export default function Flex({
	children,
	tag,
	className,
	fxw,
	// flexOption,
	...prps
}) {
	const { classNames, styles, attrs } = separateStyleProps(prps, { flex: true });

	const blockProps = {
		className: classnames('l--flex is--flex', className, classNames),
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
