export const PRESETS = {
	color: ['main', 'accent', 'base', 'link', 'text', 'headline', 'gray', 'white', 'black', 'sub'],
	colorPallete: [
		'red.100',
		'red.200',
		'red.300',
		'red.400',
		'red.500',
		'red.600',
		'red.700',
		//---
		'orange.100',
		'orange.200',
		'orange.300',
		'orange.400',
		'orange.500',
		'orange.600',
		'orange.700',
		//---
		'yellow.100',
		'yellow.200',
		'yellow.300',
		'yellow.400',
		'yellow.500',
		'yellow.600',
		'yellow.700',
		//---
		'green.100',
		'green.200',
		'green.300',
		'green.400',
		'green.500',
		'green.600',
		'green.700',
		//---
		'blue.100',
		'blue.200',
		'blue.300',
		'blue.400',
		'blue.500',
		'blue.600',
		'blue.700',
		//---
		'purple.100',
		'purple.200',
		'purple.300',
		'purple.400',
		'purple.500',
		'purple.600',
		'purple.700',
		//---
		'pink.100',
		'pink.200',
		'pink.300',
		'pink.400',
		'pink.500',
		'pink.600',
		'pink.700',
		//---
		'gray.100',
		'gray.200',
		'gray.300',
		'gray.400',
		'gray.500',
		'gray.600',
		'gray.700',
	],
	fz: ['6L', '5L', '4L', '3L', '2L', 'L', 'S', '2S', 'R'],
	ta: ['center', 'left', 'right'],

	// align-content
	// "space-between"
	radius: ['0', '1', '2', '3', '4', '5', '6', '99'], // 'round'
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
	} else if (isPresetValue('colorPallete', color)) {
		return 'var(--' + color.replace('.', '-') + ')';
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
