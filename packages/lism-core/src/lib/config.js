export const BREAK_POINTS = ['sm', 'md', 'lg', 'xl'];
const utilSpacing = ['0', '5', '10', '15', '20', '30', '40', '50'];
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

	// --変数化できるキーワード
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
		'white',
		'black',
		// 'gray',
		'b50',
		'b100',
		'b200',
		'b300',
		'b400',
		'b500',
		'b600',
		'b700',
		'b800',
		'b900',
		'b950',
	],
	c: ['main', 'accent', 'base', 'pale', 'opposite'],
	bgc: ['main', 'accent', 'base', 'pale', 'strong', 'opposite'],
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
		'gray',
		'basic',
	],

	// ユーティリティ化
	space: utilSpacing,
	p: [...utilSpacing, 'box', 'box:s', 'box:l'],
	flowGap: ['xs', 's', 'm', 'l', 'xl'],
	// align-content
	// "space-between"
	radius: ['0', '1', '2', '3', '4', '5', '6', '99'], // 'round'
	shadow: ['-1', '-2', '-3', '-4', '-5', '0', '1', '2', '3', '4', '5'],
	bd: [
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
	fw: ['100', '300', '400', '500', '700', '900'],
	z: ['-1', '0', '1'],
};

// ユーティリティ化しないけど、変数を用意しておくもの
// export const VAR_PRESETS = {
// 	color: ['bg', 'text', 'link', 'headline'],
// };

// 特定のCSSプロパティ用キーワードをユーティリティ化するためのリスト。
export const UTILITIES = {
	// color: {},
	// c: {},
	bgc: { none: 't', transparent: 't', current: 'cc', currentColor: 'cc' },
	bdc: { none: 't', transparent: 't' },
	bg: { none: 'n' },
	margin: { auto: 'a' },
	place: {
		center: 'c',
		strech: 'str',
		start: 's',
		end: 'e',
		between: 'sb',
		'space-between': 'sb',
	},
	ta: { center: 'c', left: 'l', right: 'r' },
	fw: { thin: '100', normal: '400', bold: '700' },
	// lh: {},
	// lts:{},

	fxw: { wrap: 'w', nowrap: 'nw' }, // nowrap → Emmet は n だが、nw にしている. (whs と揃えている)
	fxd: { column: 'c', row: 'r', 'column-reverse': 'cr', 'row-reverse': 'rr' },

	size: { '100%': '100', text: 'text' },
	ga: { fix: 'fix', left: 'l', right: 'r', center: 'c' },
	bd: {
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

	pos: { static: 's', relative: 'r', absolute: 'a', fixed: 'f' },
	positions: { 0: '0', '0%': '0', '50%': '50', '100%': '100' }, // top,left,right,bottom 用
	inset: { 0: '0', '0%': '0' }, // inset は 0% だけ
	ov: { hidden: 'h', auto: 'a', clip: 'c' },
	d: {
		none: 'n',
		block: 'b',
		flex: 'f',
		grid: 'g',
		inline: 'i',
		'inline-flex': 'if',
		'inline-block': 'ib',
	},
	rotate: { '45deg': '45', '-45deg': '-45', '90deg': '90', '-90deg': '-90', '180deg': '180' },
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
	translate: { '-50% -50%': 'XY:-50', '-50% 0': 'X:-50', '0 -50%': 'Y:-50' },
	// whs: { nowrap: 'nw' },
	// ovw: { anywhere: 'any' },
	// lis: { none: 'n' },
};
