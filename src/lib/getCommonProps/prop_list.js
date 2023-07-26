import { getMaybeSpaceVar, getMaybeColorVar, getMaybeShadowVar } from '../index.js';

// ユーティリティ化し得るもの: utilKeys or presets を指定する
// onlyStyle: ユーティリティ化できない時に、単純にスタイルにだけ出力するかどうか.
//    → skipEmpUtil ?

const mgOption = { utilKeys: 'margin', converter: getMaybeSpaceVar };
const pdOption = { presets: 'space', converter: getMaybeSpaceVar };

export default {
	common: {
		maxW: { styleKey: 'maxWidth' },
		minW: { styleKey: 'minWidth' },
		maxH: { styleKey: 'maxHeight' },
		minH: { styleKey: 'minHeight' },
		opacity: { styleKey: 'opacity' },
		bd: { options: {} },
		bdw: { options: {} },

		c: { options: { presets: 'color', converter: getMaybeColorVar } },
		bgc: { options: { presets: 'color', converter: getMaybeColorVar } },
		bdc: { options: { converter: getMaybeColorVar } },
		keycolor: {
			options: {
				presets: 'keycolor',
				converter: getMaybeColorVar,
				onlyStyle: 1,
				styleKey: '--keycolor',
			},
		},

		//transform
		translate: {
			name: 'trnslt',
			options: { utilKeys: 'translate', onlyStyle: 1, styleKey: 'translate' },
		},
		scale: { options: {} },

		// position
		inset: { options: { presets: 'inset', onlyStyle: 1, styleKey: 'inset' } },
		top: {
			name: 't',
			options: { presets: 'inset', utilKeys: 'insets', onlyStyle: 1, styleKey: 'top' },
		},
		left: {
			name: 'l',
			options: { presets: 'inset', utilKeys: 'insets', onlyStyle: 1, styleKey: 'left' },
		},
		right: {
			name: 'r',
			options: { presets: 'inset', utilKeys: 'insets', onlyStyle: 1, styleKey: 'right' },
		},
		bottom: {
			name: 'b',
			options: { presets: 'inset', utilKeys: 'insets', onlyStyle: 1, styleKey: 'bottom' },
		},
		z: { options: { presets: 'z', onlyStyle: 1, styleKey: 'zIndex' } },

		mbs: { name: 'mbs', options: { presets: 'space' } },
		radius: { name: 'bdrs', options: { presets: 'radius' } },
		shadow: { name: 'bxsh', options: { presets: 'shadow' } },
		lh: { options: { presets: 'lh' } },
		fz: { options: { presets: 'fz' } },
		fw: {
			options: {
				presets: 'fw',
				utilKeys: 'fw',
				onlyStyle: 1,
				styleKey: 'fontWeight',
			},
		},
		ta: { options: { utilKeys: 'ta', onlyStyle: 1, styleKey: 'textAlign' } },
		ovw: { options: { utilKeys: 'ovw', onlyStyle: 1, styleKey: 'overflowWrap' } },
		pos: { options: { utilKeys: 'pos', onlyStyle: 1, styleKey: 'position' } },
		lis: { options: { utilKeys: 'lis', onlyStyle: 1, styleKey: 'listStyle' } },

		// utilityに未対応
		whs: { styleKey: 'whiteSpace' },
		lts: { styleKey: 'letterSpacing' }, // utilityあってもいい
		td: { styleKey: 'textDecoration' },
		ov: { styleKey: 'overflow' },

		// BP対応
		d: { BP: 1, options: { utilKeys: 'display' } },
		w: { BP: 1, options: { utilKeys: 'size' } },
		h: { BP: 1, options: { utilKeys: 'size' } },
		pl: { BP: 1, options: { converter: getMaybeSpaceVar } },
		pr: { BP: 1, options: { converter: getMaybeSpaceVar } },
		pt: { BP: 1, options: { converter: getMaybeSpaceVar } },
		pb: { BP: 1, options: { converter: getMaybeSpaceVar } },
		pX: { BP: 1, options: pdOption },
		pY: { BP: 1, options: pdOption },
		ml: { BP: 1, options: mgOption },
		mr: { BP: 1, options: mgOption },
		mt: { BP: 1, options: mgOption },
		mb: { BP: 1, options: mgOption },
		mX: { BP: 1, options: mgOption },
		mY: { BP: 1, options: mgOption },
		p: {
			BP: 1,
			options: {
				...pdOption,
				objProcessor: (d) => {
					// {top,left,...} の場合の処理
					const presets = d === 'X' || d === 'Y' ? 'space' : '';
					return { name: `p${d[0]}`, options: { presets } };
				},
			},
		},
		m: {
			BP: 1,
			options: {
				...mgOption,
				// {top,left,...} の場合の処理
				objProcessor: (d) => ({ name: `m${d[0]}` }),
			},
		},

		// isItem
		ga: { options: { utilKeys: 'ga' } }, // grid-area
		fxg: { BP: 1, styleKey: '--fxg' },
		fxsh: { BP: 1, styleKey: '--fxsh' },
	},
	isFlow: {
		flowGap: { BP: 0, options: { presets: 'space' } },
	},
	// isFlex & isGrid
	isFlexGrid: {
		ai: { options: { utilKeys: 'place', onlyStyle: 1, styleKey: 'alignItems' } },
		ac: { options: { utilKeys: 'place', onlyStyle: 1, styleKey: 'alignContent' } },
		ji: { options: { utilKeys: 'place', onlyStyle: 1, styleKey: 'justifyItems' } },
		jc: { options: { utilKeys: 'place', onlyStyle: 1, styleKey: 'justifyContent' } },
		gap: {
			BP: 1,
			options: {
				presets: 'space',
				converter: getMaybeSpaceVar,
				// {row, clm} の場合の処理
				objProcessor: (d) => ({ name: `${d}g` }),
			},
		},
	},
	isGrid: {
		gta: { BP: 1, options: { skipBaseUtil: 1 } },
		gtc: { BP: 1, options: { skipBaseUtil: 1 } },
		gtr: { BP: 1, options: { skipBaseUtil: 1 } },
	},
	isFlex: {
		fxw: { BP: 1, options: { utilKeys: 'fxw', skipBaseUtil: 1 } },
		fxd: { BP: 1, options: { utilKeys: 'fxd', skipBaseUtil: 1 } },
	},
	isItem: {
		fx: { BP: 1, onlyStyle: 1 },
		fxb: { BP: 1, onlyStyle: 1 },
		gc: { BP: 1, onlyStyle: 1 },
		gr: { BP: 1, onlyStyle: 1 },
		alignSelf: { onlyStyle: 1, styleKey: 'alignSelf' },
		justifySelf: { onlyStyle: 1, styleKey: 'justifySelf' },
	},

	// クエリ対応あり、ユーティリティあり
};
