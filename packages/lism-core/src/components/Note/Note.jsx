import { Core } from '../Core';
import { Layouter } from '../Layouter';
// import { Flex } from '../Flex';
// import { Stack } from '../Flex/Stack';
import { Icon } from '../Icon';
import { defaultProps, NotePresets } from '../../config/components';

const _default = defaultProps?.Note || {};

export default function Note({
	lismClass = {},
	// lismStyle = {},
	isFlow,
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
		<Layouter lismClass={lismClass} {...attrs}>
			{heading && (
				<Core lismClass={{ c: 'c--note__head' }} {...headProps}>
					{icon && (
						<Icon lismClass={{ c: 'c--note__icon' }} icon={icon} size={iconSize} />
					)}
					<span className='c--note__heading'>{heading}</span>
				</Core>
			)}

			<Layouter lismClass={{ c: 'c--note__body' }} isFlow={isFlow} {...bodyProps}>
				{children}
			</Layouter>
		</Layouter>
	);
}
