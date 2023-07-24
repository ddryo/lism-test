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

		//transform
		translate: {
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
		lts: { styleKey: 'letterSpacing' }, // utilityあってもいい
		fw: {
			options: {
				presets: 'fw',
				utilKeys: 'fw',
				onlyStyle: 1,
				styleKey: 'fontWeight',
			},
		},
		ta: { options: { utilKeys: 'ta', onlyStyle: 1, styleKey: 'textAlign' } },
		// pos: { options: { utilKeys: 'pos', onlyStyle: 1, styleKey: 'position' } },

		// BP対応
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
		fxw: { options: { utilKeys: 'wrap' } },
		fxd: { BP: 1, options: { skipBaseUtil: 1 } },
	},
	isItem: {
		fx: { BP: 1, styleKey: '--fx' },
		fxb: { BP: 1, styleKey: '--fxb' },
		gc: { BP: 1, styleKey: '--gc' },
		gr: { BP: 1, styleKey: '--gr' },
		alignSelf: { styleKey: 'alignSelf' },
		justifySelf: { styleKey: 'justifySelf' },
	},

	// クエリ対応あり、ユーティリティあり
};
