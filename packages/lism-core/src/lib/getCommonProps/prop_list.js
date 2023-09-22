const marginOption = { BP: 1, utilVals: 'margin', converter: 'space' };
const paddingOption = { BP: 1, presets: 'space', converter: 'space' };

/*
// memo: 

if: style && !options → スタイルのみ
	→ かつ、BP の有無で `${style}--${bp}` にするか判断
else:BP → .-prop: ありで、BPサポートあり
else: → .-prop: ありで、BPサポートなし


withUtil: ユーティリティクラスを出力するかどうか
	0でも、presets,utilValsの指定があれば、ユーティリティチェックが入る。
	特定のプリセット値に該当しない場合、 .-prop: なしで style のみ出力される。


DATA.onlyStyle: ユーティリティクラスを出力しないもの。
	今 style 
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

options.style → options.onlyStyle が true の場合に、プリセット値以外の時に出力するスタイル名。
	これを指定しなければ、 --prop 変数のみが出力される。（--gaなど (item制限廃止すればこのケースはなくなる) ）


mode: 
	ユーティリティクラス化されない時の挙動パターンを定義?
		-  .-prop: かつ --prop ( ほとんどこれ ) →
		-  普通のstyleとして出力するだけ ( alignSelf など ) → style をもつ
		-  --prop のみ出力.( keycolor や --bdc など ) → withUtil:0 かつ style をもつ
		- propのname と 出力name が変わる ( radius → bdrs) →  name をもつ
	BP: 1 なら withUtil も 1 になる.
	utilKey があれば になる.

	禁止: 
		styleを持っていて BP:1 
		styleを持っていて withUtil:0
*/
export default {
	common: {
		d: { BP: 1, utilVals: 1 },
		w: { BP: 1, utilVals: 'size' },
		h: { BP: 1, utilVals: 'size' },
		maxW: { style: 'maxWidth', utilVals: 'size' },
		maxH: { style: 'maxHeight', utilVals: 'size' },
		minW: { style: 'minWidth' },
		minH: { style: 'minHeight' },

		c: { presets: 1, converter: 'color' },
		bgc: { presets: 1, utilVals: 1, converter: 'color' },
		keycolor: { style: '--keycolor', presets: 1, converter: 'color' },

		bg: { presets: 1, utilVals: 1 },
		opacity: { style: 1 },

		bd: { presets: 1, utilVals: 1 },
		bdl: { style: 'borderLeft' },
		bdr: { style: 'borderRight' },
		bdt: { style: 'borderTop' },
		bdb: { style: 'borderBottom' },

		// bd="l,r,is"
		bdw: { style: '--bdw' }, // --bdw のみ
		bds: { style: '--bds' }, // --bds のみ
		bdc: { style: '--bdc', presets: 1, utilVals: 1, converter: 'color' },
		borderSolid: { style: 1 },
		borderWidth: { style: 1 },

		//transform
		translate: { style: 1, utilVals: 1, utilKey: 'trnslt' },
		transformOrigin: { style: 1, utilKey: 'trso', utilVals: 'origin' },
		rotate: { style: 1, utilVals: 1 },
		scale: { style: 1 },
		order: { style: 1 },

		top: { style: 1, utilKey: 't', utilVals: 'positions', converter: 'space' },
		left: { style: 1, utilKey: 'l', utilVals: 'positions', converter: 'space' },
		right: { style: 1, utilKey: 'r', utilVals: 'positions', converter: 'space' },
		bottom: { style: 1, utilKey: 'b', utilVals: 'positions', converter: 'space' },
		inset: { style: 'inset', utilVals: 1, converter: 'space' },
		z: { style: 'zIndex', presets: 1 },
		// mbe: { presets: 'space' },
		radius: { name: 'bdrs', presets: 1 },
		shadow: { name: 'bxsh', presets: 1 },
		lh: { presets: 'lh' },
		fz: { presets: 'fz' },
		fw: { style: 'fontWeight', presets: 1, utilVals: 1 },
		ta: { style: 'textAlign', utilVals: 1 },
		lts: { style: 'letterSpacing' }, // utilityあってもいい
		td: { style: 'textDecoration' },
		whs: { style: 'whiteSpace', utilVals: { nowrap: 'nw' } },
		ovw: { style: 'overflowWrap', utilVals: { anywhere: 'any' } },
		lis: { style: 'listStyle', utilVals: { none: 'n' } },
		ov: { style: 'overflow', utilVals: 1 },
		ovx: { style: 'overflowX', utilVals: 'ov' },
		ovy: { style: 'overflowY', utilVals: 'ov' },
		pos: { style: 'position', utilVals: 1 },

		pl: { BP: 1, converter: 'space' },
		pr: { BP: 1, converter: 'space' },
		pt: { BP: 1, converter: 'space' },
		pb: { BP: 1, converter: 'space' },
		pX: { BP: 1, presets: 'space', converter: 'space' },
		pY: { BP: 1, presets: 'space', converter: 'space' },
		mbs: { presets: 'space' },
		ml: marginOption,
		mr: marginOption,
		mt: marginOption,
		mb: marginOption,
		mX: marginOption,
		mY: marginOption,
		p: {
			BP: 1,
			presets: 'p',
			converter: 'space',
			// {X, Y, top, bottom, left, right} の場合の処理. block, inline どうする？
			objProcessor: (d) => `p${d[0]}`,
		},
		m: {
			...marginOption,
			// {X, Y, top, bottom, left, right} の場合の処理. block, inline どうする？
			objProcessor: (d) => `m${d[0]}`,
		},

		gap: {
			BP: 1,
			presets: 'space',
			converter: 'space',

			// {row, column} の場合の処理
			objProcessor: (d) => `${d}Gap`,
		},
		rowGap: { BP: 1, name: 'rowg', converter: 'space' },
		columnGap: { BP: 1, name: 'clmg', converter: 'space' },

		// isFlex & isGrid
		// utility以外を使うのは珍しいので,
		ai: { style: 'alignItems', utilVals: 'place' },
		ac: { style: 'alignContent', utilVals: 'place' },
		ji: { style: 'justifyItems', utilVals: 'place' },
		jc: { style: 'justifyContent', utilVals: 'place' },

		// isFlowでのみ有効
		flowGap: { presets: 1, converter: 'space' },

		// isItem 解除したやつ
		ga: { utilVals: 1 }, // grid-area
		gc: { BP: 1 },
		gr: { BP: 1 },
		fxg: { BP: 1, presets: ['0', '1'] },
		fxsh: { BP: 1, presets: ['0', '1'] },
		fx: { BP: 1 },
		fxb: { BP: 1 },
		alignSelf: { style: 1 },
		justifySelf: { style: 1 },

		// lismVar
		// lismVar: { withUtil: 0, BP: 1, style: '--lism' },
	},

	isGrid: {
		gta: { BP: 1 },
		gtc: { BP: 1 },
		gtr: { BP: 1 },
	},
	isFlex: {
		fxw: { BP: 1, utilVals: 1 },
		fxd: { BP: 1, utilVals: 1 },
	},
	// isItem: {},

	// クエリ対応あり、ユーティリティあり
};
