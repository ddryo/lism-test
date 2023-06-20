import React from 'react';
import classnames from 'classnames';
import { getCommonProps, filterEmptyObj } from '../../lib';

// R ?
// const fzSets = ["6L", "5L", "4L", "3L", "2L", "L", "M", "S", "2S"];
// const lhSets = ["1", "1.2", "1.4", "1.5", "1.6", "1.8", "2"];
const taSets = ['center', 'left', 'right', 'c', 'r', 'l'];

// const taProp = ["center", "left", "right"];

// 省略可能にするかどうかは、要検討
export default function Text({
	children,
	tag,
	className = '',
	// fz,
	// lh,
	// bgc,
	// color,
	fw,
	ta,
	lts,
	...props
}) {
	// 省略しててもOK

	const { classNames, styles, attrs } = getCommonProps(props);

	// ta から1文字目を取得
	if (ta && taSets.includes(ta)) {
		classNames.push(`u--ta:${ta[0]}`);
	}

	const blockProps = {
		className: classnames(className, classNames),
		style: {
			...styles,
			...filterEmptyObj({
				letterSpacing: lts,
				fontWeight: fw,
			}),
		},
		...attrs,
	};

	// // fontSize が fzSets に含まれている場合
	// if (fzSets.includes(fz)) {
	// 	className += ` u--fz:${fz}`;
	// } else if (fz) {
	// 	style.fontSize = fz;
	// }

	// // fontSize が fzSets に含まれている場合
	// if (lhSets.includes(String(lh))) {
	// 	className += ` u--lh:${lh}`;
	// } else if (lh) {
	// 	style.lineHeight = lh;
	// }

	// className = classnames(className, {
	// 	[`u--fz:${fz}`]: fzSets.includes(fz),
	// 	[`u--ta:${ta[0]}`]: ["center", "left", "right"].includes(ta),
	// });

	// attrs = {
	// 	...filterEmptyObj({ className: className.trim(), style }),
	// 	...attrs,
	// };

	// console.log("attrs", attrs);
	const Tag = tag || 'p';
	return <Tag {...blockProps}>{children}</Tag>;
}
