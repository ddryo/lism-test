// 特定のCSSプロパティ用キーワードをユーティリティ化するためのリスト。
export default {
	// color: {},
	// c: {},
	bgc: { none: 't', transparent: 't', currentColor: 'cc' },
	bdc: { none: 't', transparent: 't', inherit: 'i' },
	bg: { none: 'n' },
	bgcp: { text: 'tx' },
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
	td: { underline: 'u', none: 'n' },

	// Note: 数値指定でユーティリティ化したい時、文字列で渡す。 700 → '700'
	fw: { thin: '100', light: '300', normal: '400', medium: '500', bold: '700' },
	fs: { italic: 'i', normal: 'n' },
	font: { inherit: 'i' },
	// lh: {},
	// lts:{},

	fxw: { wrap: 'w', nowrap: 'nw' }, // nowrap → Emmet は n だが、nw にしている. (whs と揃えている)
	fxd: { column: 'c', row: 'r', 'column-reverse': 'cr', 'row-reverse': 'rr' },

	// width, height用のユーティリティ値
	size: {
		'100%': '100',
		'75%': '75',
		'50%': '50',
		'25%': '25',
		'fit-content': 'fit',
		unset: 'un',
	},

	// maxW, maxH
	maxSize: { unset: 'un', '100%': '100' },

	// minW, minH
	minSize: { unset: 'un' },

	gta: { '"left center right"': 'lcr', '"top center bottom"': 'tcb' },
	ga: { fix: 'fix', left: 'l', right: 'r', center: 'c', top: 't', bottom: 'b' },
	bd: {
		// current: 'cc',
		// currentColor: 'cc',
		// transparent: 't',
		left: 'l',
		right: 'r',
		top: 't',
		bottom: 'b',
		start: 's',
		'inline-start': 's',
		'block-start': 'bs',
		block: 'B',
		inline: 'I',
		// inline: 'inline',
		// block: 'block',
		// 'inline-end': 'in-e',
		// 'block-end': 'bl-e',
	},

	pos: { relative: 'r', absolute: 'a', fixed: 'f' },
	positions: { '0%': '0', '50%': '50', '100%': '100' }, // top,left,right,bottom 用
	inset: { '0%': '0' }, // inset は 0% だけ
	ov: { hidden: 'h', auto: 'a', clip: 'c' },
	visibility: { hidden: 'h', visible: 'v' },
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

	transform: {
		'scaleX(-1)': 'flipX',
		'scaleY(-1)': 'flipY',
		'scaleX(-1) scaleY(-1)': 'flipXY',
	},
	translate: {
		// '-100% -100%': '-100',
		// '-100% 0': '-100X',
		// '0 -100%': '-100Y',
		'-50% -50%': '-50',
		'-50% 0': '-50X',
		'0 -50%': '-50Y',
	},
	aspect: { '16/9': '16/9', '4/3': '4/3', '1/1': '1/1' },
	// aspect: { video: '16/9', photo:'4/3', square:'1/1',  },
	// -aspcet:16/9
	// ['16/9', '4/3', '3/2', '2/1', '1/1', 'golden', 'silver', 'bronze', 'ogp'];
	// whs: { nowrap: 'nw' },
	// ovw: { anywhere: 'any' },
	// lis: { none: 'n' },
};
