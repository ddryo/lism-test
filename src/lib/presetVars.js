export const PRESETS = {
	color: ['main', 'accent', 'base', 'link', 'text', 'headline', 'gray', 'white', 'black', 'sub'],
	fz: ['6L', '5L', '4L', '3L', '2L', 'L', 'S', '2S', 'R'],
	ta: ['center', 'left', 'right'],

	// align-content
	// "space-between"
	radius: ['0', '1', '2', '3', '4', '5', '99'], // 'round'
	shadow: ['-1', '-2', '-3', '-4', '-5', '0', '1', '2', '3', '4', '5'],
	space: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
	// 主要な areaキーワード はdata属性で出力
	ga: ['header', 'footer', 'body', 'fix', 'fluid'],
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
		return `var(--space--${space})`;
	}

	/* eslint-disable-next-line  eqeqeq */
	// if (null == space) return false;

	// それ以外はそのまま返す
	return space;
}

export function getMaybeColorVar(color) {
	if (isPresetValue('color', color)) {
		return 'var(--color--' + color + ')';
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
