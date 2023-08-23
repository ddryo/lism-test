import React from 'react';
import classnames from 'classnames';

// 省略可能にするかどうかは、要検討
export default function Delimiter({ type, className = '' }) {
	return <span className={classnames('e--delimiter', className)} data-type={type} />;
}
