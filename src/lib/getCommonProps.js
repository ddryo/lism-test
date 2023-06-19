import {
	filterEmptyFromObj,
	getGapStyles,
	getFlowGapStyles,
	getPaddingStyles,
	getMarginStyles,
	getWidthStyles,
	getHeightStyles,
	// getFlexClasses,
} from './index.js';
// import maybeGetSpaceVar from "./maybeGetSpaceVar.js";
import { isColorPresetValue } from './maybeGetColorVar.js';
import { isRadiusPresetValue } from './maybeGetRadiusVar.js';
import { isShadowPresetValue } from './maybeGetShadowVar.js';
import { isFzPresetValue } from './maybeGetFzVar.js';

/**
 * props から styleに変換する要素 と その他 に分離する
 *
 * @param {Object} props
 * @param {Object} options
 * @return {Object} styles & attrs
 */

// styleを生成するための共通処理
export default function getCommonProps(props) {
	const {
		padding,
		paddings,
		margin,
		margins,
		mT,
		bgc,
		color,
		fz,
		lh,
		width,
		widths,
		height,
		heights,
		radius, //bdrs,
		border,
		shadow, // bxsh
		gap,
		gaps,
		// ai,
		// jc,
		// fxw,
		// fxb,
		// as, //align-self,
		// js, //justify-self,
		alignfull,
		alignwide,
		isFlow,
		isFlex,
		isGrid,
		isItem,
		// isFlex,
		// isGrid,
		style = {},
		...others
	} = props;

	let otherProps = others;

	const classNames = [];
	let styles = {
		...style,
		...filterEmptyFromObj({
			border,
			// boxShadow: shadow,
			// borderRadius: bdrs,
			// color: maybeGetColorVar(color),
			// backgroundColor: maybeGetColorVar(bgc),
			// height,
			// width,
		}),
	};

	if (alignfull) classNames.push('alignfull');
	if (alignwide) classNames.push('alignwide');

	// const flexClass = getFlexClasses({ ai, jc, fxw, fxb, as, js });
	// if (flexClass) classNames.push(flexClass);

	// if (isFlex) {
	// 	if (undefined !== fxw) styles['--ls--fxw'] = fxw;
	// }

	if (isFlow) {
		classNames.push('is--flow');
		if (undefined !== gap || undefined !== gaps) {
			styles = { ...styles, ...getFlowGapStyles(gap, gaps) };
		}
	}

	// hasLayer → has--layer ??

	// isFlex,
	// isGrid,

	if (isFlex || isGrid) {
		if (undefined !== gap || undefined !== gaps) {
			styles = { ...styles, ...getGapStyles(gap, gaps) };
		}

		// その他の flex, grid 用の props を取得
		const flexGridProps = getFlexGlidProps(otherProps, isFlex, isGrid);

		otherProps = flexGridProps.others;
		classNames.push(...flexGridProps.classNames);
		styles = { ...styles, ...flexGridProps.styles };
	}

	if (isItem) {
		classNames.push('is--item');

		const itemProps = getItemProps(otherProps);
		otherProps = itemProps.others;
		styles = { ...styles, ...itemProps.styles };
	}

	if (undefined !== width || undefined !== widths) {
		// classNames.push(`has--width`);
		styles = { ...styles, ...getWidthStyles(width, widths) };
	}
	if (undefined !== height || undefined !== heights) {
		// classNames.push(`has--height`);
		styles = { ...styles, ...getHeightStyles(height, heights) };
	}

	if (undefined !== mT) {
		classNames.push(`u--mT:${mT}`);
	}
	if (undefined !== padding || undefined !== paddings) {
		styles = { ...styles, ...getPaddingStyles(padding, paddings) };
	}
	if (undefined !== margin || undefined !== margins) {
		styles = { ...styles, ...getMarginStyles(margin, margins) };
	}

	if (undefined !== color) {
		if (isColorPresetValue(color)) {
			classNames.push(`u--c:${color}`);
		} else {
			styles.color = color;
		}
	}

	if (undefined !== bgc) {
		if (isColorPresetValue(bgc)) {
			classNames.push(`u--bgc:${bgc}`);
		} else {
			styles.backgroundColor = bgc;
		}
	}

	if (undefined !== radius) {
		if (isRadiusPresetValue(radius)) {
			classNames.push(`u--bdrs:${radius}`);
		} else {
			styles.borderRadius = radius;
		}
	}

	if (undefined !== shadow) {
		if (isShadowPresetValue(shadow)) {
			classNames.push(`u--bxsh:${shadow}`);
		} else {
			styles.boxShadow = shadow;
		}
	}

	if (undefined !== fz) {
		if (isFzPresetValue(fz)) {
			classNames.push(`u--fz:${fz}`);
		} else {
			styles.fontSize = fz;
			styles['--fz'] = fz; // ここは em 単位の時限定にすべき
		}
	}

	if (undefined !== lh) {
		styles['--lh'] = lh;
		// styles.lineHeight = lh;
	}

	// // lhは --lh にもセットする
	// // fontSize が fzSets に含まれている場合
	// if (lhSets.includes(String(lh))) {
	// 	className += ` u--lh:${lh}`;
	// } else if (lh) {
	// 	style.lineHeight = lh;
	// }

	// if (undefined !== fz && FZ_PRESETS.includes(fz)) {
	// 	className.push(`u--fz:${fz}`);
	// } else if (fz) {
	// 	styles.fontSize = fz;
	// }

	return {
		classNames,
		styles,
		attrs: others,
	};
}

function getFlexGlidProps(props, isFlex, isGrid) {
	const { gta, gtc, gtr, fxw, ai, ac, jc, ji, ...others } = props;
	let styles = {};
	const classNames = [];

	if (isFlex) {
		classNames.push('is--flex');
		if (undefined !== fxw) styles['--fxw'] = fxw;
	}

	if (isGrid) {
		classNames.push('is--grid');

		if (undefined !== gta) styles['--gta'] = gta;
		if (undefined !== gtc) styles['--gtc'] = gtc;
		if (undefined !== gtr) styles['--gtr'] = gtr;
	}

	// 共通処理
	// justify-items, align-items, justify-content, align-content
	if (undefined !== ai) styles['--ai'] = ai;
	if (undefined !== ac) styles['--ac'] = ac;
	if (undefined !== jc) styles['--jc'] = jc;
	if (undefined !== ji) styles['--ji'] = ji;

	return { styles, classNames, others };
}

function getItemProps(props) {
	const { fxb, fxg, fxsh, fx, ga, gr, gc, as, js, ...others } = props;
	// let styles = {};

	// const gridAreaStyles = getGridAreaStyles();
	const styles = filterEmptyFromObj({
		'--ga': ga || null,
		'--gr': gr || null,
		'--gc': gc || null,
		'--as': as || null,
		'--js': js || null,
		'--fxb': fxb || null,
		'--fxg': fxg || null,
		'--fxsh': fxsh || null,
		'--fx': fx || null,
	});

	return { styles, others };
}
