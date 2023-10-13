// 核となる処理
export { default as getBpData } from './getBpData';
export { default as getLismMainProp } from './getLismMainProp';
export { default as getLismProps } from './getLismProps';

// ヘルパー関数
export { default as isEmptyObj } from './helper/isEmptyObj';
export { default as filterEmptyObj } from './helper/filterEmptyObj';

import { PRESETS, UTILITIES } from '@/config';

// value: object
// export const addObjData = (obj, key, value) => {
// 	if (typeof value === 'object') {
// 		obj[key] = Object.assign({}, obj[key], value);
// 	}

// 	return obj;
// };

export const addObjData = (obj, key, value) => {
	if (typeof value === 'object') {
		obj[key] = Object.assign({}, obj[key], value);
	}

	return obj;
};

function isNumStr(val) {
	if (typeof val !== 'string') return false;
	return !isNaN(Number(val));
}

// プリセット値を配列で定義しているもののチェック
export const isPresetValue = (presets, value) => {
	let presetValues = [];
	if (typeof presets === 'string') {
		presetValues = PRESETS[presets];
	} else {
		presetValues = presets;
	}

	if (!Array.isArray(presetValues)) return false;

	// 数値の時は文字列化してから判定
	if (typeof value === 'number') {
		return presetValues.includes(`${value}`);
	}
	return presetValues.includes(value);
};

// ユーティリティ化できるキーワードのチェック
export const getUtilValue = (utils, value) => {
	let utilValues = '';
	if (typeof utils === 'string') {
		utilValues = UTILITIES[utils];
	} else {
		utilValues = utils;
	}

	// 数値→文字列化 ← しない。 spaceプリセット受け取りたい時に 数値 と文字列で分けれるようにするため。
	// if (typeof value === 'number') {
	// 	value = `${value}`;
	// }

	// fullname
	if (utilValues?.[value]) {
		return utilValues[value];
	}

	// shortname
	if (Object.values(utilValues).includes(value)) {
		return value;
	}

	return '';
};

// console.log('Number10%', Number('10%'));
export function getMaybeSpaceVar(space) {
	// spaceが 整数 or 整数を示す文字列 の場合
	// if (isPresetValue('space', space)) {
	if (typeof space === 'number' || isNumStr(space)) {
		return `var(--space--${space})`;
	}

	/* eslint-disable-next-line  eqeqeq */
	// if (null == space) return false;

	// それ以外はそのまま返す
	return space;
}

export function getMaybeColorVar(color, type) {
	// color に ':' が含まれているか
	if (color?.includes(':')) {
		const [colorName, alpha] = color.split(':');
		return `hsl(var(--hsl--${colorName}) / ${alpha})`;
	}

	if (isPresetValue('color', color)) {
		return `var(--${color})`;
	} else if (type && isPresetValue(type, color)) {
		return `var(--${type}--${color})`;
	}
	//  else if (isPresetValue('keycolor', color)) {
	// 	return 'var(--c--' + color + ')';
	// } else if (isPresetValue(VAR_PRESETS.color, color)) {
	// 	return 'var(--c--' + color + ')';
	// }

	return color;
}

export function getMaybeSizeVar(size) {
	if (isPresetValue('contentSize', size)) {
		return `var(--contentSize--${size})`;
	}
	// else if (isPresetValue('size', size)) {
	// 	return `var(--size--${size})`;
	// }

	return size;
}

// export function getMaybeFzVar(fz) {
// 	if (isPresetValue('fz', fz)) {
// 		return 'var(--fz--' + fz + ')';
// 	}
// 	return fz;
// }

// export function getMaybeRadiusVar(radius) {
// 	if (isPresetValue('radius', radius)) {
// 		return 'var(--radius--' + radius + ')';
// 	}
// 	return radius;
// }

export function getMaybeShadowVar(shadow) {
	if (isPresetValue('shadow', shadow)) {
		return 'var(--shadow--' + shadow.replace('-', 'i') + ')';
	}
	return shadow;
}

export function getMaybeFzVar(fz) {
	if (isPresetValue('fz', fz)) {
		return 'var(--fz--' + fz + ')';
	}
	return fz;
}

export function getMaybeBgVar(bg) {
	if (bg?.includes('gradient:')) {
		const gradKeys = bg.split(':');
		return `var(--gradient--${gradKeys[1]})`;
	}
	return bg;
}
