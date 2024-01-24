export const AlertPresets = {
	note: {
		icon: 'note',
		color: 'gray',
		label: 'Note:',
	},
	alert: {
		icon: 'alert',
		color: 'red',
		label: 'Alert:',
	},
	danger: {
		icon: 'ban',
		color: 'red',
		label: 'Danger:',
	},
	warning: {
		icon: 'warning',
		color: 'yellow',
		label: 'Warning:',
	},
	check: {
		icon: 'check',
		color: 'green',
		label: 'Check:',
	},
	success: {
		icon: 'check',
		color: 'green',
		label: 'Success:',
	},
	help: {
		icon: 'help',
		color: 'purple',
		label: 'Help:',
	},
	// reference
	reference: {
		icon: 'book-open',
		color: 'pink',
		label: 'Reference:',
	},
	point: {
		icon: 'lightbulb',
		color: 'orange',
		label: 'Point:',
	},
	info: {
		icon: 'info',
		color: 'blue',
		label: 'Info:',
	},
	good: {
		icon: 'good',
		color: 'green',
		label: 'Good:',
	},
	bad: {
		icon: 'bad',
		color: 'blue',
		label: 'Bad:',
	},
};

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
