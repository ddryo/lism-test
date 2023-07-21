import { getMaybeSpaceVar, getMaybeColorVar, getMaybeShadowVar } from '../index.js';

// ユーティリティ化し得るもの: utilCheckKey or presetCheckKey を指定する
// onlyStyle: ユーティリティ化できない時に、単純にスタイルにだけ出力するかどうか

const mgOption = { utilCheckKey: 'margin', converter: getMaybeSpaceVar };
const pdOption = { presetCheckKey: 'space', converter: getMaybeSpaceVar };

export default {
	common: {
		maxW: { styleKey: 'maxWidth' },
		minW: { styleKey: 'minWidth' },
		maxH: { styleKey: 'maxHeight' },
		minH: { styleKey: 'minHeight' },
		opacity: { styleKey: 'opacity' },
		lts: { styleKey: 'letterSpacing' }, // utilityあってもいい
		fw: { styleKey: 'fontWeight' }, // utilityあってもいい
		bd: { options: {} },
		bdw: { options: {} },

		mbs: { name: 'mbs', options: { presetCheckKey: 'space' } },
		radius: { name: 'bdrs', options: { presetCheckKey: 'radius' } },
		shadow: { name: 'bxsh', options: { presetCheckKey: 'shadow' } },
		lh: { name: 'lh', options: { presetCheckKey: 'lh' } },
		fz: { name: 'fz', options: { presetCheckKey: 'fz' } },
		ta: { name: 'ta', options: { utilCheckKey: 'ta', onlyStyle: 1, styleKey: 'textAlign' } },
		ga: { name: 'ga', options: { presetCheckKey: 'ga' } }, // grid-area

		// BP対応
		w: { name: 'w', BP: 1, options: {} },
		h: { name: 'h', BP: 1, options: {} },
		pl: { name: 'pl', BP: 1, options: { converter: getMaybeSpaceVar } },
		pr: { name: 'pr', BP: 1, options: { converter: getMaybeSpaceVar } },
		pt: { name: 'pt', BP: 1, options: { converter: getMaybeSpaceVar } },
		pb: { name: 'pb', BP: 1, options: { converter: getMaybeSpaceVar } },
		pX: { name: 'pX', BP: 1, options: pdOption },
		pY: { name: 'pY', BP: 1, options: pdOption },
		ml: { name: 'ml', BP: 1, options: mgOption },
		mr: { name: 'mr', BP: 1, options: mgOption },
		mt: { name: 'mt', BP: 1, options: mgOption },
		mb: { name: 'mb', BP: 1, options: mgOption },
		mX: { name: 'mX', BP: 1, options: mgOption },
		mY: { name: 'mY', BP: 1, options: mgOption },
		p: {
			name: 'p',
			BP: 1,
			options: {
				...pdOption,
				objProcessor: (d) => {
					// {top,left,...} の場合の処理
					const presetCheckKey = d === 'X' || d === 'Y' ? 'space' : '';
					return { name: `p${d[0]}`, options: { presetCheckKey } };
				},
			},
		},
		m: {
			name: 'm',
			BP: 1,
			options: {
				...mgOption,
				// {top,left,...} の場合の処理
				objProcessor: (d) => ({ name: `m${d[0]}` }),
			},
		},
	},
	isFlow: {
		flowGap: { name: 'flowGap', BP: 0, options: { presetCheckKey: 'space' } },
	},
	// isFlex & isGrid
	isFlexGrid: {
		ai: {
			name: 'ai',
			options: { utilCheckKey: 'place', onlyStyle: 1, styleKey: 'alignItems' },
		},
		ac: {
			name: 'ac',
			options: { utilCheckKey: 'place', onlyStyle: 1, styleKey: 'alignContent' },
		},
		ji: {
			name: 'ji',
			options: { utilCheckKey: 'place', onlyStyle: 1, styleKey: 'justifyItems' },
		},
		jc: {
			name: 'jc',
			options: { utilCheckKey: 'place', onlyStyle: 1, styleKey: 'justifyContent' },
		},
		gap: {
			name: 'gap',
			BP: 1,
			options: {
				presetCheckKey: 'space',
				converter: getMaybeSpaceVar,
				// {row, clm} の場合の処理
				objProcessor: (d) => ({ name: `${d}g` }),
			},
		},
	},
	isGrid: {
		gta: { name: 'gta', BP: 1, options: { skipBaseUtil: 1 } },
		gtc: { name: 'gtc', BP: 1, options: { skipBaseUtil: 1 } },
		gtr: { name: 'gtr', BP: 1, options: { skipBaseUtil: 1 } },
	},
	isFlex: {
		fxw: { name: 'fxw', options: { utilCheckKey: 'wrap' } },
		fxd: { name: 'fxd', BP: 1, options: { skipBaseUtil: 1 } },
	},
	isItem: {
		// flex: 'fx',
		fx: { BP: 1, styleKey: '--fx' },
		fxg: { BP: 1, styleKey: '--fxg' },
		fxsh: { BP: 1, styleKey: '--fxsh' },
		fxb: { BP: 1, styleKey: '--fxb' },
		gc: { BP: 1, styleKey: '--gc' },
		gr: { BP: 1, styleKey: '--gr' },
		alignSelf: { styleKey: 'alignSelf' },
		justifySelf: { styleKey: 'justifySelf' },
	},

	// クエリ対応あり、ユーティリティあり
};
