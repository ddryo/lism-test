// import { UTILITIES } from '../config';

import isNumStr from './helper/isNumStr';
import isPresetValue from './isPresetValue';
import isTokenValue from './isTokenValue';

// 対応するCSS変数があれば返す
export default function getMaybeCssVar(value, converter, propName = '') {
	switch (converter) {
		case 'space':
			return getMaybeSpaceVar(value, propName);
		case 'color':
			return getMaybeColorVar(value, propName);
		case 'size':
			return getMaybeSizeVar(value);
		case 'radius':
			return getMaybeRadiusVar(value);
		case 'shadow':
			return getMaybeShadowVar(value);
		case 'fz':
			return getMaybeFzVar(value);
		case 'filter':
			return getMaybeFilterVar(value);
		// case 'bg':
		// 	return getMaybeBgVar(value, propName);
		default:
			if (typeof converter === 'function') return converter(value);
			return value;
	}
}

// console.log('Number10%', Number('10%'));
export function getMaybeSpaceVar(value, propName) {
	if (0 === value || '0' === value) return '0';

	// spaceが 整数 or 整数を示す文字列 の場合
	if (typeof value === 'number' || isNumStr(value)) {
		return `var(--s--${value})`;
	}

	// emトークン
	if (value.startsWith('em')) {
		const emVal = value.replace('em', '');
		// if (isTokenValue('em')) {
		return `var(--em--${emVal})`;
		// }
	}

	// + があれば calcで足す
	// ...

	// スペース区切りで一括指定されている場合
	if (typeof value === 'string' && value.includes(' ')) {
		// spaceを' 'で配列化して、数値なら変数化する
		//     ex) '20 40' → '--s--20 --s--40', '20 10px' → '--s--20 10px'
		const spaceArr = value.split(' ');
		return spaceArr
			.map((_s) => {
				if (isNumStr(_s)) return `var(--s--${_s})`;
				return _s;
			})
			.join(' ');
	}

	// box:s → --p--box--s
	if (propName && isPresetValue(propName, value)) {
		return `var(--${propName}--${value.replace(':', '--')})`;
	}

	// それ以外はそのまま返す
	return value;
}

export function getMaybeColorVar(value, propType) {
	// color に ':' が含まれているか( red:10% のような指定 )
	if (typeof value === 'string' && value.includes(':')) {
		const [colorName, alpha] = value.split(':');

		// α値の指定が可能なのはカラートークンの値のみ(black,whiteだけとかにする?)
		if (isTokenValue('color', colorName)) {
			return `hsl(var(--hsl--${colorName}) / ${alpha})`;
		}
	}

	// 単純なカラートークンかどうか
	if (isTokenValue('color', value)) {
		return `var(--${value})`;
	} else if (propType && isPresetValue(propType, value)) {
		// c,bgc などの各プロパティ専用トークン値の場合
		return `var(--${propType}--${value.replace(':', '--')})`;
	}

	return value;
}

export function getMaybeSizeVar(size) {
	if (isTokenValue('size', size)) {
		return `var(--size--${size})`;
	}
	// else if (isPresetValue('size', size)) {
	// 	return `var(--size--${size})`;
	// }

	return size;
}

export function getMaybeRadiusVar(radius) {
	if (isTokenValue('radius', radius)) {
		return 'var(--radius--' + radius + ')';
	}
	return radius;
}

export function getMaybeShadowVar(value) {
	if (isTokenValue('shadow', value)) {
		value = value + ''; // 数値でも渡ってくるので文字列化
		return 'var(--shadow--' + value.replace('-', 'i') + ')';
	}
	return value;
}

export function getMaybeFzVar(value) {
	if (isTokenValue('fz', value)) {
		return 'var(--fz--' + value + ')';
	}
	return value;
}

export function getMaybeFilterVar(filter) {
	if (isTokenValue('filter', filter)) {
		return `var(--filter--${filter})`;
	}
	// else if (isPresetValue('size', size)) {
	// 	return `var(--size--${size})`;
	// }

	return filter;
}

// export function getMaybeGradientVar(value) {
// 	if (value?.includes('gradient:')) {
// 		const gradKeys = value.split(':');
// 		return `var(--gradient--${gradKeys[1]})`;
// 	}
// 	return value;
// }
