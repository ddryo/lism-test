import {
	filterEmptyObj,
	isPresetValue,
	isSpacePresetValue,
	getMaybeSpaceVar,
	getMaybeColorVar,
	getMaybeShadowVar,
} from '../index.js';
import { getPaddingProps, getMarginProps } from './getSpacingProps';
import { getGapStyles } from './getGapStyles';
import { getWidthProps, getHeightProps } from './getSizeProps';
import classnames from 'classnames';

// import { default as getFlexClasses } from './getFlexClasses';

// import getMaybeSpaceVar from "./getMaybeSpaceVar.js";
// import { isShadowPresetValue } from './getMaybeShadowVar.js';
// import { isFzPresetValue } from './getMaybeFzVar.js';

const cboxKeywords = [
	// 'main',
	// 'accent',
	'red',
	'blue',
	'green',
	'yellow',
	'purple',
	'orange',
	'pink',
	'gray',
];

const UTILITIES = {
	layout: {
		center: 'c',
		strech: 's',
		// 'flex-start': 'fs',
		// 'flex-end': 'fe',
		'space-between': 'sb',
	},
	fxw: { wrap: 'w', nowrap: 'n' },
};

const getLayoutUtility = (key, value) => {
	return UTILITIES[key][value] || false;
};

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
export default function getCommonProps(props, options = {}) {
	const {
		blockClass = '',
		className = '',
		_utility = '',
		utility = '',
		padding,
		paddings,
		margin,
		margins,
		mT,
		opacity,
		bgc,
		bdc,
		color,
		cbox,
		fillColor,
		outlineColor,
		fz,
		fw,
		lh,
		lts,
		ta,
		width,
		height,
		miw,
		mih,
		maw,
		mah,
		radius, //bdrs,
		border,
		shadow, // bxsh
		hover,
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
		isConstrained,
		hasGutter,
		style = {},
		forwardedRef,
		lismClass = '',
		stateClass = '',
		...others
	} = { ...options, ...props }; // options:初期値などが渡ってくる

	// isFlexなどは options からも渡される
	// let { lismClass = '', isFlex, isGrid, ...otherProps } = { ...others, ...options };
	let otherProps = others;

	// const dataProps = []; // data-lism-props
	// const classNames = [];
	const utilityClasses = [utility, _utility];
	const stateClasses = classnames(stateClass, {
		'is--flex': isFlex || false,
		'is--grid': isGrid || false,
		'is--flow': isFlow || false,
		'is--item': isItem || false,
		'is--constrained': isConstrained || false,
		'has--gutter': hasGutter || false,
		alignfull,
		alignwide,
	});
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

	// const flexClass = getFlexClasses({ ai, jc, fxw, fxb, as, js });
	// if (flexClass) classNames.push(flexClass);

	if (isFlow) {
		if (undefined !== gap) {
			if (isSpacePresetValue(gap, ['0', '10', '20', '30', '40', '50', '60'])) {
				utilityClasses.push(`-flowGap:${gap}`);
			} else {
				utilityClasses.push(`-flowGap:`);
				styles['--flowGap'] = getMaybeSpaceVar(gap);
			}
		}
	}

	// hasLayer → has--layer ??

	// isFlex,
	// isGrid,
	// options.isFlex

	if (isFlex || isGrid) {
		if (undefined !== gap || undefined !== gaps) {
			const gapProps = getGapStyles(gap, gaps);

			styles = { ...styles, ...gapProps.styles };
			utilityClasses.push(...gapProps.classNames);
			// dataProps.push(...gapProps.dataProps);
		}

		// その他の flex, grid 用の props を取得
		const flexGridProps = getFlexGlidProps(otherProps, isFlex, isGrid);

		otherProps = flexGridProps.others;
		utilityClasses.push(...flexGridProps.classNames);
		styles = { ...styles, ...flexGridProps.styles };
	}

	if (hover) {
		const hovProps = getHoverProps(hover);

		utilityClasses.push(...hovProps.classNames);
		styles = { ...styles, ...hovProps.styles };
	}

	// if (isItem) {}

	if (undefined !== mT) {
		if (isSpacePresetValue(mT)) {
			utilityClasses.push(`-mT:${mT}`);
		} else {
			styles.marginBlockStart = mT;
		}

		// キーワード以外の時、styleでmargin-block-start。 or .-mT: で管理
	}

	if (undefined !== width) {
		const widthProps = getWidthProps(width);
		styles = { ...styles, ...widthProps.styles };
		utilityClasses.push(...widthProps.classNames);
	}
	if (undefined !== height) {
		const heightProps = getHeightProps(height);
		styles = { ...styles, ...heightProps.styles };
		utilityClasses.push(...heightProps.classNames);
	}

	if (undefined !== miw) {
		styles.minWidth = miw;
	}
	if (undefined !== mih) {
		styles.minHeight = mih;
	}
	if (undefined !== maw) {
		styles.maxWidth = maw;
	}
	if (undefined !== mah) {
		styles.maxHeight = mah;
	}

	if (undefined !== padding || undefined !== paddings) {
		const paddingProps = getPaddingProps(padding, paddings);

		styles = { ...styles, ...paddingProps.styles };
		utilityClasses.push(...paddingProps.classNames);
		// dataProps.push(...paddingProps.dataProps);
	}

	if (undefined !== margin || undefined !== margins) {
		const marginProps = getMarginProps(margin, margins);

		styles = { ...styles, ...marginProps.styles };
		utilityClasses.push(...marginProps.classNames);
	}

	if (undefined !== cbox) {
		if (cboxKeywords.includes(cbox)) {
			utilityClasses.push(`-cbox:${cbox}`);
		}
	}

	if (undefined !== fillColor) {
		if (cboxKeywords.includes(fillColor)) {
			utilityClasses.push(`-fill:${fillColor}`);
		} else {
			utilityClasses.push('-fill:');
			styles['--bgc'] = getMaybeColorVar(fillColor);
		}
	}

	if (undefined !== outlineColor) {
		if (cboxKeywords.includes(outlineColor)) {
			utilityClasses.push(`-outline:${outlineColor}`);
		} else {
			utilityClasses.push('-outline:');
			styles['--bdc'] = getMaybeColorVar(outlineColor);
		}
	}

	if (undefined !== color) {
		if (isPresetValue('color', color)) {
			utilityClasses.push(`-c:${color}`);
		} else if (isPresetValue('colorPallete', color)) {
			// パレットカラーもユーティリティ化するかは要検討
			utilityClasses.push('-c:');
			styles['--c'] = 'var(--' + color.replace('.', '-') + ')';
		} else {
			styles['--c'] = color;
			// styles.color = color;
		}
	}

	if (undefined !== bgc) {
		if (isPresetValue('color', bgc)) {
			utilityClasses.push(`-bgc:${bgc}`);
		} else if (isPresetValue('colorPallete', bgc)) {
			utilityClasses.push('-bgc:');
			styles['--bgc'] = 'var(--' + bgc.replace('.', '-') + ')';
		} else {
			styles['--bgc'] = bgc;
			// styles.backgroundColor = bgc;
		}
	}
	if (undefined !== bdc) {
		if (isPresetValue('color', bdc)) {
			utilityClasses.push(`-bdc:${bdc}`);
		} else if (isPresetValue('colorPallete', bdc)) {
			utilityClasses.push('-bdc:');
			styles['--bdc'] = 'var(--' + bdc.replace('.', '-') + ')';
		} else {
			styles['--bdc'] = bdc;
			// styles.backgroundColor = bdc;
		}
	}

	if (undefined !== radius) {
		if (isPresetValue('radius', radius)) {
			utilityClasses.push(`-bdrs:${radius}`);
		} else {
			styles.borderRadius = radius;
		}
	}

	if (undefined !== shadow) {
		if (isPresetValue('shadow', shadow)) {
			utilityClasses.push(`-bxsh:${shadow}`);
		} else {
			styles.boxShadow = shadow;
		}
	}

	if (undefined !== ta) {
		if (isPresetValue('ta', ta)) {
			utilityClasses.push(`-ta:${ta[0]}`);
		} else {
			styles.textAlign = ta;
		}
	}

	if (undefined !== fz) {
		if (isPresetValue('fz', fz)) {
			utilityClasses.push(`-fz:${fz}`);
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
	// 	utilityClasses += ` -lh:${lh}`;
	// } else if (lh) {
	// 	style.lineHeight = lh;
	// }

	// if (undefined !== fz && FZ_PRESETS.includes(fz)) {
	// 	utilityClasses.push(`-fz:${fz}`);
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
		className: classnames(className, blockClass, lismClass, stateClasses, utilityClasses),
		style: filterEmptyObj(styles), // filterEmptyObj は最後にかける
		attrs: otherProps,
	};
}

// gta, gtasにして を {col, row} に分ける?
// gta,gtas,gtc,gtcs, gtr,gtrs ?
function getFlexGlidProps(props, isFlex, isGrid) {
	const { fxd, fxw, ...others } = props;
	let styles = {};
	const classNames = [];

	if (isFlex) {
		if (undefined !== fxw) {
			const util = getLayoutUtility('fxw', fxw);
			if (util) {
				classNames.push(`-fxw:${util}`);
			} else {
				styles.flexWrap = fxw;
			}
		}

		if (undefined !== fxd) styles['--fxd'] = fxd;
	}

	if (isGrid) {
		// gta,gtr,gtc は String || {_,sm,xs} でクエリ対応
		['gta', 'gtc', 'gtr'].forEach((propName) => {
			const propData = others[propName];
			if (undefined === propData) return;
			delete others[propName];

			if (typeof propData === 'string') {
				styles[`--${propName}`] = propData;
			} else if (typeof propData === 'object') {
				if (propData._) styles[`--${propName}`] = propData._;
				if (propData.sm) styles[`--${propName}--sm`] = propData.sm;
				if (propData.xs) styles[`--${propName}--xs`] = propData.xs;
			}
		});
	}

	// 共通処理
	// align-items, align-content,justify-content, justify-items
	['ai', 'ac', 'jc', 'ji'].forEach((propName) => {
		const propData = others[propName];
		if (undefined === propData) return;
		delete others[propName];

		const util = getLayoutUtility('layout', propData);
		if (util) {
			classNames.push(`-${propName}:${util}`);
		} else {
			// classNames.push(`-${propName}:`);
			styles[`--${propName}`] = propData;
		}
	});

	return { styles, classNames, others };
}

function getHoverClass(hover) {
	// let classNames = [];
	// let styles = {};
	if (typeof hover === 'string') {
		return `-hov:${hover}`;
	} else if (Array.isArray(hover)) {
		return hover.map((h) => `-hov:${h}`).join(' ');
	}
}
function getHoverProps(hover) {
	let classNames = [];
	let styles = {};
	if (typeof hover === 'string' || Array.isArray(hover)) {
		classNames.push(getHoverClass(hover));
	} else if (typeof hover === 'object') {
		if (hover.utility) {
			classNames.push(getHoverClass(hover.utility));
		}
		if (hover.c) {
			classNames.push('-hov:c:');
			styles['--hov--c'] = getMaybeColorVar(hover.c);
		}
		if (hover.bgc) {
			classNames.push('-hov:bgc:');
			styles['--hov--bgc'] = getMaybeColorVar(hover.bgc);
		}
		if (hover.bdc) {
			classNames.push('-hov:bdc:');
			styles['--hov--bdc'] = getMaybeColorVar(hover.bdc);
		}
		if (hover.shadow) {
			classNames.push('-hov:shadow:');
			styles['--hov--shadow'] = getMaybeShadowVar(hover.shadow);
		}
	}

	return { classNames, styles };
}
