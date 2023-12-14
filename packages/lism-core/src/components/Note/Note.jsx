// import { Core } from '../Core';
import { Layouter } from '../Layouter';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

import NotePresets from './presets';

export default function Note({
	lismClass = {},
	// lismStyle = {},
	variant,
	preset,
	isFlow,
	icon,
	iconProps = {},
	// iconSize = '1.4em',
	heading,
	keycolor,
	headProps = {},
	bodyProps = {},
	...props
}) {
	lismClass.c = 'c--note';
	if (variant) lismClass.c += ` c--note--${variant}`;

	const presetData = preset ? NotePresets[preset] : null;
	if (presetData) {
		keycolor = keycolor || presetData.color || null;
		icon = icon || presetData.icon || null;
	}

	if (keycolor) props.keycolor = keycolor;

	if (icon) {
		headProps.ai = 'center';
	}

	// const bodyProps = {};

	// lifted or bump?
	// if ('lifted' === variant) {
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
		<Layouter lismClass={lismClass} lismState={['has--mixcolor']} radius='1' {...props}>
			{heading && (
				<Flex lismClass={{ c: 'c--note__head' }} fw='bold' {...headProps}>
					{icon && <Icon lismClass={{ c: 'c--note__icon' }} icon={icon} {...iconProps} />}
					<span className='c--note__heading'>{heading}</span>
				</Flex>
			)}

			<Layouter lismClass={{ c: 'c--note__body' }} isFlow={isFlow} {...bodyProps} />
		</Layouter>
	);
}
