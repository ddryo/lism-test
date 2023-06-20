import React from 'react';
import classnames from 'classnames';
// import { DynamicCSS } from '../index';
import { getCommonProps, filterEmptyObj } from '../../lib';
// import "./style.scss";

// 子コンポーネントに side, main クラスを付与する?
// function sortChildren(children, upper) {}

// upper で指定されたコンポーネントをDOM構造的にも先にくるようにする?
// function sortChildren(children, upper) {
// 	const childElements = React.Children.toArray(children);

// 	const elem1 = childElements[0];
// 	const elem2 = childElements[1];

// 	let elem1Type = '';

// 	if (React.isValidElement(elem1)) {
// 		elem1Type = elem1.type === SideFix.Main ? 'main' : 'side';
// 	}
// 	// 入れ替え
// 	if ('main' === upper && 'main' !== elem1Type) {
// 		return (
// 			<>
// 				{elem2}
// 				{elem1}
// 			</>
// 		);
// 	} else if ('side' === upper && 'side' !== elem1Type) {
// 		return (
// 			<>
// 				{elem2}
// 				{elem1}
// 			</>
// 		);
// 	}

// 	return children;
// }

// function setCustomQueryCSS(customBreakPoint, upper) {
// 	if ('side' === upper) {
// 		return `@container (max-width: ${customBreakPoint}) {
// 			[data-custom-break="${customBreakPoint}"][data-upper="side"]{
// 				grid-template-columns: 100%;
// 				grid-template-areas: "side" "main";
// 			}
// 		}`;
// 	}
// 	return `@container (max-width: ${customBreakPoint}) {
// 		[data-custom-break="${customBreakPoint}"][data-upper="main"] {
// 			grid-template-areas: "main" "side";
// 			grid-template-columns: 100%;
// 		}
// 	}`;
// }

function SideFixGrid({
	children,
	className,
	fixWidth,
	fix = 'right down', // "left up"|"left down"|"right up"|"right down"
	// left,
	// upper,
	breakQuery = 'sm',
	customBreakPoint,
	...props
}) {
	const { classNames, styles, attrs } = getCommonProps({ ...props, isGrid: true });

	const blockProps = {
		className: classnames(`l--sideFix`, className, classNames),
		style: {
			...styles,
			...filterEmptyObj({
				'--fix--w': fixWidth,
			}),
		},
		'data-fix': fix,
		...attrs,
	};

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
				{/* {sortChildren(children, upper)} */}
				{children}
			</div>
		</>
	);
}

export default SideFixGrid;
