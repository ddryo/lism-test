import {
	// PRESETS,
	filterEmptyObj,
	isPresetValue,
	getUtilVal,
	getMaybeSpaceVar,
	getMaybeColorVar,
	getMaybeShadowVar,
} from '../index.js';

import { sortSpacingData } from './getSpacingProps';
import sortGapData from './sortGapData';
import getPropBpObj from './getPropBpObj';
import classnames from 'classnames';

// import { default as getFlexClasses } from './getFlexClasses';

// import getMaybeSpaceVar from "./getMaybeSpaceVar.js";
// import { isShadowPresetValue } from './getMaybeShadowVar.js';
// import { isFzPresetValue } from './getMaybeFzVar.js';

// const BREAK_POINTS = PRESETS.breakPoints;

// const commonPropNames=[
// 'padding',
// ];

class CommonProps {
	styles = {};
	utilityClasses = [];
	props;
	constructor(props) {
		// 受け取るpropsとそうでないpropsを分ける
		const {
			// className = '',
			// blockClass = '',
			// _stateClass = '',// Lism内部で使う
			_utils = [], // Lism内部で使う
			utility = '', // ユーザーがコンポーネントに指定できる
			forwardedRef,
			style = {},
			...others
		} = props;

		this.styles = style;
		this.utilityClasses = [utility, ..._utils];

		if (undefined !== forwardedRef) {
			others.ref = forwardedRef;
		}

		this.props = others;
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
		let data = this.props[propName];
		if (undefined === this.props[propName]) {
			return null;
		}

		delete this.props[propName];
		return data;
	}
	extractProps(propNames) {
		const data = {};
		propNames.forEach((propName) => {
			if (undefined !== this.props[propName]) {
				data[propName] = this.props[propName];
				delete this.props[propName];
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
		if (typeof hover === 'string' || Array.isArray(hover)) {
			this.setHoverClass(hover);
		} else if (typeof hover === 'object') {
			if (hover.utility) {
				this.setHoverClass(hover.utility);
			}
			if (hover.c) {
				this.addUtil('-hov:c:');
				this.addStyle('--hov--c', getMaybeColorVar(hover.c));
			}
			if (hover.bgc) {
				this.addUtil('-hov:bgc:');
				this.addStyle('--hov--bgc', getMaybeColorVar(hover.bgc));
			}
			if (hover.bdc) {
				this.addUtil('-hov:bdc:');
				this.addStyle('--hov--bdc', getMaybeColorVar(hover.bdc));
			}
			if (hover.shadow) {
				this.addUtil('-hov:shadow:');
				this.addStyle('--hov--shadow', getMaybeShadowVar(hover.shadow));
			}
		}
	}

	// 方向成分などがなく、値をそのまま処理できるprop.
	// data: {_, sm, md, ...} 形式で渡ってくる.
	setAttrsByBpObj(data, name, skipBaseUtil = false) {
		Object.keys(data).forEach((bp) => {
			if ('_' === bp) {
				if (!skipBaseUtil) this.addUtil(`-${name}:`);
				this.addStyle(`--${name}`, data[bp]);
			} else {
				this.addUtil(`-${name}@${bp}:`);
				this.addStyle(`--${name}--${bp}`, data[bp]);
			}
		});
	}

	// utilクラスを追加するか、styleにセットするかの分岐処理
	setSwichUtilStyle(name, val, options = {}) {
		let util = '';

		const { presetCheckKey, utilCheckKey, styleName } = options;
		if (presetCheckKey && isPresetValue(presetCheckKey, val)) {
			util = val;
		} else if (utilCheckKey) {
			util = getUtilVal(utilCheckKey, val);
		}

		if (util) {
			this.addUtil(`-${name}:${util}`);
		} else if (styleName) {
			this.addStyle(styleName, val);
		} else {
			this.addUtil(`-${name}:`);
			this.addStyle(`--${name}`, val);
		}
	}

	setColorProps(name, val, useUtil = true) {
		if (useUtil && isPresetValue('color', val)) {
			this.addUtil(`-${name}:${val}`);
		} else if (isPresetValue('colorPallete', val)) {
			// パレットカラーもユーティリティ化するかは要検討
			const palleteColor = val.replace('.', '-');
			this.addStyle(`--${name}`, `var(--${palleteColor})`);
			this.addUtil(`-${name}:`);
		} else {
			this.addStyle(`--${name}`, getMaybeColorVar(val));
			this.addUtil(`-${name}:`);
			// styles.color = color;
		}
	}
}

const PROP_LIST = {
	toStyle: {
		maxW: 'maxWidth',
		minW: 'minWidth',
		maxH: 'maxHeight',
		minH: 'minHeight',
		// border: 'border',
		// bdw: 'borderWidth',
		opacity: 'opacity',
		lts: 'letterSpacing', // utilityあってもいい
		fw: 'fontWeight', // utilityあってもいい
	},

	// isItem時、toStyle へマージ. 省略型の as, js は分かりづらいので、alignSelf, justifySelf で。
	selfPlace: {
		alignSelf: 'alignSelf',
		justifySelf: 'justifySelf',
	},

	// クエリ対応なしで、ユーティリティ化し得るもの
	hasUtil: {
		mbs: { name: 'mbs', options: { presetCheckKey: 'space' } },
		radius: { name: 'bdrs', options: { presetCheckKey: 'radius' } },
		shadow: { name: 'bxsh', options: { presetCheckKey: 'shadow' } },
		lh: { name: 'lh', options: { presetCheckKey: 'lh' } },
		fz: { name: 'fz', options: { presetCheckKey: 'fz' } },
		ta: { name: 'ta', options: { utilCheckKey: 'ta', styleName: 'textAlign' } },
		fxw: { name: 'fxw', options: { utilCheckKey: 'wrap' } },
		ga: { name: 'ga', options: { presetCheckKey: 'ga' } }, // grid-area
	},
	place: {
		ai: { name: 'ai', options: { utilCheckKey: 'place', styleName: 'alignItems' } },
		ac: { name: 'ac', options: { utilCheckKey: 'place', styleName: 'alignContent' } },
		ji: { name: 'ji', options: { utilCheckKey: 'place', styleName: 'justifyItems' } },
		jc: { name: 'jc', options: { utilCheckKey: 'place', styleName: 'justifyContent' } },
	},

	// クエリ対応するが、ユーティリティ化しないもの
	hasBp_noUtil: {
		fxd: 'fxd',
		gta: 'gta',
		gtc: 'gtc',
		gtr: 'gtr',
	},
	hasBp_noUtil_isItem: {
		// flex: 'fx',
		fx: 'fx',
		fxg: 'fxg',
		fxsh: 'fxsh',
		fxb: 'fxb',
		gc: 'gc',
		gr: 'gr',
	},
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
	props = { ...options, ...props }; // options:初期値などが渡ってくる

	const {
		className = '',
		blockClass = '',
		lismClass = '',
		// stateClass = '',
		alignfull,
		alignwide,
		isFlow,
		isFlex,
		isGrid,
		isItem,
		isConstrained,
		hasGutter,
		// style = {},
		...others
	} = props;

	const commonProps = new CommonProps(others);

	// 非省略形→省略系に変換？
	// border: bd
	// width: w, ....

	const stateClass = classnames({
		'is--flex': isFlex || false,
		'is--grid': isGrid || false,
		'is--flow': isFlow || false,
		'is--item': isItem || false,
		'is--constrained': isConstrained || false,
		'has--gutter': hasGutter || false,
		alignfull,
		alignwide,
	});

	if (isItem) {
		PROP_LIST.toStyle = {
			...PROP_LIST.toStyle,
			...PROP_LIST.selfPlace,
		};
		PROP_LIST.hasBp_noUtil = {
			...PROP_LIST.hasBp_noUtil,
			...PROP_LIST.hasBp_noUtil_isItem,
		};
	}
	if (isFlow) {
		const flowGap = commonProps.extractProp('flowGap');
		if (flowGap !== null) {
			// flowGap: sm, md, lg とかにする？
			// if (isPresetValue('space', gap)) {commonProps.addUtil(`-flowGap:${gap}`);}
			commonProps.addUtil(`-flowGap:`);
			commonProps.addStyle('--flowGap', getMaybeSpaceVar(flowGap));
		}
	} else if (isFlex || isGrid) {
		PROP_LIST.hasUtil = {
			...PROP_LIST.hasUtil,
			...PROP_LIST.place,
		};

		// gap
		const gap = commonProps.extractProp('gap');
		if (gap !== null) {
			const gaps = getPropBpObj(gap);
			Object.keys(gaps).forEach((bp) => {
				commonProps.addAttrs(sortGapData(gaps[bp], `@${bp}`));
			});
		}
	}

	for (let propName in commonProps.props) {
		// Object.entries(commonProps.props).forEach(([propName, propVal]) => {

		if (PROP_LIST.toStyle[propName]) {
			const propVal = commonProps.extractProp(propName);
			commonProps.addStyle(PROP_LIST.toStyle[propName], propVal);
			continue;
		}

		if (PROP_LIST.hasUtil[propName]) {
			const _prop = PROP_LIST.hasUtil[propName];
			const propVal = commonProps.extractProp(propName);
			commonProps.setSwichUtilStyle(_prop.name, propVal, _prop.options);
			continue;
		}

		// query対応のprops(一括指定プロパティではないもの)で、ユーティリティ化しないもの、かつ @base時の .-hoge: を出力しないもの
		if (PROP_LIST.hasBp_noUtil[propName]) {
			const propVal = commonProps.extractProp(propName);
			commonProps.setAttrsByBpObj(getPropBpObj(propVal), propName, true);
			continue;
		}

		switch (propName) {
			case 'c':
			case 'bgc':
			case 'bdc': {
				const useUtil = 'bdc' === propName ? false : true;
				const propVal = commonProps.extractProp(propName);
				commonProps.setColorProps(propName, propVal, useUtil);
				break;
			}

			// 単純に .-hoge:, --hoge でセットするだけのpropsたち
			case 'bd':
			case 'bdw': {
				const propVal = commonProps.extractProp(propName);
				commonProps.addUtil(`-${propName}:`);
				commonProps.addStyle(`--${propName}`, propVal);
				break;
			}

			// case 'mbs': {
			// 	// query対応する？
			// }

			// query対応のprops(一括指定プロパティではないもの)
			case 'w':
			case 'h': {
				const propVal = commonProps.extractProp(propName);
				commonProps.setAttrsByBpObj(getPropBpObj(propVal), propName);
				break;
			}

			case 'p':
			case 'm':
			case 'padding':
			case 'margin': {
				const propVal = commonProps.extractProp(propName);
				const spaces = getPropBpObj(propVal);
				Object.keys(spaces).forEach((bp) => {
					const _data = sortSpacingData(propName[0], spaces[bp], `@${bp}`);
					commonProps.addAttrs(_data);
				});
				break;
			}
			case 'cbox': {
				const propVal = commonProps.extractProp(propName);
				if (isPresetValue('cbox', propVal)) {
					commonProps.addUtil(`-cbox:${propVal}`);
				} else {
					// エラー通知用のクラスを付与
					commonProps.addUtil(`-cbox:notSupportedKey`);
				}
				break;
			}

			case 'hover': {
				const propVal = commonProps.extractProp(propName);
				commonProps.setHoverProps(propVal);
				break;
			}
			// 他のケース
			default:
				break;
		}
	}

	if (isItem) {
		// item時の処理
	}

	return {
		className: classnames(
			className,
			blockClass, // b--
			lismClass, // l--
			stateClass, // is--, has--
			commonProps.utilityClasses
		),
		style: filterEmptyObj(commonProps.styles), //filterEmptyObj(styles), // filterEmptyObj は最後にかける
		attrs: commonProps.props, // 処理されずに残っているprops
	};
}
