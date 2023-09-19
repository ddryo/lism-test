export const BREAK_POINTS = ['sm', 'md', 'lg', 'xl'];

export const PRESETS = {
	fz: [
		'5xl',
		'4xl',
		'3xl',
		'2xl',
		'xl',
		'l',
		'm',
		's',
		'xs',
		'2xs',
		'r',
		'fluid',
		'fluid:s',
		'fluid:l',
	],
	lh: [],

	// --color--変数化できるキーワード
	color: [
		'main',
		'accent',
		'red',
		'blue',
		'green',
		'yellow',
		'purple',
		'orange',
		'pink',
		// 'gray',
		'white',
		'black',
		'n100',
		'n200',
		'n300',
		'n400',
		'n500',
	],
	c: ['main', 'accent', 'base', 'pale', 'opposite', 'white', 'black'],
	bgc: ['main', 'accent', 'base', 'pale', 'strong', 'white', 'black'],
	bdc: ['main', 'accent', 'base', 'strong'],
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
		'nuetral',
	],

	// ユーティリティ化するもの。（）80~100以降、変数の用意はしている
	space: ['0', '10', '20', '30', '40', '50', '60', '70'],

	// align-content
	// "space-between"
	radius: ['0', '1', '2', '3', '4', '5', '6', '99'], // 'round'
	shadow: ['-1', '-2', '-3', '-4', '-5', '0', '1', '2', '3', '4', '5'],
	border: [
		'guide',
		'emphasis',
		// 'current',
		// 'transparent',
		'top',
		'left',
		'right',
		'bottom',
		'block',
		'inline',
	], // dashed?
	//bds: dashed, solid, double, dotted,
	bg: ['glass'],
	// inset: ['0'], // inset用
	// fw: ['100', '300', '400', '500', '700', '900'],
	// z: ['0', '1'],
	// 主要な areaキーワード はdata属性で出力
};

// ユーティリティ化しないけど、変数を用意しておくもの
// export const VAR_PRESETS = {
// 	color: ['bg', 'text', 'link', 'headline'],
// };

// 特定のCSSプロパティ用キーワードをユーティリティ化するためのリスト。
export const UTILITIES = {
	// color: {},
	place: {
		center: 'c',
		strech: 'str',
		start: 's',
		end: 'e',
		'space-between': 'sb',
	},
	// fw: { bold: '700', normal: '400', thin: '100', 100: '100', 400: '400', 700: '700', 900: '900' },
	// ta: { center: 'c', left: 'l', right: 'r' },
	// fxw: { wrap: 'w', nowrap: 'nw' }, // nowrap → nw にすべき？(whs と揃える)
	// fxd: { column: 'c', row: 'r', 'column-reverse': 'cr', 'row-reverse': 'rr' },
	// margin: { auto: 'a' },
	// t,l,r,b用
	// insets: { '0%': '0', '50%': '50', '100%': '100' },
	size: { '100%': '100', text: 'text' },
	ga: { fix: 'fix', left: 'l', right: 'r', center: 'c' },
	border: {
		current: 'cc',
		currentColor: 'cc',
		transparent: 't',
		// left: 'l',
		// right: 'r',
		// top: 't',
		// bottom: 'b',
		// inline: 'inline',
		// block: 'block',
		'inline-start': 'in-s',
		'inline-end': 'in-e',
		'block-start': 'bl-s',
		'block-end': 'bl-e',
	},

	// pos: { static: 's', relative: 'r', absolute: 'a', fixed: 'f' },
	// ovw: { anywhere: 'any' },
	// ov: { hidden: 'h' },
	// lis: { none: 'n' },
	// lts:{},
	display: {
		none: 'n',
		block: 'b',
		flex: 'f',
		grid: 'g',
		inline: 'i',
		'inline-flex': 'if',
		'inline-block': 'ib',
	},
	// rotate: { '45deg': '45', '-45deg': '-45', '90deg': '90', '-90deg': '-90', '180deg': '180' },
	origin: {
		center: 'c',
		'left top': 'lt',
		'right top': 'rt',
		'left bottom': 'lb',
		'right bottom': 'rb',
		'50%': 'c',
		'0% 0%': 'lt',
		'100% 0%': 'rt',
		'0% 100%': 'lb',
		'100% 100%': 'rb',
	},
};
