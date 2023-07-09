import React from 'react';
import { getCommonProps } from '../../lib';
import { InlineIcon } from './index';
// import classnames from 'classnames';

// align: full, wide, ''
function Icon({ icon, label, size = '1em', width, height, ...props }) {
	const { className, style, attrs } = getCommonProps(props, { lismClass: 'l--icon' });

	const blockProps = {
		className,
		style,
		...attrs,
	};

	const iconProps = {
		icon,
		label,
		width: width || size,
		height: height || size,
	};

	return (
		<div {...blockProps}>
			<InlineIcon {...iconProps} />
		</div>
	);
}

export default Icon;
