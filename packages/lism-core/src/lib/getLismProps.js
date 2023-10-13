import {
	isPresetValue,
	getUtilValue,
	getMaybeColorVar,
	getMaybeShadowVar,
	getMaybeSpaceVar,
	getMaybeFzVar,
	getMaybeSizeVar,
	getMaybeBgVar,
} from './index.js';

import { PROPS, CONTEXT_PROPS } from '@/config';
import getBpData from './getBpData';
import filterEmptyObj from './helper/filterEmptyObj';
import isEmptyObj from './helper/isEmptyObj';

import classnames from 'classnames';

// const isBaseBP = (bp) => {
// 	return '_' === bp;
// };

const CONVERTERS = {
	color: getMaybeColorVar,
	space: getMaybeSpaceVar,
	fz: getMaybeFzVar,
	size: getMaybeSizeVar,
	bg: getMaybeBgVar,
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
		// this.propList = {};
		this.styles = {};
		this.className = '';
		this.utilityClasses = []; // props解析処理で追加される
		this.attrs = {};

		// 受け取るpropsとそうでないpropsを分ける
		const {
			className,
			style = {},
			forwardedRef,
			// _lism = {},
			blockClass,
			lismClass,
			lismStyle = {},
			lismState = [],

			// state
			alignfull,
			alignwide,
			isFlow,
			isItem,
			hasLayer,
			lismVar,
			...others
		} = props;

		// const { class: _lismClass = null, style: _lismStyle = {} } = _lism;

		this.styles = Object.assign({}, lismStyle, style);

		let lismClassNames = [];
		if (blockClass && typeof blockClass === 'string') {
			lismClassNames.push(blockClass);
		}

		if (lismClass && typeof lismClass === 'string') {
			lismClassNames.push(lismClass);
		}
		if (typeof lismClass === 'object') {
			['b', 'c', 'l', 'e', '_'].forEach((prefix) => {
				if (!lismClass[prefix]) return;
				lismClassNames.push(lismClass[prefix]);
			});
		}

		// use=['layout', 'color', 'bd' ...]とかで使うprop指定?
		this.className = classnames(
			className, // ユーザー指定のクラス
			lismClassNames, // l--
			{
				alignfull,
				alignwide,
				'is--flow': isFlow || false,
				'is--item': isItem || false,
				// 'is--linkbox': isLinkbox || false,
				// 'is--container': isContainer || false,
				// 'is--constrained': isConstrained || false,
			},
			lismState, // is, has
			{
				// 'has--gutter': hasGutter || false,
				'has--layer': hasLayer || false,
				// 'use:lismVar': lismVar || false,
			}
			// lismUtil
		);

		// propリストのセット
		// this.setPropList(useFlexProps, useGridProps, useItemProps, useLog);

		if (isFlow && isFlow !== true) {
			this.analyzeProp('flowGap', isFlow);
		}
		// if (flex) {
		// 	this.setContextProps('flex', flex);
		// }
		// if (grid) {
		// 	// grid系propを処理
		// 	this.setContextProps('grid', grid);
		// }

		if (lismVar) {
			this.addUtil('-lismVar:');
			const { _: baseValue, ...bpValues } = getBpData(lismVar);
			if (baseValue != null) {
				this.addStyle('--lism', baseValue);
			}
			Object.keys(bpValues).forEach((bp) => {
				this.addStyle(`--lism--${bp}`, bpValues[bp]);
			});
		}

		// propsの処理
		if (!isEmptyObj(others)) {
			// console.log('others', others);

			// padding, margin, border はフルネームも受け取れるように？
			// Object.keys(PROP_FULL_NAMES).forEach((_name) => {
			// 	if (null != others[_name]) {
			// 		others[PROP_FULL_NAMES[_name]] = others[_name];
			// 		delete others[_name];
			// 	}
			// });

			this.attrs = others;

			// props処理
			this.analyzeProps(others);
		}

		// ref
		if (undefined !== forwardedRef) {
			this.attrs.ref = forwardedRef;
		}
	}

	// 特定の条件下で受け取るpropの処理
	setContextProps(context, props) {
		if (typeof props !== 'object') return;

		const contextProps = CONTEXT_PROPS[context];
		if (!contextProps) return;

		Object.keys(props).forEach((propName) => {
			const propData = contextProps[propName];
			const propValue = props[propName];

			// console.log(propName, propValue, propData);
			this.analyzeProp(propName, propValue, propData);
		});
	}

	// setPropList(useFlex, useGrid, useItem, useLog) {
	// 	let thePropList = {};

	// 	if (useFlex) {
	// 		thePropList = Object.assign(
	// 			{},
	// 			PROPS.common,
	// 			// PROPS.useFlexGrid,
	// 			PROPS.useFlex
	// 		);
	// 	} else if (useGrid) {
	// 		thePropList = Object.assign(
	// 			{},
	// 			PROPS.common,
	// 			// PROPS.useFlexGrid,
	// 			PROPS.useGrid
	// 		);
	// 	} else {
	// 		thePropList = Object.assign({}, PROPS.common);
	// 	}

	// 	this.propList = thePropList;
	// }

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

			if (propName === 'gradient') {
				const propVal = this.extractProp(propName);
				this.setGradientProps(propVal);
				return;
			}

			// if (PROP_FULL_NAMES[propName]) propName = PROP_FULL_NAMES[propName];

			// Lismで処理する prop 以外はここでスキップ
			if (!PROPS[propName]) return;

			// value取得して attrsリストから削除しておく
			const propVal = this.attrs[propName];
			delete this.attrs[propName];

			this.analyzeProp(propName, propVal);
		});
	}

	// prop解析
	analyzeProp(propName, propVal, propData) {
		// propデータ取得
		propData = propData || PROPS[propName] || null;
		if (null === propData) return; // 一応 nullチェックここでも

		const { name, BP, objProcessor, map, ...options } = propData;

		// CONTET_PROPSからデータを取得する
		if (map && null != propVal) {
			this.setContextProps(propName, propVal);
			return;
		}

		// BP対応あり/なしで分岐
		if (BP) {
			// 事前にBP指定用の { sm, md, ...} 形式で取り出す
			const { _: baseValue, ...bpValues } = getBpData(propVal);
			propVal = baseValue;

			// 各BP成分の処理
			Object.keys(bpValues).forEach((bp) => {
				this.setAttrs(name || propName, bpValues[bp], options, bp);
			});
		}

		// 方向成分を持つ場合の特殊処理
		// context内のgapどうするかは要検討
		if (typeof propVal === 'object') {
			if (propName === 'bd') this.addUtil('-bd:');
			this.analyzeObjValue(propVal, objProcessor);
		} else {
			this.setAttrs(name || propName, propVal, options);
		}
	}

	// オブジェクト形式で方向成分を指定するような prop の解析
	analyzeObjValue(valueObj, objProcessor) {
		if (!objProcessor) return;

		Object.keys(valueObj).forEach((dataKey) => {
			// 指定された成分に対応する prop名 を取得
			const propName = objProcessor(dataKey);

			this.analyzeProp(propName, valueObj[dataKey]);
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

	// utilクラスを追加するか、styleにセットするかの分岐処理 @base
	setAttrs(name, val, options = {}, bp) {
		if (null == val) return;

		let styleName = `--${name}`;
		let utilName = `-${options.utilKey || name}`;
		// const isBP = bp && !isBaseBP(bp);

		if (bp) {
			styleName += `--${bp}`;
			utilName += `@${bp}:`;
		} else {
			utilName += ':';
		}

		// ユーティリティクラス化できるかどうかをチェック
		if (!bp) {
			let { presets, utils } = options;
			if (presets) {
				if (1 === presets) presets = name; // 1 は prop名をそのままキーとして取得
				if (isPresetValue(presets, val)) {
					this.addUtil(`${utilName}${val}`);
					return;
				}
			}
			if (utils) {
				if (1 === utils) utils = name; // 1 は prop名をそのままキーとして取得
				const utilVal = getUtilValue(utils, val);
				if (utilVal) {
					this.addUtil(`${utilName}${utilVal}`);
					return;
				}
			}
		}

		// 以下、ユーティリティクラス化できない場合の処理

		let { style, converter } = options;

		// .-prop: だけ出力するケース
		if ((!style && true === val) || '-' === val) {
			this.addUtil(utilName);
			return;
		}

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
			if (1 === style) style = name; // 1 は prop名をそのままstyleとして使う
			this.addStyle(style, val);
			return;
		}

		// .-prop: & --prop で 出力
		this.addUtil(utilName);
		this.addStyle(styleName, val);
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
			const { c, bgc, bdc, shadow } = hover;
			if (c) {
				this.addUtil('-hov:c:');
				this.addStyle('--hov--c', getMaybeColorVar(c, 'c'));
			}
			if (bgc) {
				this.addUtil('-hov:bgc:');
				this.addStyle('--hov--bgc', getMaybeColorVar(bgc, 'bgc'));
			}
			if (bdc) {
				this.addUtil('-hov:bdc:');
				this.addStyle('--hov--bdc', getMaybeColorVar(bdc, 'bdc'));
			}
			if (shadow) {
				this.addUtil('-hov:shadow:');
				this.addStyle('--hov--shadow', getMaybeShadowVar(shadow));
			}
		}
	}

	setGradientProps(gradVal) {
		// this.setHoverProps(gradVal);
		if (typeof gradVal === 'string') {
			if (isPresetValue('gradient', gradVal)) {
				this.addUtil('-gradient:' + gradVal);
			} else {
				this.addUtil('-gradient:');
				this.addStyle('--gradient', gradVal);
			}
			//  else if (gradVal.includes('-gradient(')) {
			// 	// xxx-gradient() で直接書いてる場合
			// 	this.addUtil('-gradient:');
			// 	this.addStyle('--gradient', gradVal);
			// } else {
			// 	this.addUtil('-gradient:');
			// 	this.addStyle('--gradient', `var(--gradient--${gradVal})`);
			// }
		} else if (typeof gradVal === 'object') {
			const { type = 'linear', angle, colors = '' } = gradVal;
			if (!colors) return;

			this.addUtil('-gradient:');
			let gradient = '';
			if (angle) {
				gradient += `${angle}, `;
			}
			if (colors.includes(',')) {
				gradient += colors;
			} else {
				gradient += `var(--gradient-color--${colors})`;
			}
			this.addStyle('--gradient', `${type}-gradient(${gradient})`);
		}

		return;
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
export default function getLismProps(props, options = {}) {
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
