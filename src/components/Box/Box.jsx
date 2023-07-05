import React from 'react';
import { getCommonProps } from '../../lib';
// import classnames from 'classnames';
// import { useRef, forwardRef, useEffect } from "react";

export default function Box({ children, modifier, tag, ...props }) {
	let lismClass = 'l--box';
	if (modifier) {
		lismClass += `--${modifier}`;
	}

	const { className, style, attrs } = getCommonProps(props, { lismClass });
	const blockProps = {
		className,
		style,
		...attrs,
	};

	const Tag = tag || 'div';
	return <Tag {...blockProps}>{children}</Tag>;
}
