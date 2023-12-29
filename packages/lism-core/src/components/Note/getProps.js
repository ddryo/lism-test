import NotePresets from './presets';
export default function getProps({
	lismClass = {},
	// lismStyle = {},
	variant,
	preset,
	// isFlow,
	// icon,
	// iconProps = {},
	// iconSize = '1.4em',
	// heading,
	// keycolor,
	// headProps = {},
	// bodyProps = {},
	...props
}) {
	lismClass.c = 'c--note';
	if (variant) lismClass.c += ` c--note--${variant}`;
	props.lismClass = lismClass;

	const presetData = preset ? NotePresets[preset] : null;
	if (presetData) {
		props.keycolor = props.keycolor || presetData.color || null;
		props.icon = props.icon || presetData.icon || null;
	}

	// icon あれば flex に。
	if (null != props.icon) {
		props.headProps = Object.assign(
			{},
			{
				as: 'Flex',
				gap: 'em5',
				ai: 'center',
			},
			props.headProps || {}
		);
	}

	return props;

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
}
