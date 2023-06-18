import React from 'react';
import {
	//isEmptyObj, filterEmptyFromObj,
	// getFlexClasses,""
	separateStyleProps,
} from '../../lib';
import classnames from 'classnames';
// import { useRef, forwardRef, useEffect } from "react";

export default function Box(props) {
	let {
		children,
		modifier,
		tag,
		className,
		isFlow,
		// isFlex,
		// isStack, // linkBoxなどで stack 使えるように残す？
		isConstrained,
		// isContainer,
		hasSidePadding,
		forwardedRef,
		// flexOption,
		...prps
	} = props;

	let boxClass = 'l--box';
	if (modifier) {
		boxClass += `--${modifier}`;
	}

	const { classNames, styles, attrs } = separateStyleProps(prps, {
		flow: isFlow,
	});

	const blockProps = {
		className: classnames(
			boxClass,
			className,
			{
				'is--flow': isFlow || false,
				// 'is--flex': isFlex || false,
				// 'is--stack': isStack || false,
				// 'has--gap': isStack || isFlex || false,
				// 'is--container': isContainer || false,
				'is--constrained': isConstrained || false,
				'has--sidePadding': hasSidePadding || false,
				// "has--padding": hasPadding || false,
				// "has--layer": hasLayer || false,
			},
			classNames
		),
		style: styles,
		...attrs,
	};

	const Tag = tag || 'div';
	return (
		<Tag ref={forwardedRef} {...blockProps}>
			{children}
		</Tag>
	);
}

// export function Flex({ children, ...attrs }) {
// 	return (
// 		<Box isFlex {...attrs}>
// 			{children}
// 		</Box>
// 	);
// }

// export function Stack({ children, ...attrs }) {
// 	return (
// 		<Box isStack {...attrs}>
// 			{children}
// 		</Box>
// 	);
// }
