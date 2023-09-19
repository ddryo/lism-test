import {
	filterEmptyObj,
	isPresetValue,
	getUtilValue,
	getMaybeColorVar,
	getMaybeShadowVar,
	// getMaybeSpaceVar,
} from '../index.js';

import PROP_LIST from './prop_list';
import getPropBpObj from '../helper/getPropBpObj';
import classnames from 'classnames';

const isBaseBP = (bp) => {
	return '_' === bp;
};

const propFullNames = {
	padding: 'p',
	margin: 'm',
	// border: 'bd',
	// width: 'w',
	// height: 'h',
};

class CommonProps {
	// propList = {};
	// styles = {};
	// className = '';
	// utilityClasses = []; // props解析処理で追加される
	// attrs = {};

	constructor(props) {
		// 初期化
		this.propList = {};
		this.styles = {};
		this.className = '';
		this.utilityClasses = []; // props解析処理で追加される
		this.attrs = {};

		// 受け取るpropsとそうでないpropsを分ける
		const {
			forwardedRef,
			className,
			blockClass,
			lismClass,
			lismModifier,
			// modifier,
			_util,
			// utility, // ユーザーがコンポーネントに指定できる?
			lismStyle = {},
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
			useFlexProps,
			useGridProps,
			useItemProps,
			hasGutter,
			hasLayer,
			hasLismVar,
			useLog,
			...others
		} = props;

		this.styles = { ...lismStyle, ...style };

		// use=['layout', 'color', 'bd' ...]とかで使うprop指定?
		this.className = classnames(
			blockClass, // b--
			lismClass, // l--
			lismModifier,
			{
				'is--flex': isFlex,
				'is--grid': isGrid,
				'is--flow': isFlow || false,
				// 'is--item': isItem || false,
				'is--linkbox': isLinkbox || false,
				'is--constrained': isConstrained || false,
				'has--gutter': hasGutter || false,
				'has--layer': hasLayer || false,
				'-lism:': hasLismVar || false,
				// 'has--lismVar': hasLismVar || false,

				alignfull,
				alignwide,
			},
			className, // ユーザー指定
			_util
			// utility
		);

		// propsの処理
		if (others) {
			// padding, margin, border はフルネームも受け取れるように？
			// Object.keys(propFullNames).forEach((_name) => {
			// 	if (null != others[_name]) {
			// 		others[propFullNames[_name]] = others[_name];
			// 		delete others[_name];
			// 	}
			// });

			this.attrs = others;

			// propリストのセット
			// if (useLog) console.log('this.propList before', this.propList);
			this.setPropList(
				isFlow,
				isFlex || useFlexProps,
				isGrid || useGridProps,
				useItemProps,
				useLog
			);
			// if (useLog) console.log('this.propList after', this.propList, PROP_LIST.common);

			// props処理
			this.analyzeProps(others);
		}

		// ref
		if (undefined !== forwardedRef) {
			this.attrs.ref = forwardedRef;
		}
	}

	setPropList(isFlow, isFlex, isGrid, isItem, useLog) {
		let thePropList = {};

		if (isFlow) {
			thePropList = Object.assign({}, PROP_LIST.common, PROP_LIST.isFlow);
		} else if (isFlex) {
			thePropList = Object.assign(
				{},
				PROP_LIST.common,
				// PROP_LIST.isFlexGrid,
				PROP_LIST.isFlex
			);
		} else if (isGrid) {
			thePropList = Object.assign(
				{},
				PROP_LIST.common,
				// PROP_LIST.isFlexGrid,
				PROP_LIST.isGrid
			);
		} else {
			thePropList = Object.assign({}, PROP_LIST.common);
		}

		// なくす？
		// if (isItem) {
		// 	thePropList = Object.assign({}, thePropList, PROP_LIST.isItem);
		// }

		// if (useLog) console.log('thePropList', thePropList);

		this.propList = thePropList;
	}

	// prop解析
	analyzeProps(attrs) {
		const attrKeys = Object.keys(attrs);

		attrKeys.forEach((propName) => {
			// 特殊系
			if (propName === 'hover') {
				const propVal = this.extractProp(propName);
				this.setHoverProps(propVal);
				return;
			}

			if (propName === 'lismVar') {
				const propVal = this.extractProp(propName);
				const data = getPropBpObj(propVal);
				Object.keys(data).forEach((bp) => {
					const styleName = isBaseBP(bp) ? '--lism' : `--lism--${bp}`;
					this.addStyle(styleName, data[bp]);
				});
				return;
			}

			if (propFullNames[propName]) propName = propFullNames[propName];

			// Lismで処理する prop 以外はここでスキップ
			if (!this.propList[propName]) return;

			const propData = this.propList[propName] || {};

			// データ取得してattrsリストから削除
			const propVal = this.attrs[propName];
			delete this.attrs[propName];

			// const { BP, ...options } = propData;

			// BP対応あり/なしで分岐
			if (propData.BP) {
				this.setAttrsByBpObj(propName, getPropBpObj(propVal), propData);
			} else {
				this.swichAttrs(propName, propVal, propData);
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

	// data: 事前に getPropBpObjしている
	// data: {_, sm, md, ...} 形式で渡ってくる.
	setAttrsByBpObj(name, data, options = {}) {
		//testing

		// objProcessorはここで剥がしておく
		const { objProcessor, ...propData } = options;

		Object.keys(data).forEach((bp) => {
			const val = data[bp];

			// 方向成分を持つ場合の特殊処理
			if (typeof val === 'object') {
				if (!objProcessor) return;

				Object.keys(val).forEach((d) => {
					const _options = Object.assign(propData, objProcessor(d));

					if (isBaseBP(bp)) {
						this.swichAttrs(name, val[d], _options);
					} else {
						this.swichAttrsAtBP(name, val[d], bp, _options);
					}
				});
			} else {
				// this.setSwichUtilStyle(name, val, switchOption);
				if (isBaseBP(bp)) {
					this.swichAttrs(name, val, propData);
				} else {
					this.swichAttrsAtBP(name, val, bp, propData);
				}
			}
		});
	}

	// utilクラスを追加するか、styleにセットするかの分岐処理 @base
	swichAttrs(name, val, options = {}) {
		if (null == val) return;

		const {
			presets,
			utilKey,
			utilVals,
			styleKey,
			withUtil = 1,
			// onlyStyle,
			// skipBaseUtil,
			converter,
		} = options;

		const styleName = styleKey || (!withUtil ? name : `--${name}`);
		const utilName = `-${utilKey || name}:`;

		// 旧
		// if (options.onlyStyle) withUtil = false;
		// if (options.skipBaseUtil) withUtil = 'BP';

		// '-' : CSSファイル側に任せたいときに使う
		if (withUtil && '-' === val) {
			this.addUtil(utilName);
			return;
		}

		// util化できるか, presetsとutilValsでチェック.
		if (presets && isPresetValue(presets, val)) {
			this.addUtil(`${utilName}${val}`);
			return;
		}

		if (utilVals) {
			// const utilVal = utilVals?.[val];
			const utilVal = getUtilValue(utilVals, val);
			if (utilVal) {
				this.addUtil(`${utilName}${utilVal}`);
				return;
			}
		}

		// converter(getMaybe...)があればそれを通す
		val = converter ? converter(val) : val;

		// styleのみ or utilクラスも使うかどうか
		if (!withUtil || 'BP' === withUtil) {
			this.addStyle(styleName, val);
		} else {
			this.addUtil(utilName);
			this.addStyle(styleName, val);
		}
	}

	// BP指定のprop。
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

	// CP.attrs['data-lism-prop'] = CP.utilityClasses;

	return {
		className: classnames(CP.className, CP.utilityClasses),
		style: filterEmptyObj(CP.styles), //filterEmptyObj(styles), // filterEmptyObj は最後にかける
		attrs: CP.attrs, // 処理されずに残っているprops
	};
}
