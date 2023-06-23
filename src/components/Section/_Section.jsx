import React from 'react';
import classnames from 'classnames';
// import Image from "next/image";
import {
	Box,
	// Stack,
	// Layer,
	Divider,
	MediaLayer,
	FilterLayer,
} from '../index';
import {
	filterEmptyObj,
	// isEmptyObj,
	// getPaddingStyles,
} from '../../lib';

// align: full, wide, ''
function Section({
	children,
	className,
	mih,
	// bgc,
	media,
	medias,
	filter,
	isFullScreen,
	divider = {},
	style = {},
	// padding, // = { Y: 50 },
	// paddings,
	// gap,
	// gaps,
	...attrs
}) {
	// const paddingStyles = getPaddingStyles(padding, paddings);
	// const hasPadding = !isEmptyObj(paddingStyles);

	const blockProps = {
		className: classnames('b--section', className),
		style: filterEmptyObj({
			...style,
			'--ls--mih': mih || null,
		}),
		'data-fullscreen': isFullScreen ? '1' : null,
		...attrs,
	};

	let mediaLayer = null;
	if (undefined !== media) {
		mediaLayer = <MediaLayer className='b--section__media' media={media} />;
	}

	// padding は インナー側へ
	const innerProps = {}; //{ padding, paddings, gap, gaps };

	// console.log(divider.top);
	return (
		<Box {...blockProps}>
			{divider.top && <Divider {...divider.top} flip='xy'></Divider>}
			{mediaLayer}
			{undefined !== filter && <FilterLayer {...filter}></FilterLayer>}
			{/* <Stack className='b--section__body' {...innerProps} hasGutter> */}
			{children}
			{/* </Stack>/ */}
			{divider.bottom && <Divider {...divider.bottom}></Divider>}
		</Box>
	);
}

export const SectionContent = ({ children, className, ...props }) => {
	return (
		<Box
			isFlow
			padding={{ Y: 50 }}
			isConstrained
			hasGutter
			className={classnames('b--section__content', className)}
			{...props}
		>
			{children}
		</Box>
	);
};

// const SectionHeader = ({ children, className, ...props }) => {
// 	return (
// 		<Box className={classnames('b--section__header', className)} {...props}>
// 			{children}
// 		</Box>
// 	);
// };
// Section.Header = SectionHeader;

// const SectionFooter = ({ children, className, ...props }) => {
// 	return (
// 		<Box className={classnames('b--section__footer', className)} {...props}>
// 			{children}
// 		</Box>
// 	);
// };
// Section.Footer = SectionFooter;

export default Section;
