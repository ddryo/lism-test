import React from 'react';
import classnames from 'classnames';
// import { Flex } from '../Box';
import { getCommonProps, filterEmptyObj } from '../../lib';
// import "./style.scss";

function SideFix({ children, className, fixWidth, fluidMiw, fix = 'last', ...props }) {
	const { classNames, styles, attrs } = getCommonProps({ ...props, isFlex: true, fxw: 'wrap' });

	const blockProps = {
		className: classnames(`l--sideFix`, className, classNames),
		style: {
			...styles,
			...filterEmptyObj({
				'--fluid--miw': fluidMiw,
				'--fix--w': fixWidth,
			}),
		},
		'data-fix': 'first' === fix ? 'first' : 'last', // 必ず first か last になるように,
		...attrs,
	};

	return <div {...blockProps}>{children}</div>;
}
export default SideFix;
