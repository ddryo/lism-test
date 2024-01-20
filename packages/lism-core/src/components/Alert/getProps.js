import AlertPresets from './presets';
export default function getProps({ icon, boxcolor, preset, iconProps = {}, ...props }) {
	const presetData = preset ? AlertPresets[preset] : null;

	if (presetData) {
		boxcolor = boxcolor || presetData.color || null;
		icon = icon || presetData.icon || null;
		iconProps.label = iconProps.label || presetData.label || null;
	}

	props.boxcolor = boxcolor || '-';
	props.icon = icon;
	props.iconProps = iconProps;

	return props;
}
