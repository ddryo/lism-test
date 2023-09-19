import { getMaybeSpaceVar, getMaybeColorVar } from '../index.js';
import { UTILITIES } from '../config.js';

const mgOption = { BP: 1, utilVals: { auto: 'a' }, converter: getMaybeSpaceVar };
const pdOption = { BP: 1, presets: 'space', converter: getMaybeSpaceVar };
const tlrbOption = {
	withUtil: 0,
	utilVals: { 0: '0', '0%': '0', '50%': '50', '100%': '100' },
	converter: getMaybeSpaceVar,
};

/*
// memo: 

if: styleKey && !options → スタイルのみ
	→ かつ、BP の有無で `${styleKey}--${bp}` にするか判断
else:BP → .-prop: ありで、BPサポートあり
else: → .-prop: ありで、BPサポートなし


withUtil: ユーティリティクラスを出力するかどうか
	0でも、presets,utilValsの指定があれば、ユーティリティチェックが入る。
	特定のプリセット値に該当しない場合、 .-prop: なしで style のみ出力される。


DATA.onlyStyle: ユーティリティクラスを出力しないもの。
	今 styleKey 
	... isStyle? or useUtil?
	単純に true → そのままprops名をstyleとして受け付ける
	文字列指定 → 受け取るprop名と実際に出力するstyle名が異なる場合に指定する
		→ 例: maxW → maxWidth

DATA.utilKey: 受け取るprop名と出力するクラス・変数名が異なる場合に指定する。
	..→ utilKey ?
	例: radius → bdrs, shadow → bxsh

DATA.options: ユーティリティクラスを扱う場合の処理に関連する設定値
	→ objのネストになるので、階層あげたい

options.converter: 特定のプリセット値などに変換する処理をはさみたい時に指定する
	例: space系の 20 → var(--space--20)
	例: color系など

options.presets: 指定された値をそのままユーティリティクラス名に使用する時のリストを取得するキー
	例: p={20} → .-p:20
	配列で指定 → その中身との比較
	文字列で指定→ PRESETS[str] でプリセット値のリストを取得してくる。

options.utilVals: 指定された値を別の文字に変換してユーティリティクラス名に使用する時のリストを取得するキー
	objで指定 → その中身との比較
	文字列で指定→ UTILITIES[str] でプリセット値のリストを取得してくる。
	例: pos="absolute" → '.-pos:a'

options.onlyStyle: ユーティリティクラス化しない値の時、.-prop: クラスを使用しない。
	...onlyPreset?, useBaseUtil? useNoValueClass ?

options.skipBaseUtil: BPなしの時だけユーティリティクラスの出力をスキップする
	例: gtaなど ( is--grid で--gtaは受け付けるので、 .-gta: がいらない)

options.styleKey → options.onlyStyle が true の場合に、プリセット値以外の時に出力するスタイル名。
	これを指定しなければ、 --prop 変数のみが出力される。（--gaなど (item制限廃止すればこのケースはなくなる) ）



*/
export default {
	common: {
		d: { BP: 1, utilVals: UTILITIES['display'] },
		w: { BP: 1, utilVals: UTILITIES['size'] },
		h: { BP: 1, utilVals: UTILITIES['size'] },
		maxW: { utilVals: UTILITIES['size'] },
		maxH: { utilVals: UTILITIES['size'] },
		minW: {},
		minH: {},

		c: { presets: 'c', withUtil: 1, converter: getMaybeColorVar },
		bgc: {
			presets: 'bgc',
			withUtil: 1,
			utilVals: {
				none: 't',
				transparent: 't',
				current: 'cc',
				currentColor: 'cc',
			},
			converter: getMaybeColorVar,
		},
		keycolor: {
			withUtil: 0,
			styleKey: '--keycolor',
			presets: 'keycolor',
			converter: getMaybeColorVar,
		},

		bg: { presets: 'bg', utilVals: { none: 'n' } },
		opacity: { withUtil: 0, styleKey: 'opacity' },

		bd: { presets: 'border', utilVals: UTILITIES['border'] },
		bdl: { withUtil: 0, styleKey: 'borderLeft' },
		bdr: { withUtil: 0, styleKey: 'borderRight' },
		bdt: { withUtil: 0, styleKey: 'borderTop' },
		bdb: { withUtil: 0, styleKey: 'borderBottom' },

		// bd="l,r,is"
		bdw: { withUtil: 0, styleKey: '--bdw' }, // --bdw のみ
		bds: { withUtil: 0, styleKey: '--bds' }, // --bds のみ
		bdc: {
			withUtil: 0,
			styleKey: '--bdc',
			presets: 'bdc',
			utilVals: { none: 't', transparent: 't' },
			converter: getMaybeColorVar,
		},
		borderSolid: { withUtil: 0, styleKey: 'borderSolid' },
		borderWidth: { withUtil: 0, styleKey: 'borderWidth' },

		//transform
		translate: {
			withUtil: 0,
			utilKey: 'trnslt',
			styleKey: 'translate',
			utilVals: { '-50% -50%': 'XY:-50', '-50% 0': 'X:-50', '0 -50%': 'Y:-50' },
		},
		transformOrigin: {
			withUtil: 0,
			utilKey: 'trso',
			utilVals: UTILITIES['origin'],
			styleKey: 'transformOrigin',
		},
		rotate: {
			withUtil: 0,
			utilVals: {
				'45deg': '45',
				'-45deg': '-45',
				'90deg': '90',
				'-90deg': '-90',
				'180deg': '180',
			},
		},
		scale: { withUtil: 0 },
		order: { withUtil: 0 },

		// position
		top: { utilKey: 't', ...tlrbOption },
		left: { utilKey: 'l', ...tlrbOption },
		right: { utilKey: 'r', ...tlrbOption },
		bottom: { utilKey: 'b', ...tlrbOption },
		inset: { ...tlrbOption, utilVals: { 0: '0', '0%': '0' } }, // inset は 0 だけ util
		z: { withUtil: 0, presets: ['-1', '0', '1'], styleKey: 'zIndex' },

		mbs: { presets: 'space' },
		radius: { utilKey: 'bdrs', styleKey: '--bdrs', presets: 'radius' },
		shadow: { utilKey: 'bxsh', styleKey: '--bxsh', presets: 'shadow' },
		lh: { presets: 'lh' },
		fz: { presets: 'fz' },
		fw: {
			withUtil: 0,
			presets: ['100', '300', '400', '500', '700', '900'],
			utilVals: { thin: '100', normal: '400', bold: '700' },
			styleKey: 'fontWeight',
		},
		ta: {
			withUtil: 0,
			styleKey: 'textAlign',
			utilVals: { center: 'c', left: 'l', right: 'r' },
		},
		lts: { withUtil: 0, styleKey: 'letterSpacing' }, // utilityあってもいい
		whs: { withUtil: 0, styleKey: 'whiteSpace' }, // utilityあってもいい
		td: { withUtil: 0, styleKey: 'textDecoration' },

		ovw: { withUtil: 0, styleKey: 'overflowWrap', utilVals: { anywhere: 'any' } },
		lis: { withUtil: 0, styleKey: 'listStyle', utilVals: { none: 'n' } },
		ov: {
			withUtil: 0,
			styleKey: 'overflow',
			utilVals: {
				visible: 'v',
				hidden: 'h',
				auto: 'a',
				clip: 'c',
			},
		},
		ovx: { withUtil: 0, styleKey: 'overflowX', utilVals: { auto: 'a', clip: 'c' } },
		ovy: { withUtil: 0, styleKey: 'overflowY', utilVals: { auto: 'a', clip: 'c' } },
		pos: {
			withUtil: 0,
			styleKey: 'position',
			utilVals: { static: 's', relative: 'r', absolute: 'a', fixed: 'f' },
		},

		pl: { BP: 1, converter: getMaybeSpaceVar },
		pr: { BP: 1, converter: getMaybeSpaceVar },
		pt: { BP: 1, converter: getMaybeSpaceVar },
		pb: { BP: 1, converter: getMaybeSpaceVar },
		pX: pdOption,
		pY: pdOption,
		ml: mgOption,
		mr: mgOption,
		mt: mgOption,
		mb: mgOption,
		mX: mgOption,
		mY: mgOption,
		p: {
			...pdOption,
			// {top,left,...} の場合の処理
			objProcessor: (d) => {
				const presets = d === 'X' || d === 'Y' ? 'space' : '';
				return { utilKey: `p${d[0]}`, presets };
			},
		},
		m: {
			...mgOption,
			// {top,left,...} の場合の処理
			objProcessor: (d) => ({ utilKey: `m${d[0]}` }),
		},

		// Centerでも使いたい
		gap: {
			BP: 1,
			presets: 'space',
			converter: getMaybeSpaceVar,

			// {row, clm} の場合の処理
			objProcessor: (d) => ({ utilKey: `${d}g` }),
		},

		// isFlex & isGrid
		// utility以外を使うのは珍しいので,
		ai: { withUtil: 0, utilVals: UTILITIES['place'], styleKey: 'alignItems' },
		ac: { withUtil: 0, utilVals: UTILITIES['place'], styleKey: 'alignContent' },
		ji: { withUtil: 0, utilVals: UTILITIES['place'], styleKey: 'justifyItems' },
		jc: { withUtil: 0, utilVals: UTILITIES['place'], styleKey: 'justifyContent' },

		// isFlowでのみ有効
		flowGap: { BP: 0, presets: 'space' },

		// isItem 解除したやつ
		ga: { utilVals: UTILITIES['ga'] }, // grid-area
		gc: { BP: 1, withUtil: 'BP' },
		gr: { BP: 1, withUtil: 'BP' },
		fxg: { BP: 1, withUtil: 'BP', presets: ['0', '1'] },
		fxsh: { BP: 1, withUtil: 'BP', presets: ['0', '1'] },
		fx: { BP: 1, withUtil: 'BP' },
		fxb: { BP: 1, withUtil: 'BP' },
		alignSelf: { withUtil: 0 },
		justifySelf: { withUtil: 0 },

		// lismVar
		// lismVar: { withUtil: 0, BP: 1, styleKey: '--lism' },
	},

	isGrid: {
		gta: {
			BP: 1,
			// utilVals: UTILITIES['gta']
		},
		gtc: { BP: 1 },
		gtr: { BP: 1 },
	},
	isFlex: {
		// nowrap → nw にすべき？(whs と揃える)
		fxw: { BP: 1, utilVals: { wrap: 'w', nowrap: 'nw' } },
		fxd: {
			BP: 1,
			utilVals: { column: 'c', row: 'r', 'column-reverse': 'cr', 'row-reverse': 'rr' },
		},
	},
	// isItem: {},

	// クエリ対応あり、ユーティリティあり
};
