import { filterEmptyObj, isPresetValue, isSpacePresetValue, getMaybeSpaceVar } from '../index.js';
import { getPaddingProps, getMarginProps } from './getSpacingProps';
import { getGapStyles } from './getGapStyles';
import { getWidthProps, getHeightProps } from './getSizeProps';

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
		opacity,
		bgc,
		color,
		fz,
		fw,
		lh,
		lts,
		ta,
		width,
		height,
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
		style = {},
		forwardedRef,
		...others
	} = props;

	let otherProps = others;

	// const dataProps = []; // data-lism-props
	const classNames = [];
	let styles = {
		...style,
		...{
			opacity,
			border,
			letterSpacing: lts,
			fontWeight: fw,
		},
	};

	// border = {top, right, bottom, left}

	if (alignfull) classNames.push('alignfull');
	if (alignwide) classNames.push('alignwide');

	// const flexClass = getFlexClasses({ ai, jc, fxw, fxb, as, js });
	// if (flexClass) classNames.push(flexClass);

	// if (isFlex) {
	// 	if (undefined !== fxw) styles['--ls--fxw'] = fxw;
	// }

	if (isFlow) {
		classNames.push('is--flow');

		if (undefined !== gap) {
			if (isSpacePresetValue(gap, ['0', '10', '20', '30', '40', '50', '60'])) {
				classNames.push(`-flowGap:${gap}`);
			} else {
				classNames.push(`-flowGap:`);
				styles['--flowGap'] = getMaybeSpaceVar(gap);
			}
		}
	}

	// hasLayer → has--layer ??

	// isFlex,
	// isGrid,

	if (isFlex || isGrid) {
		if (undefined !== gap || undefined !== gaps) {
			const gapProps = getGapStyles(gap, gaps);

			styles = { ...styles, ...gapProps.styles };
			classNames.push(...gapProps.classNames);
			// dataProps.push(...gapProps.dataProps);
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

	if (undefined !== mT) {
		classNames.push(`-mT:${mT}`);
		// キーワード以外の時、styleでmargin-block-start。 or .-mT: で管理
	}

	if (undefined !== width) {
		// classNames.push(`has--w`);

		const widthProps = getWidthProps(width);
		styles = { ...styles, ...widthProps.styles };
		classNames.push(...widthProps.classNames);
	}
	if (undefined !== height) {
		// classNames.push(`has--h`);

		const heightProps = getHeightProps(height);
		styles = { ...styles, ...heightProps.styles };
		classNames.push(...heightProps.classNames);
	}

	if (undefined !== padding || undefined !== paddings) {
		const paddingProps = getPaddingProps(padding, paddings);

		styles = { ...styles, ...paddingProps.styles };
		classNames.push(...paddingProps.classNames);
		// dataProps.push(...paddingProps.dataProps);
	}

	if (undefined !== margin || undefined !== margins) {
		const marginProps = getMarginProps(margin, margins);

		styles = { ...styles, ...marginProps.styles };
		classNames.push(...marginProps.classNames);
	}

	if (undefined !== color) {
		if (isPresetValue('color', color)) {
			classNames.push(`-c:${color}`);
		} else {
			styles.color = color;
		}
	}

	if (undefined !== bgc) {
		if (isPresetValue('color', bgc)) {
			classNames.push(`-bgc:${bgc}`);
		} else {
			styles.backgroundColor = bgc;
		}
	}

	if (undefined !== radius) {
		if (isPresetValue('radius', radius)) {
			classNames.push(`-bdrs:${radius}`);
		} else {
			styles.borderRadius = radius;
		}
	}

	if (undefined !== shadow) {
		if (isPresetValue('shadow', shadow)) {
			classNames.push(`-bxsh:${shadow}`);
		} else {
			styles.boxShadow = shadow;
		}
	}

	if (undefined !== ta) {
		if (isPresetValue('ta', ta)) {
			classNames.push(`-ta:${ta}`);
		} else {
			styles.textAlign = ta;
		}
	}

	if (undefined !== fz) {
		if (isPresetValue('fz', fz)) {
			classNames.push(`-fz:${fz}`);
		} else {
			styles['--fz'] = fz; // ここは em 単位の時限定にすべき
			// styles.fontSize = fz;
		}
	}

	if (undefined !== lh) {
		styles['--lh'] = lh;
		// styles.lineHeight = lh;
	}

	// // lhは --lh にもセットする
	// // fontSize が fzSets に含まれている場合
	// if (lhSets.includes(String(lh))) {
	// 	className += ` -lh:${lh}`;
	// } else if (lh) {
	// 	style.lineHeight = lh;
	// }

	// if (undefined !== fz && FZ_PRESETS.includes(fz)) {
	// 	className.push(`-fz:${fz}`);
	// } else if (fz) {
	// 	styles.fontSize = fz;
	// }

	// if (dataProps.length > 0) {
	// 	otherProps['data-props'] = dataProps.join(' ');
	// }

	// ref
	if (undefined !== forwardedRef) {
		otherProps.ref = forwardedRef;
	}
	return {
		classNames,
		styles: filterEmptyObj(styles), // filterEmptyObj は最後にかける
		attrs: otherProps,
	};
}

function getFlexGlidProps(props, isFlex, isGrid) {
	const { gta, gtc, gtr, fxd, fxw, ai, ac, jc, ji, ...others } = props;
	let styles = {};
	const classNames = [];

	if (isFlex) {
		classNames.push('is--flex');
		if (undefined !== fxw) styles['--fxw'] = fxw;
		if (undefined !== fxd) styles['--fxd'] = fxd;
	}

	if (isGrid) {
		classNames.push('is--grid');

		// ~クエリ対応~
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
	const { fxb, fxg, fxsh, fx, area, areas, alignSelf, justifySelf, ...others } = props;
	// const classNames = [];
	// let styles = {};

	// const areaStyles = getGridAreaStyles();
	let styles = {
		// '--ga': area || null,
		// '--gr': gr || null,
		// '--gc': gc || null,
		'--a-self': alignSelf || null,
		'--j-self': justifySelf || null,
		'--fxb': fxb || null,
		'--fxg': fxg || null,
		'--fxsh': fxsh || null,
		'--fx': fx || null, //
	};

	// gaがあればdata属性にもそれをセットする
	if (undefined !== area || undefined !== areas) {
		styles = { ...styles, ...getGridAreaStyles(area, areas) };
		// others['data-grid-area'] = ga;
	}

	// flex系をクエリ対応するなら、fx=文字列 or {fxg, fxsh, fxb} 形式にする？
	// styles = { ...styles, ...getFlexStyles({fx, fxb,fxg,fxsh}) };

	return { styles, others };
}
