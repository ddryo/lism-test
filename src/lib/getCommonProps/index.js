import {
	// PRESETS,
	filterEmptyObj,
	isPresetValue,
	getUtilVal,
	getMaybeSpaceVar,
	getMaybeColorVar,
	getMaybeShadowVar,
} from '../index.js';

// import { sortSpacingData } from './getSpacingProps';
// import sortGapData from './sortGapData';
import getPropBpObj from './getPropBpObj';
import classnames from 'classnames';

import PROP_LIST from './prop_list';
// import { default as getFlexClasses } from './getFlexClasses';

// import getMaybeSpaceVar from "./getMaybeSpaceVar.js";
// import { isShadowPresetValue } from './getMaybeShadowVar.js';
// import { isFzPresetValue } from './getMaybeFzVar.js';

// const BREAK_POINTS = PRESETS.breakPoints;

// const commonPropNames=[
// 'padding',
// ];

const isBaseBP = (bp) => {
	return '_' === bp;
};

const propFullNames = {
	padding: 'p',
	margin: 'm',
	border: 'bd',
	// width: 'w',
	// height: 'h',
};

class CommonProps {
	propList = {};
	styles = {};
	className = '';
	utilityClasses = []; // props解析処理で追加される
	attrs = {};

	constructor(props) {
		// 受け取るpropsとそうでないpropsを分ける
		const {
			forwardedRef,
			className,
			blockClass,
			lismClass,
			_util,
			// utility, // ユーザーがコンポーネントに指定できる?
			blockStyle = {},
			style = {},

			// state
			alignfull,
			alignwide,
			isFlow,
			isFlex,
			isGrid,
			isItem,
			isLinkbox,
			isConstrained,
			hasGutter,
			hasLayer,
			...others
		} = props;

		this.styles = { ...blockStyle, ...style };

		this.className = classnames(
			blockClass, // b--
			lismClass, // l--
			className, // ユーザー指定
			{
				'is--flex': isFlex || false,
				'is--grid': isGrid || false,
				'is--flow': isFlow || false,
				'is--item': isItem || false,
				'is--linkbox': isLinkbox || false,
				'is--constrained': isConstrained || false,
				'has--gutter': hasGutter || false,
				'has--layer': hasLayer || false,

				alignfull,
				alignwide,
			},
			_util
			// utility
		);

		// propsの処理
		if (others) {
			// padding, margin, border はフルネームも受け取れるように
			Object.keys(propFullNames).forEach((_name) => {
				if (null != others[_name]) {
					others[propFullNames[_name]] = others[_name];
					delete others[_name];
				}
			});

			this.attrs = others;

			// propリストのセット
			this.setPropList(isFlow, isFlex, isGrid, isItem);

			// props処理
			this.analyzeProps(others);
		}

		// ref
		if (undefined !== forwardedRef) {
			this.attrs.ref = forwardedRef;
		}
	}

	setPropList(isFlow, isFlex, isGrid, isItem) {
		if (isFlow) {
			this.propList = Object.assign(PROP_LIST.common, PROP_LIST.isFlow);
		} else if (isFlex) {
			this.propList = Object.assign(PROP_LIST.common, PROP_LIST.isFlexGrid, PROP_LIST.isFlex);
		} else if (isGrid) {
			this.propList = Object.assign(PROP_LIST.common, PROP_LIST.isFlexGrid, PROP_LIST.isGrid);
		} else {
			this.propList = PROP_LIST.common;
		}

		if (isItem) {
			this.propList = Object.assign(this.propList, PROP_LIST.isItem);
		}
	}

	analyzeProps(attrs) {
		const attrKeys = Object.keys(attrs);

		attrKeys.forEach((propName) => {
			if (propName === 'hover') {
				const propVal = this.extractProp(propName);
				this.setHoverProps(propVal);
				return;
			} else if ('cbox' === propName) {
				const propVal = this.extractProp(propName);
				if (isPresetValue('cbox', propVal)) {
					this.addUtil(`-cbox:${propVal}`);
				} else {
					this.addUtil(`-cbox:`);
					this.addStyle('--cbox', propVal);
				}
			}

			if (propFullNames[propName]) propName = propFullNames[propName];

			// Lismで処理する prop 以外はスキップ
			if (!this.propList[propName]) return;

			const propData = this.propList[propName] || {};

			// データ取得してattrsリストから削除
			const propVal = this.attrs[propName];
			delete this.attrs[propName];

			const { name, styleKey, BP, options } = propData;

			// styleへの出力のみ
			if (styleKey && !options) {
				// BP対応あり/なしで分岐
				if (BP) {
					const propVals = getPropBpObj(propVal);
					Object.keys(propVals).forEach((bp) => {
						const styleName = isBaseBP(bp) ? `--${styleKey}` : `--${styleKey}--${bp}`;
						this.addStyle(styleName, propVals[bp]);
					});
				} else {
					this.addStyle(styleKey, propVal);
				}
			} else if (BP) {
				this.setAttrsByBpObj(name || propName, getPropBpObj(propVal), options);
			} else {
				this.swichAttrs(name || propName, propVal, options);
			}
		});
	}

	addUtil(util) {
		this.utilityClasses.push(util);
	}
	addUtils(utils) {
		this.utilityClasses.push(...utils);
	}
	// addState(state) {
	// 	this.stateClasses.push(state);
	// }
	addStyle(name, val) {
		this.styles[name] = val;
	}
	addStyles(styles) {
		this.styles = { ...this.styles, ...styles };
	}
	addAttrs(data) {
		this.addStyles(data.styles || {});
		this.addUtils(data.utils || []);
	}
	extractProp(propName) {
		let data = this.attrs[propName];
		if (undefined === this.attrs[propName]) {
			return null;
		}

		delete this.attrs[propName];
		return data;
	}
	extractProps(propNames) {
		const data = {};
		propNames.forEach((propName) => {
			if (undefined !== this.attrs[propName]) {
				data[propName] = this.attrs[propName];
				delete this.attrs[propName];
			}
		});
		return data;
	}

	setHoverClass(hovClass) {
		if (typeof hovClass === 'string') {
			this.addUtil(`-hov:${hovClass}`);
		} else if (Array.isArray(hovClass)) {
			this.addUtil(hovClass.map((h) => `-hov:${h}`).join(' '));
		}
	}

	setHoverProps(hover) {
		if (!hover) return;

		if (typeof hover === 'string' || Array.isArray(hover)) {
			this.setHoverClass(hover);
		} else if (typeof hover === 'object') {
			if (hover?.utility) {
				this.setHoverClass(hover.utility);
			}
			if (hover?.c) {
				this.addUtil('-hov:c:');
				this.addStyle('--hov--c', getMaybeColorVar(hover.c));
			}
			if (hover?.bgc) {
				this.addUtil('-hov:bgc:');
				this.addStyle('--hov--bgc', getMaybeColorVar(hover.bgc));
			}
			if (hover?.bdc) {
				this.addUtil('-hov:bdc:');
				this.addStyle('--hov--bdc', getMaybeColorVar(hover.bdc));
			}
			if (hover?.shadow) {
				this.addUtil('-hov:shadow:');
				this.addStyle('--hov--shadow', getMaybeShadowVar(hover.shadow));
			}
		}
	}

	// 方向成分などがなく、値をそのまま処理できるprop.
	// data: {_, sm, md, ...} 形式で渡ってくる.
	setAttrsByBpObj(name, data, options = {}) {
		const { skipBaseUtil, presets, utilKeys, converter, objProcessor } = options;

		Object.keys(data).forEach((bp) => {
			const val = data[bp];
			const switchOption = { presets, utilKeys, converter, skipBaseUtil };

			// 方向成分を持つ場合の処理
			if (typeof val === 'object') {
				if (objProcessor) {
					Object.keys(val).forEach((d) => {
						const { name, options } = objProcessor(d);
						const _options = options
							? Object.assign(switchOption, options)
							: switchOption;

						if (isBaseBP(bp)) {
							this.swichAttrs(name, val[d], _options);
						} else {
							this.swichAttrsAtBP(name, val[d], bp, _options);
						}
					});
				}
			} else {
				// this.setSwichUtilStyle(name, val, switchOption);
				if (isBaseBP(bp)) {
					this.swichAttrs(name, val, switchOption);
				} else {
					this.swichAttrsAtBP(name, val, bp, switchOption);
				}
			}
		});
	}

	// utilクラスを追加するか、styleにセットするかの分岐処理 @base
	swichAttrs(name, val, options = {}) {
		if (!name || null == val) return;

		const { presets, utilKeys, styleKey, onlyStyle, skipBaseUtil, converter } = options;
		const styleName = styleKey || `--${name}`;
		const utilName = `-${name}:`;

		// '-' : CSSファイル側に任せたいときに使う
		if ('-' === val) {
			this.addUtil(utilName);
			return;
		}

		// util化できるかチェック
		let utilVal = '';
		if (presets && isPresetValue(presets, val)) {
			this.addUtil(`${utilName}${val}`);
			return;
		}
		if (utilKeys) {
			utilVal = getUtilVal(utilKeys, val);
			if (utilVal) {
				this.addUtil(`${utilName}${utilVal}`);
				return;
			}
		}

		// getMaybe...を通す
		val = converter ? converter(val) : val;

		if (onlyStyle || skipBaseUtil) {
			this.addStyle(styleName, val);
		} else {
			this.addUtil(utilName);
			this.addStyle(styleName, val);
		}
	}

	swichAttrsAtBP(name, val, bp, options = {}) {
		if (!name || null == val) return;
		const { converter } = options;

		const utilName = `-${name}@${bp}:`;
		const styleName = `--${name}--${bp}`;

		// '-' : CSSファイル側に任せたいときに使う
		if ('-' === val) {
			this.addUtil(utilName);
			return;
		}

		// getMaybe...を通す
		val = converter ? converter(val) : val;
		this.addUtil(utilName);
		this.addStyle(styleName, val);
	}
}

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
	// const beforeMethod = performance.now();

	props = { ...options, ...props }; // options:初期値などが渡ってくる

	if (props.length === 0) {
		return {
			className: '',
			style: {},
			attrs: {},
		};
	}

	const CP = new CommonProps(props);

	// const afterMethod = performance.now();
	// const theTime = afterMethod - beforeMethod;
	// if (theTime > 0) {
	// console.log('TIME ' + theTime + ' ms');
	// }

	return {
		className: classnames(CP.className, CP.utilityClasses),
		style: filterEmptyObj(CP.styles), //filterEmptyObj(styles), // filterEmptyObj は最後にかける
		attrs: CP.attrs, // 処理されずに残っているprops
	};
}
