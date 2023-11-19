import { isEmptyObj, filterEmptyObj } from './helper';

export function getFlexProps({
	direction,
	wrap,
	ai,
	ac,
	ji,
	jc,
	gap,
	rowGap,
	columnGap,
	// flex = {},
	...props
}) {
	const flexProps = filterEmptyObj({
		direction,
		wrap,
		ai,
		ac,
		ji,
		jc,
		gap,
		rowGap,
		columnGap,
	});

	if (!isEmptyObj(flexProps)) {
		props.flex = Object.assign({}, props.flex || {}, flexProps);
	}

	return props;
}
