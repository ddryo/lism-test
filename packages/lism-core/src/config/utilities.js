// 特定のCSSプロパティ用キーワードをユーティリティ化するためのリスト。
export default {
	// color: {},
	// c: {},
	bgc: { none: 't', transparent: 't', currentColor: 'cc' },
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

	// Note: 数値指定でユーティリティ化したい時、文字列で渡す。 700 → '700'
	fw: { thin: '100', light: '300', normal: '400', medium: '500', bold: '700' },
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
	positions: { '0%': '0', '50%': '50', '100%': '100' }, // top,left,right,bottom 用
	inset: { '0%': '0' }, // inset は 0% だけ
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
	aspect: { '16/9': '16/9', '4/3': '4/3', '1/1': '1/1' },
	// aspect: { video: '16/9', photo:'4/3', square:'1/1',  },
	// -aspcet:16/9
	// ['16/9', '4/3', '3/2', '2/1', '1/1', 'golden', 'silver', 'bronze', 'ogp'];
	// whs: { nowrap: 'nw' },
	// ovw: { anywhere: 'any' },
	// lis: { none: 'n' },
};
