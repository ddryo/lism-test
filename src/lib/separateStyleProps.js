import {
	filterEmptyFromObj,
	getGapStyles,
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
export default function separateStyleProps(props, options = {}) {
	let {
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
		style = {},
		...others
	} = props;

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

	// if (options.flex) {
	// 	if (undefined !== fxw) styles['--ls--fxw'] = fxw;
	// }

	if (options.flow) {
		if (undefined !== gap || undefined !== gaps) {
			styles = { ...styles, ...getGapStyles(gap, gaps, 'inner--flowGap') };
		}
	}

	if (options.flex || options.grid) {
		const { rowGap, rowGaps, colGap, colGaps, ai, jc, ..._o } = others;
		others = _o;

		if (undefined !== ai) styles['--ls--ai'] = ai;
		if (undefined !== jc) styles['--ls--jc'] = jc;

		if (undefined !== gap || undefined !== gaps) {
			styles = { ...styles, ...getGapStyles(gap, gaps, options.gapName || 'gap') };
		}
		if (undefined !== rowGap || undefined !== rowGaps) {
			styles = { ...styles, ...getGapStyles(rowGap, rowGaps, 'rowGap') };
		}
		if (undefined !== colGap || undefined !== colGaps) {
			styles = { ...styles, ...getGapStyles(colGap, colGaps, 'colGap') };
		}
	}

	// Box, Textなど子要素? → FlexItem, GridItem を作ってそっちで。
	// if (options.child) {
	// if (undefined !== fxw) styles['--ls--fxb'] = fxw;
	// if (undefined !== as) styles['--ls--as'] = as;
	// if (undefined !== js) styles['--ls--js'] = js;
	// }

	if (undefined !== mT) {
		classNames.push(`u--mT:${mT}`);
	}

	if (undefined !== width || undefined !== widths) {
		// classNames.push(`has--width`);
		styles = { ...styles, ...getWidthStyles(width, widths) };
	}
	if (undefined !== height || undefined !== heights) {
		// classNames.push(`has--height`);
		styles = { ...styles, ...getHeightStyles(height, heights) };
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
