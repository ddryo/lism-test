import { isPresetValue, getMaybeCssVar } from './index.js';

const LAYOUT_STATE = {
	'is--container': {
		varName: '--containerSize',
		tokenKey: 'contentSize',
		converter: null,
	},
	'is--constrained': {
		varName: '--contentSize',
		tokenKey: 'contentSize',
		converter: 'size',
	},
	'is--flow': {
		varName: '--flowGap',
		tokenKey: 'flow',
		converter: 'space',
	},
	// lismState.push(className
};

// 特殊な処理が必要なレイアウトステート
export default function getLayoutStateData(stateName, value) {
	const { varName, tokenKey, converter } = LAYOUT_STATE[stateName];
	let className = '';
	let style = null;

	if (value === true) {
		className = stateName;
	} else if (value) {
		if (tokenKey && isPresetValue(tokenKey, value)) {
			className = `${stateName}:${value}`;
		} else {
			className = `${stateName}:`;
			style = { [varName]: converter ? getMaybeCssVar(value, converter) : value };
		}
	}
	return { className, style };
}
