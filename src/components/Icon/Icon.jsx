import React from 'react';
import classnames from 'classnames';
import { Box, Text } from '../index';
import { getCommonProps } from '../../lib';

const getIconElement = (icon, props) => {
	const { width, height, label, className, ...attrs } = props;

	// label の有無でaria属性を変える
	const iconProps = {
		className: classnames(className, icon?.props?.className),
		width,
		height,
		...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true }),
	};

	let iconElem = null;
	if (React.isValidElement(icon)) {
		iconElem = React.cloneElement(icon, {
			...iconProps,
			...attrs,
		});
	} else if (typeof icon === 'function' || typeof icon === 'object') {
		const IconComponent = icon;
		iconElem = <IconComponent {...iconProps} {...attrs} />;
	}

	return iconElem;
};

// align: full, wide, ''
function Icon({ icon, label, size = '1em', width, height, ...props }) {
	const { className, style, attrs } = getCommonProps(props, { lismClass: 'l--icon' });

	const svgProps = {
		className: 'e--icon', // l--icon__svg
		label,
		width: width || size,
		height: height || size,
	};

	const iconElem = getIconElement(icon, svgProps);
	// const childrenWithProps = Children.map(icon, (child) => {});

	const blockProps = {
		className,
		style,
		...attrs,
	};

	return <div {...blockProps}>{iconElem}</div>;
}

export const InlineIcon = ({ icon, label, size = '1em', width, height, ...props }) => {
	const { className, style, attrs } = getCommonProps(props, { lismClass: 'e--icon' });

	// console.log(color);
	const svgProps = {
		className,
		label,
		width: width || size,
		height: height || size,
		style,
		// color,
		...attrs,
	};

	const iconElem = getIconElement(icon, svgProps);
	return iconElem;
};

export const IconText = ({
	icon,
	text,
	label,
	size,
	position,
	// iconColor,
	children,
	// tag,
	iconProps = {},
	bodyProps = {},
	...props
}) => {
	const { className, style, attrs } = getCommonProps(props, {
		lismClass: 'l--iconBox', // blockClassでは?
		isFlex: true,
	});

	// if (iconColor) {
	// 	styles.color = iconColor;
	// }

	// コンテンツがtextかchildrenかでDOM構造分岐
	const hasText = !!text;
	const ParentTag = hasText ? 'p' : 'div';

	const blockProps = {
		// xmlns:"http://www.w3.org/2000/svg",
		className,
		style,
		// tag: tag || ParentTag,
		...attrs,
	};

	const svgProps = {
		// className: "l--iconBox__icon",
		label,
		size,
		...iconProps,
	};

	const bodyAttrs = {
		tag: hasText ? 'span' : 'div',
		className: 'l--iconBox__body', // blockClassでは
		...bodyProps,
	};

	// const iconElem = getIconElement(icon, svgProps);
	const iconElem = <InlineIcon icon={icon} {...svgProps} />;

	const content = hasText ? (
		<Text {...bodyAttrs}>{text}</Text>
	) : (
		<Box isFlow gap={20} {...bodyAttrs}>
			{children}
		</Box>
	);

	// const Tag = tag || "p";
	return (
		<ParentTag {...blockProps}>
			{position !== 'right' && iconElem}
			{content}
			{position === 'right' && iconElem}
		</ParentTag>
	);
};

export default Icon;
