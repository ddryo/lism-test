import React from 'react';
import classnames from 'classnames';
import {
	Box,
	//DynamicCSS
} from '../index';
import { separateStyleProps, filterEmptyFromObj } from '../../lib';
// import "./style.scss";

// upper で指定されたコンポーネントをDOM構造的にも先にくるようにする
function sortChildren(children, upper) {
	const childElements = React.Children.toArray(children);

	const elem1 = childElements[0];
	const elem2 = childElements[1];

	let elem1Type = '';

	if (React.isValidElement(elem1)) {
		elem1Type = elem1.type === SideFix.Main ? 'main' : 'side';
	}
	// 入れ替え
	if ('main' === upper && 'main' !== elem1Type) {
		return (
			<>
				{elem2}
				{elem1}
			</>
		);
	} else if ('side' === upper && 'side' !== elem1Type) {
		return (
			<>
				{elem2}
				{elem1}
			</>
		);
	}

	return children;
}

function setCustomQueryCSS(customBreakPoint, upper) {
	if ('side' === upper) {
		return `@container (max-width: ${customBreakPoint}) {
			[data-custom-break="${customBreakPoint}"][data-upper="side"]{
				grid-template-columns: 100%;
				grid-template-areas: "side" "main";
			}
		}`;
	}
	return `@container (max-width: ${customBreakPoint}) {
		[data-custom-break="${customBreakPoint}"][data-upper="main"] {
			grid-template-areas: "main" "side";
			grid-template-columns: 100%;
		}
	}`;
}

function SideFix({
	mode = 'flex',
	children,
	className = '',
	sideWidth,
	mainMiw,
	left,
	upper,
	breakQuery = 'sm',
	customBreakPoint,
	...props
}) {
	const { classNames, styles, attrs } = separateStyleProps(props, { grid: true });
	const blockProps = {
		className: classnames('l--sideFix is--grid', className, classNames),
		style: {
			...styles,
			...filterEmptyFromObj({
				'--ls--side--width': sideWidth,
				'--ls--main--miw': 'flex' === mode && mainMiw,
			}),
		},
		'data-mode': mode,
		...attrs,
	};

	// grid と flex で分岐
	if ('flex' === mode) {
		return <div {...blockProps}>{children}</div>;
	}

	// const { left, upper, breakQuery = "sm", customBreakPoint, ...attrs } = props;

	// const addAttrs = {};

	blockProps['data-left'] = left;
	blockProps['data-upper'] = upper;
	blockProps['data-break'] = breakQuery;

	if (customBreakPoint) {
		blockProps['data-break'] = 'custom';
		blockProps['data-custom-break'] = customBreakPoint;
	}

	// addAttrs["data-break"] = customBreakPoint ? "custom" : breakQuery;
	// data-custom-break="600px"

	// let customQueryCSS = '';
	// if (customBreakPoint) {
	// 	customQueryCSS = setCustomQueryCSS(customBreakPoint, upper);
	// }
	return (
		<>
			<div {...blockProps}>
				{/* <DynamicCSS css={customQueryCSS} /> */}
				{sortChildren(children, upper)}
			</div>
		</>
	);
}

// <GridItem area="main"> でいいのでは？ data-area="main"
const SideFixMain = function ({ children, className, ...props }) {
	return (
		<Box className={classnames(className, 'l--sideFix__main')} {...props}>
			{children}
		</Box>
	);
};
SideFix.Main = SideFixMain;

const SideFixSide = function ({ children, className, ...props }) {
	return (
		<Box className={classnames(className, 'l--sideFix__side')} {...props}>
			{children}
		</Box>
	);
};
SideFix.Side = SideFixSide;

export default SideFix;
