import classnames from 'classnames';
import { getCommonProps, filterEmptyObj } from '../../lib';

// 特定のクラスなどがない単純なdivなどを作るときに使う
export default function PlaneBox({ children, tag, className, ...props }) {
	// 省略しててもOK

	const { classNames, styles, attrs } = getCommonProps(props);

	const blockProps = {
		className: classnames(className, classNames),
		style: styles,
		...attrs,
	};

	// console.log("attrs", attrs);
	const Tag = tag || 'div';
	return <Tag {...blockProps}>{children}</Tag>;
}
