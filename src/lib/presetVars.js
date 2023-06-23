export const PRESETS = {
	color: ['main', 'sub', 'base', 'baseSub', 'accent', 'link', 'text', 'gray', 'white', 'black'],
	fz: ['6L', '5L', '4L', '3L', '2L', 'L', 'S', '2S', 'R'],
	radius: ['xs', 'sm', 'md', 'lg', 'xl', 'circle'],
	shadow: ['solid', 'sm', 'md', 'lg'],
	space: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
};

// function isNumStr(val) {
// 	if (typeof val !== 'string') return false;
// 	return !isNaN(Number(val));
// }

export const isPresetValue = (key, value) => {
	return PRESETS[key].includes(value);
};

export const isSpacePresetValue = (value, presetList) => {
	presetList = presetList || PRESETS.space;
	if (typeof value === 'number') {
		// 文字列化して判定
		return presetList.includes(`${value}`);
	} else if (typeof value === 'string') {
		return presetList.includes(value);
	}
	return false;
};

// console.log('Number10%', Number('10%'));
export function getMaybeSpaceVar(space) {
	// spaceが 整数 or 整数を示す文字列 の場合
	if (isSpacePresetValue(space)) {
		return `var(--s--${space})`;
	}

	// オブジェクトで渡ってきてしまっていれば、それを知らせる変数名で返す
	if (typeof space === 'object') return 'var(--error--objectPassed)';

	/* eslint-disable-next-line  eqeqeq */
	// if (null == space) return false;

	// それ以外はそのまま返す
	return space;
}

// export function getMaybeColorVar(color) {
// 	if (isPresetValue('color', color)) {
// 		return 'var(--ls--color--' + color + ')';
// 	}
// 	return color;
// }

// export function getMaybeFzVar(fz) {
// 	if (isPresetValue('fz', fz)) {
// 		return 'var(--ls--fz--' + fz + ')';
// 	}
// 	return fz;
// }

// export function getMaybeRadiusVar(bdrs) {
// 	if (isPresetValue('radius', bdrs)) {
// 		return 'var(--ls--bdrs--' + bdrs + ')';
// 	}
// 	return bdrs;
// }

// export function getMaybeShadowVar(shadow) {
// 	if (isPresetValue('shadow', shadow)) {
// 		return 'var(--ls--bxsh--' + shadow + ')';
// 	}
// 	return shadow;
// }