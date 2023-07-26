export const PRESETS = {
	breakPoints: ['sm', 'md', 'lg', 'xl'],
	fz: ['5xl', '4xl', '3xl', '2xl', 'xl', 'l', 'm', 's', 'xs', 'r'],
	lh: [],
	// utility化するカラー
	color: ['main', 'accent', 'lightgray', 'white', 'black'],
	keycolor: [
		'main',
		'accent',
		'red',
		'blue',
		'green',
		'yellow',
		'purple',
		'orange',
		'pink',
		'gray',
	],

	// align-content
	// "space-between"
	radius: ['0', '1', '2', '3', '4', '5', '6', '99'], // 'round'
	shadow: ['-1', '-2', '-3', '-4', '-5', '0', '1', '2', '3', '4', '5'],

	// ユーティリティ化するもの。（）80~100以降、変数の用意はしている
	space: ['0', '10', '20', '30', '40', '50', '60', '70'],
	inset: ['0'], // inset用
	fw: ['100', '300', '400', '500', '700', '900'],
	z: ['0', '1'],
	// 主要な areaキーワード はdata属性で出力
};

// 特定のCSSプロパティ用キーワードをユーティリティ化するためのリスト。
export const UTILITIES = {
	place: {
		center: 'c',
		strech: 's',
		'space-between': 'sb',
	},
	fw: { bold: '700', normal: '400', thin: '100', 100: '100', 400: '400', 700: '700', 900: '900' },
	ta: { center: 'c', left: 'l', right: 'r' },
	fxw: { wrap: 'w', nowrap: 'nw' }, // nowrap → nw にすべき？(whs と揃える)
	fxd: { column: 'c', row: 'r', 'column-reverse': 'cr', 'row-reverse': 'rr' },
	margin: { auto: 'a' },
	translate: { '-50% -50%': 'XY:-50', '-50% 0': 'X:-50', '0 -50%': 'Y:-50' },
	// t,l,r,b用
	insets: { '0%': '0', '50%': '50', '100%': '100' },
	size: { '100%': '100', text: 'text' },
	ga: { fix: 'fix', left: 'l', right: 'r', center: 'c' },
	pos: { static: 's', relative: 'r', absolute: 'a', fixed: 'f' },
	ovw: { anywhere: 'any' },
	lis: { none: 'n' },
	display: { none: 'n', block: 'b' },
};

// ユーティリティ化しないけど、変数を用意しておくもの
// border, link, ...headline...?
export const VAR_PRESETS = {
	color: ['bg', 'text', 'link', 'headline'],
};

function isNumStr(val) {
	if (typeof val !== 'string') return false;
	return !isNaN(Number(val));
}

// プリセット値を配列で定義しているもののチェック
export const isPresetValue = (key, value, list) => {
	const presetValues = list || PRESETS[key];
	if (undefined === presetValues) return false;

	// 数値の時は文字列化してから判定
	if (typeof value === 'number') {
		return presetValues.includes(`${value}`);
	}
	return presetValues.includes(value);
};

// ユーティリティ化できるキーワードのチェック
export const getUtilVal = (key, value) => {
	const utilValues = UTILITIES[key];
	return utilValues?.[value] || '';
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

export function getMaybeColorVar(color) {
	if (isPresetValue('color', color)) {
		return 'var(--c--' + color + ')';
	} else if (isPresetValue('keycolor', color)) {
		return 'var(--c--' + color + ')';
	} else if (isPresetValue('', color, VAR_PRESETS.color)) {
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
