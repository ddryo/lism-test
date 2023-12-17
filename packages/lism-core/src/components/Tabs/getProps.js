export default function getTabProps({
	isVertical,
	keepHeight,
	listProps = {},
	panelProps = {},
	...props
}) {
	let tabData = [];

	if (isVertical) {
		props.gt = 'side:s';
		panelProps = Object.assign({}, panelProps, { gcs: 2, grs: 1, ai: 's' });
		listProps = Object.assign({}, listProps, { as: 'Stack' });
		tabData.push('vertical');
	} else {
		panelProps = Object.assign({}, panelProps, { gcs: 1, grs: 2 });
	}

	if (keepHeight) {
		tabData.push('keep-height');
	}
	if (tabData.length) {
		props['data-tab'] = tabData.join(' ');
	}

	if (tabData.length) {
		props['data-tab'] = tabData.join(' ');
	}

	return { tabProps: props, listProps, panelProps };
}
