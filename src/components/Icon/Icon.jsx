import React from 'react';
import classnames from 'classnames';
import { Box, Text } from '../index';
import { separateStyleProps } from '../../lib';

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
function Icon({ icon, label, size = '1em', width, height, className, ...props }) {
	const { classNames, styles, attrs } = separateStyleProps(props);

	const svgProps = {
		className: 'e--icon', // l--icon__svg
		label,
		width: width || size,
		height: height || size,
	};

	const iconElem = getIconElement(icon, svgProps);
	// const childrenWithProps = Children.map(icon, (child) => {});

	const blockProps = {
		className: classnames('l--icon', className, classNames),
		style: styles,
		...attrs,
	};

	return <div {...blockProps}>{iconElem}</div>;
}

export const InlineIcon = ({ icon, label, size = '1em', width, height, className, ...props }) => {
	const { classNames, styles, attrs } = separateStyleProps(props);

	// console.log(color);
	const svgProps = {
		className: classnames('e--icon', className, classNames),
		label,
		width: width || size,
		height: height || size,
		style: styles,
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
	className,
	// iconColor,
	children,
	// tag,
	iconProps = {},
	bodyProps = {},
	...props
}) => {
	const { classNames, styles, attrs } = separateStyleProps(props);

	// if (iconColor) {
	// 	styles.color = iconColor;
	// }

	// コンテンツがtextかchildrenかでDOM構造分岐
	const hasText = !!text;
	const ParentTag = hasText ? 'p' : 'div';

	const blockProps = {
		// xmlns:"http://www.w3.org/2000/svg",
		className: classnames('l--iconBox has--gap', className, classNames),
		style: styles,
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
		className: 'l--iconBox__body',
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
