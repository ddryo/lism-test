// import React from 'react';
// import { Stack } from '../Flex/Stack';
import { Core } from '../Core';
// import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { defaultProps, NotePresets } from '../../config/components';

const _default = defaultProps?.Note || {};

export default function Note({
	lismClass = {},
	// lismStyle = {},

	...props
}) {
	props = Object.assign({}, _default, props);

	let {
		icon,
		iconSize = '1.4em',
		heading,
		variant,
		preset,
		keycolor,
		children,
		flowGap = 's',
		headProps = {},
		bodyProps = {},
		...attrs
	} = props;

	lismClass.c = 'c--note';
	if (variant) lismClass.c += ` c--note--${variant}`;

	if (preset) {
		const presetData = NotePresets[preset];
		if (presetData) {
			keycolor = keycolor || presetData.color || null;
			icon = icon || presetData.icon || null;
			// iconLabel = iconLabel || presetData.label || null;
		}
	}

	if (keycolor) attrs.keycolor = keycolor;

	if (icon) {
		headProps.d = 'flex';
		headProps.flex = { ai: 'center' };
	}

	// const bodyProps = {};

	// if ('bump' === variant) {
	// 	// borderの上に重ねる
	// 	Object.assign(headProps, {
	// 		pos: 'absolute',
	// 		top: 0,
	// 		left: 0,
	// 		translate: '0 -50%',
	// 	});
	// 	bodyProps.mbs = '10';
	// }

	return (
		<Core lismClass={lismClass} {...attrs}>
			{heading && (
				<Core lismClass={{ c: 'c--note__head' }} {...headProps}>
					{icon && (
						<Icon lismClass={{ c: 'c--note__icon' }} icon={icon} size={iconSize} />
					)}
					<span className='c--note__heading'>{heading}</span>
				</Core>
			)}

			<Core lismClass={{ c: 'c--note__body' }} isFlow flowGap={flowGap} {...bodyProps}>
				{children}
			</Core>
		</Core>
	);
}
