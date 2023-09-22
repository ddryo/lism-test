import {
	filterEmptyObj,
	isPresetValue,
	getUtilValue,
	getMaybeColorVar,
	getMaybeShadowVar,
	getMaybeSpaceVar,
} from '../index.js';

import PROP_LIST from './prop_list';
import getPropBpObj from '../helper/getPropBpObj';
import classnames from 'classnames';

const isBaseBP = (bp) => {
	return '_' === bp;
};

const CONVERTERS = {
	color: getMaybeColorVar,
	space: getMaybeSpaceVar,
};

// const PROP_FULL_NAMES = {
// 	padding: 'p',
// 	margin: 'm',
// };

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
			// isFlex,
			// isGrid,
			// isItem,
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
				'is--flow': isFlow || false,
				// 'is--flex': isFlex,
				// 'is--grid': isGrid,
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
			// Object.keys(PROP_FULL_NAMES).forEach((_name) => {
			// 	if (null != others[_name]) {
			// 		others[PROP_FULL_NAMES[_name]] = others[_name];
			// 		delete others[_name];
			// 	}
			// });

			this.attrs = others;

			// propリストのセット
			// if (useLog) console.log('this.propList before', this.propList);
			this.setPropList(useFlexProps, useGridProps, useItemProps, useLog);
			// if (useLog) console.log('this.propList after', this.propList, PROP_LIST.common);

			// props処理
			this.analyzeProps(others);

			if (isFlow && isFlow !== true) {
				this.swichAttrs('flowGap', isFlow);
			}
		}

		// ref
		if (undefined !== forwardedRef) {
			this.attrs.ref = forwardedRef;
		}
	}

	setPropList(useFlex, useGrid, useItem, useLog) {
		let thePropList = {};

		if (useFlex) {
			thePropList = Object.assign(
				{},
				PROP_LIST.common,
				// PROP_LIST.useFlexGrid,
				PROP_LIST.useFlex
			);
		} else if (useGrid) {
			thePropList = Object.assign(
				{},
				PROP_LIST.common,
				// PROP_LIST.useFlexGrid,
				PROP_LIST.useGrid
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
			// propListに入ってない特殊系
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

			// if (PROP_FULL_NAMES[propName]) propName = PROP_FULL_NAMES[propName];

			// Lismで処理する prop 以外はここでスキップ
			if (!this.propList[propName]) return;

			// value取得して attrsリストから削除しておく
			const propVal = this.attrs[propName];
			delete this.attrs[propName];

			this.analyzeProp(propName, propVal);
		});
	}

	// prop解析
	analyzeProp(propName, propVal) {
		// propデータ取得
		const propData = this.propList[propName] || null;
		if (null === propData) return; // 一応 nullチェックここでも

		// BP対応あり/なしで分岐
		if (propData.BP) {
			// 事前にBP指定用の {_, sm, md, ...} 形式に統一
			const valueData = getPropBpObj(propVal);

			// 各BP成分の処理
			Object.keys(valueData).forEach((bp) => {
				const val = valueData[bp];

				// 方向成分を持つ場合の特殊処理
				if (typeof val === 'object') {
					this.analyzeObjValue(val, propData.objProcessor);
				} else {
					this.swichAttrs(propName, val, bp);
				}
			});
		} else {
			// 方向成分を持つ場合の特殊処理
			if (typeof propVal === 'object') {
				this.analyzeObjValue(propVal, propData.objProcessor);
			} else {
				this.swichAttrs(propName, propVal);
			}
		}
	}

	// オブジェクト形式で方向成分を指定するような prop の解析
	analyzeObjValue(valueObj, objProcessor) {
		if (!objProcessor) return;

		Object.keys(valueObj).forEach((dataKey) => {
			// 指定された成分に対応する prop名 を取得
			const propName = objProcessor(dataKey);

			this.analyzeProps(propName, valueObj[dataKey]);
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
		this.addUtil(`-hov:${hovClass}`);
		// if (typeof hovClass === 'string') {
		// 	this.addUtil(`-hov:${hovClass}`);
		// } else if (Array.isArray(hovClass)) {
		// 	this.addUtil(hovClass.map((h) => `-hov:${h}`).join(' '));
		// }
	}

	setHoverProps(hover) {
		if (!hover) return;

		// 再帰処理
		if (Array.isArray(hover)) {
			hover.forEach((_hov) => {
				this.setHoverProps(_hov);
			});
		}

		if (typeof hover === 'string') {
			// this.setHoverClass(hover);
			this.addUtil(`-hov:${hover}`);
		} else if (typeof hover === 'object') {
			// if (hover?.utility) {
			// 	this.setHoverClass(hover.utility);
			// }
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

	// utilクラスを追加するか、styleにセットするかの分岐処理 @base
	swichAttrs(propName, val, bp) {
		if (null == val) return;

		// propListからそのpropの設定データを取得
		const options = this.propList[propName] || {};
		const { name = propName, utilKey } = options;

		let styleName = `--${name}`;
		let utilName = `-${utilKey || name}`;
		const isBP = bp && !isBaseBP(bp);

		if (isBP) {
			styleName += `--${bp}`;
			utilName += `@${bp}:`;
		} else {
			utilName += ':';
		}

		// ユーティリティクラス化できるかどうかをチェック
		if (!isBP) {
			let { presets, utilVals } = options;
			if (presets) {
				if (1 === presets) presets = propName; // 1 は prop名をそのままキーとして取得
				if (isPresetValue(presets, val)) {
					this.addUtil(`${utilName}${val}`);
					return;
				}
			}
			if (utilVals) {
				if (1 === utilVals) utilVals = propName; // 1 は prop名をそのままキーとして取得
				const utilVal = getUtilValue(utilVals, val);
				if (utilVal) {
					this.addUtil(`${utilName}${utilVal}`);
					return;
				}
			}
		}

		// 以下、ユーティリティクラス化できない場合の処理

		// .-prop: だけ出力するケース
		if (true === val || '-' === val) {
			this.addUtil(utilName);
			return;
		}

		let { style, converter } = options;

		// converter(getMaybe...)があればそれを通す
		if (converter) {
			converter = options.converter;
			if (typeof converter === 'string') {
				converter = CONVERTERS[converter];
			}
			val = converter(val);
		}

		// style のみ出力
		//     memo: --gtcなど、Noクエリの時に .-prop: 不要なケースがあるが、それを判定すると処理が複雑になるので一旦なくしている。
		//       (クラスがあったほうが上書き判定できて便利なケースもあるし...)
		if (style) {
			if (1 === style) style = propName; // 1 は prop名をそのままstyleとして使う
			this.addStyle(style, val);
			return;
		}

		// .-prop: & --prop で 出力
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
