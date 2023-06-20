import { filterEmptyObj, isPresetValue } from '../index.js';
import { getPaddingProps, getMarginProps } from './getSpacingProps';
import { getGapStyles, getFlowGapStyles } from './getGapStyles';
import { getWidthCSS, getHeightCSS } from './getSizeCSS';

// import { default as getFlexClasses } from './getFlexClasses';
import { getGridAreaStyles } from './getGridAreaStyles';

// import getMaybeSpaceVar from "./getMaybeSpaceVar.js";
// import { isShadowPresetValue } from './getMaybeShadowVar.js';
// import { isFzPresetValue } from './getMaybeFzVar.js';

/**
 * props から styleに変換する要素 と その他 に分離する
 *
 * @param {Object} props
 * @param {Object} options
 * @return {Object} styles & attrs
 */

// styleを生成するための共通処理
// 一括していpropは、 "prop", "props" で分けて指定する。 padding:{X:20,Y:20} paddingQs:{sm:10,md:20} みたいな
// それ以外は、"prop" にオブジェクトを渡すとクエリ指定できる。 w:{_:'100%',sm:'50%'} みたいな
// or, "propQs" として統一する？ wQs, gapQs, paddingQs, marginQs...
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
		// widths,
		height,
		// heights,
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
		...filterEmptyObj({
			border,
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

	if (undefined !== width) {
		classNames.push(`has--w`);
		styles = { ...styles, ...getWidthCSS(width) };
	}
	if (undefined !== height) {
		classNames.push(`has--h`);
		styles = { ...styles, ...getHeightCSS(height) };
	}

	if (undefined !== mT) {
		classNames.push(`u--mT:${mT}`);
	}

	if (undefined !== padding || undefined !== paddings) {
		const paddingProps = getPaddingProps(padding, paddings);

		styles = { ...styles, ...paddingProps.styles };
		classNames.push(...paddingProps.classNames);
	}

	if (undefined !== margin || undefined !== margins) {
		const marginProps = getMarginProps(margin, margins);

		styles = { ...styles, ...marginProps.styles };
		classNames.push(...marginProps.classNames);
	}

	if (undefined !== color) {
		if (isPresetValue('color', color)) {
			classNames.push(`u--c:${color}`);
		} else {
			styles.color = color;
		}
	}

	if (undefined !== bgc) {
		if (isPresetValue('color', bgc)) {
			classNames.push(`u--bgc:${bgc}`);
		} else {
			styles.backgroundColor = bgc;
		}
	}

	if (undefined !== radius) {
		if (isPresetValue('radius', radius)) {
			classNames.push(`u--bdrs:${radius}`);
		} else {
			styles.borderRadius = radius;
		}
	}

	if (undefined !== shadow) {
		if (isPresetValue('shadow', shadow)) {
			classNames.push(`u--bxsh:${shadow}`);
		} else {
			styles.boxShadow = shadow;
		}
	}

	if (undefined !== fz) {
		if (isPresetValue('fz', fz)) {
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

// grid: { area, row, col } ?
// gArea
function getItemProps(props) {
	const { fxb, fxg, fxsh, fx, gridArea, gridAreas, alignSelf, justifySelf, ...others } = props;
	// const classNames = [];
	// let styles = {};

	// const gridAreaStyles = getGridAreaStyles();
	let styles = filterEmptyObj({
		// '--ga': gridArea || null,
		// '--gr': gr || null,
		// '--gc': gc || null,
		'--a-self': alignSelf || null,
		'--j-self': justifySelf || null,
		'--fxb': fxb || null,
		'--fxg': fxg || null,
		'--fxsh': fxsh || null,
		'--fx': fx || null, //
	});

	// gaがあればdata属性にもそれをセットする
	if (undefined !== gridArea || undefined !== gridAreas) {
		styles = { ...styles, ...getGridAreaStyles(gridArea, gridAreas) };
		// others['data-grid-area'] = ga;
	}

	// flex系をクエリ対応するなら、fx=文字列 or {fxg, fxsh, fxb} 形式にする？
	// styles = { ...styles, ...getFlexStyles({fx, fxb,fxg,fxsh}) };

	return { styles, others };
}
