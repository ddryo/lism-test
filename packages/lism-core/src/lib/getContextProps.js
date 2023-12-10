import { isEmptyObj, filterEmptyObj } from './helper';

export function getGridProps({ gd, gt, gta, gtc, gtr, gap, rowg, clmg, ...props }) {
	const gridProps = filterEmptyObj({
		gd,
		gt,
		gta,
		gtc,
		gtr,
		gap,
		rowg,
		clmg,
	});

	if (!isEmptyObj(gridProps)) {
		props.grid = Object.assign({}, props.grid || {}, gridProps);
	}

	return props;
}

export function getGridItemProps({ ga, gc, gr, gcs, gce, grs, gre, ...props }) {
	const itemProps = filterEmptyObj({
		ga,
		gc,
		gr,
		gcs,
		gce,
		grs,
		gre,
	});

	if (!isEmptyObj(itemProps)) {
		props.gridItem = Object.assign({}, props.gridItem || {}, itemProps);
	}

	return props;
}

export function getFlexProps({
	fxf,
	fxd,
	fxw,
	gap,
	rowg,
	clmg,
	// flex = {},
	...props
}) {
	const flexProps = filterEmptyObj({
		fxf,
		fxd,
		fxw,
		gap,
		rowg,
		clmg,
	});

	if (!isEmptyObj(flexProps)) {
		props.flex = Object.assign({}, props.flex || {}, flexProps);
	}

	return props;
}

export function getFlexItemProps({ fx, fxg, fxsh, fxb, ...props }) {
	const itemProps = filterEmptyObj({
		fx,
		fxg,
		fxsh,
		fxb,
	});

	if (!isEmptyObj(itemProps)) {
		props.flexItem = Object.assign({}, props.flexItem || {}, itemProps);
	}

	return props;
}

export function getPlaceProps({ ai, ac, ji, jc, pi, pc, ...props }) {
	const placeProps = filterEmptyObj({
		ai,
		ac,
		ji,
		jc,
		pi,
		pc,
	});

	if (!isEmptyObj(placeProps)) {
		props.place = Object.assign({}, props.place || {}, placeProps);
	}

	return props;
}

export function getItemProps({ as, js, ps, order, ...props }) {
	const itemProps = filterEmptyObj({
		as,
		js,
		ps,
		order,
	});

	if (!isEmptyObj(itemProps)) {
		props.item = Object.assign({}, props.item || {}, itemProps);
	}

	return props;
}
