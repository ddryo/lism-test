import { isEmptyObj, filterEmptyObj, objMap } from './helper';
import getBpData from './getBpData';

// 1:2:3 → 1fr 2fr 3fr に変換
function getMaybeFrs(value) {
	// ":" があれば分解して配列化し、"fr" を付けて連結して返す
	if (typeof value === 'string' && value.indexOf(':') !== -1) {
		const splitArray = value.split(':');
		return splitArray.map((s) => `${s}fr`).join(' ');
	}

	return value;
}

export function getGridProps({
	gd,
	gt,
	gta,
	gtc,
	gtr,
	gaf,
	gar,
	gac,
	gap,
	rowg,
	colg,
	ai,
	ac,
	ji,
	jc,
	pi,
	pc,
	ratio,
	...props
}) {
	// gtc,gtr は N:M の形式で指定できるように。

	if (ratio) {
		gtc = objMap(getBpData(ratio), getMaybeFrs);
	}

	const gridProps = filterEmptyObj({
		gd,
		gt,
		gta,
		gtc,
		gtr,
		gaf,
		gar,
		gac,
		gap,
		rowg,
		colg,
		ai,
		ac,
		ji,
		jc,
		pi,
		pc,
	});

	if (!isEmptyObj(gridProps)) {
		props.grid = Object.assign({}, props.grid || {}, gridProps);
	}

	return props;
}

export function getFlexProps({ fxf, fxd, fxw, gap, rowg, colg, ai, ac, ji, jc, pi, pc, ...props }) {
	const flexProps = filterEmptyObj({
		fxf,
		fxd,
		fxw,
		gap,
		rowg,
		colg,
		ai,
		ac,
		ji,
		jc,
		pi,
		pc,
	});

	if (!isEmptyObj(flexProps)) {
		props.flex = Object.assign({}, props.flex || {}, flexProps);
	}

	// // stack方向 は divider が B になる
	// if (hasDivider === true) {
	// 	if (fxd === 'column') {
	// 		hasDivider = 'B';
	// 	} else {
	// 		hasDivider = 'I';
	// 	}
	// }

	return props;
}

export function getGridItemProps({
	ga,
	gc,
	gr,
	gcs,
	gce,
	grs,
	gre,
	aslf,
	jslf,
	pslf,
	order,
	...props
}) {
	const itemProps = filterEmptyObj({
		ga,
		gc,
		gr,
		gcs,
		gce,
		grs,
		gre,
		aslf,
		jslf,
		pslf,
		order,
	});

	if (!isEmptyObj(itemProps)) {
		props.gridItem = Object.assign({}, props.gridItem || {}, itemProps);
	}

	return props;
}

export function getFlexItemProps({ fx, fxg, fxsh, fxb, aslf, jslf, pslf, order, ...props }) {
	const itemProps = filterEmptyObj({
		fx,
		fxg,
		fxsh,
		fxb,
		aslf,
		jslf,
		pslf,
		order,
	});

	if (!isEmptyObj(itemProps)) {
		props.flexItem = Object.assign({}, props.flexItem || {}, itemProps);
	}

	return props;
}

// export function getPlaceProps({ ai, ac, ji, jc, pi, pc, ...props }) {
// 	const placeProps = filterEmptyObj({
// 		ai,
// 		ac,
// 		ji,
// 		jc,
// 		pi,
// 		pc,
// 	});
// 	if (!isEmptyObj(placeProps)) {
// 		props.flexItem = Object.assign({}, props.flexItem || {}, placeProps);
// 	}
// 	return props;
// }

// export function getItemProps({ as, js, ps, order, ...props }) {
// 	const itemProps = filterEmptyObj({
// 		as,
// 		js,
// 		ps,
// 		order,
// 	});
// 	if (!isEmptyObj(itemProps)) {
// 		props.item = Object.assign({}, props.item || {}, itemProps);
// 	}
// 	return props;
// }

export function getMediaProps({ objectFit, objectPosition, ...props }) {
	const mediaProps = filterEmptyObj({
		objectFit,
		objectPosition,
	});

	if (!isEmptyObj(mediaProps)) {
		props.css = Object.assign({}, props.css || {}, mediaProps);
	}

	return props;
}
