import { PRESETS, VAR_PRESETS } from './config';

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
// export const getUtilVal = (key, value) => {
// 	const utilValues = UTILITIES[key];
// 	return utilValues?.[value] || '';
// };

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

export function getMaybeColorVar(color) {
	if (isPresetValue('color', color)) {
		return 'var(--c--' + color + ')';
	} else if (isPresetValue('keycolor', color)) {
		return 'var(--c--' + color + ')';
	} else if (isPresetValue(VAR_PRESETS.color, color)) {
		return 'var(--c--' + color + ')';
	}

	return color;
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
