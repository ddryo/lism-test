import React from 'react';
import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

// R ?
// const fzSets = ["6L", "5L", "4L", "3L", "2L", "L", "M", "S", "2S"];
// const lhSets = ["1", "1.2", "1.4", "1.5", "1.6", "1.8", "2"];
// const taSets = ['center', 'left', 'right', 'c', 'r', 'l'];

// const taProp = ["center", "left", "right"];

// 省略可能にするかどうかは、要検討
export default function Text({ children, tag, ...props }) {
	// 省略しててもOK

	const { className, style, attrs } = getCommonProps(props);

	// ta から1文字目を取得
	// if (ta && taSets.includes(ta)) {
	// 	classNames.push(`-ta:${ta[0]}`);
	// }

	const blockProps = {
		className,
		style,
		...attrs,
	};

	// // fontSize が fzSets に含まれている場合
	// if (fzSets.includes(fz)) {
	// 	className += ` -fz:${fz}`;
	// } else if (fz) {
	// 	style.fontSize = fz;
	// }

	// // fontSize が fzSets に含まれている場合
	// if (lhSets.includes(String(lh))) {
	// 	className += ` -lh:${lh}`;
	// } else if (lh) {
	// 	style.lineHeight = lh;
	// }

	// className = classnames(className, {
	// 	[`-fz:${fz}`]: fzSets.includes(fz),
	// 	[`-ta:${ta[0]}`]: ["center", "left", "right"].includes(ta),
	// });

	// attrs = {
	// 	...filterEmptyObj({ className: className.trim(), style }),
	// 	...attrs,
	// };

	// console.log("attrs", attrs);
	const Tag = tag || 'p';
	return <Tag {...blockProps}>{children}</Tag>;
}
