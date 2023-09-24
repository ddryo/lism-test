/* memo: 

cols columns
colm column

options.name: 受け取るprop名と実際に出力するutilクラス名、style名がどちらも異なる場合に指定する
	[string]

	例: rowGap → rowg, shadow → bxsh

options.utilKey: 受け取るprop名と、ユーティリティクラスとして出力される時のキー名が異なる場合に指定する。
	[string]

	例: translate → '.-trnslt:{val}', top → '.-t:{val}'

options.presets: 指定された値をそのままユーティリティクラス名に使用する時のリスト(またはそれを取得するキー）
	[array, string, or 1]

	例: p={20} → .-p:20
	配列で指定 → その中身との比較
	文字列で指定→ PRESETS[str] でプリセット値のリストを取得してくる。

options.utils: 指定された値を別の文字に変換してユーティリティクラス名に使用する時のリスト(またはそれを取得するキー）
	[object, string, or 1]

	objで指定 → その中身との比較
	文字列で指定→ UTILITIES[str] でプリセット値のリストを取得してくる。
	例: pos="absolute" → '.-pos:a'

options.style: プリセット値以外の時に出力するスタイル名を指定する。
	[string | 1]
	この指定がある時、 .-prop: クラスは出力されず、styleのみ出力されるようになる。
		例: maxW → maxWidth

	1 を指定すると、prop名と同じキーでstyleに渡される。
		例 opacity, alignSelf など

	Note: styleを持てるのは BPサポートがないpropのみ.
		(BPサポートするpropは .-prop:,--prop として出力するように統一する。)

options.converter: 特定のプリセット値などに変換する処理をはさみたい時に指定する
	[string | function]

	例: space系の 20 → var(--space--20)
	例: color系など

options.objProcessor: 方向成分を指定できるpropで、そのオブジェクトをどう処理するかを指定する
	[string | function]

	例: p={{X:20, Y40}} → pX, pY としてそれぞれ処理

↓ 未実装
options.splitProcessor: スペース区切りで成分を指定できるpropで、その文字列をどう処理するかを指定する
	[string | function]

	例: p="20 40" → pX, pY としてそれぞれ処理


memo: 
	ユーティリティクラス化されない時の挙動パターン
		1.  .-prop: かつ --prop ( ほとんどこれ )
		2.  普通のstyleとして出力するだけ ( alignSelf など ) → style をもつ
		3.  --prop のみ出力.( keycolor や --bdc など ) → withUtil:0 かつ style をもつ
		4. propのname と 出力name が変わる ( radius → bdrs) →  name をもつ

禁止パターン: 
	styleを持っていて BP:1 
	styleを持っていて withUtil:0

*/

const marginOption = { BP: 1, utils: 'margin', converter: 'space' };
// const paddingOption = { BP: 1, presets: 'space', converter: 'space' };

export default {
	d: { BP: 1, utils: 1 },
	w: { BP: 1, utils: 'size' },
	h: { BP: 1, utils: 'size' },
	maxW: { style: 'maxWidth', utils: 'size' },
	maxH: { style: 'maxHeight', utils: 'size' },
	minW: { style: 'minWidth' },
	minH: { style: 'minHeight' },

	c: { presets: 1, converter: 'color' },
	bgc: { presets: 1, utils: 1, converter: 'color' },
	keycolor: { style: '--keycolor', presets: 1, converter: 'color' },

	bg: { presets: 1, utils: 1 },
	opacity: { style: 1 },

	bd: {
		presets: 1,
		utils: 1,
		objProcessor: (d) => `bd${d}`,
	},
	//
	// bdl: { style: 'borderLeft' },
	// bdr: { style: 'borderRight' },
	// bdt: { style: 'borderTop' },
	// bdb: { style: 'borderBottom' },

	// bd="l,r,is"
	bdw: { style: '--bdw' }, // --bdw のみ
	bds: { style: '--bds' }, // --bds のみ
	bdc: { style: '--bdc', presets: 1, utils: 1, converter: 'color' },
	// borderSolid: { style: 1 },
	// borderWidth: { style: 1 },

	aspect: { BP: 1, presets: 1 },

	//transform
	translate: { style: 1, utils: 1, utilKey: 'trnslt' },
	transformOrigin: { style: 1, utilKey: 'trso', utils: 'origin' },
	rotate: { style: 1, utils: 1 },
	scale: { style: 1 },
	order: { style: 1 },

	top: { style: 1, utilKey: 't', utils: 'positions', converter: 'space' },
	left: { style: 1, utilKey: 'l', utils: 'positions', converter: 'space' },
	right: { style: 1, utilKey: 'r', utils: 'positions', converter: 'space' },
	bottom: { style: 1, utilKey: 'b', utils: 'positions', converter: 'space' },
	inset: { style: 1, utils: 1, converter: 'space' },

	z: { style: 'zIndex', presets: 1 },
	// mbe: { presets: 'space' },
	radius: { name: 'bdrs', presets: 'radius' },
	shadow: { name: 'bxsh', presets: 'shadow' },
	lh: { presets: 'lh' },
	fz: { presets: 'fz' },
	fw: { style: 'fontWeight', utils: 1 },
	ta: { style: 'textAlign', utils: 1 },
	lts: { style: 'letterSpacing' }, // utilityあってもいい
	td: { style: 'textDecoration' },
	whs: { style: 'whiteSpace', utils: { nowrap: 'nw' } },
	ovw: { style: 'overflowWrap', utils: { anywhere: 'any' } },
	lis: { style: 'listStyle', utils: { none: 'n' } },
	ov: { style: 'overflow', utils: 1 },
	ovx: { style: 'overflowX', utils: 'ov' },
	ovy: { style: 'overflowY', utils: 'ov' },
	pos: { style: 'position', utils: 1 },

	pl: { BP: 1, converter: 'space' },
	pr: { BP: 1, converter: 'space' },
	pt: { BP: 1, converter: 'space' },
	pb: { BP: 1, converter: 'space' },
	pX: { BP: 1, presets: 'space', converter: 'space' },
	pY: { BP: 1, presets: 'space', converter: 'space' },
	mbs: { presets: 'space' },
	mbe: { presets: 'space' },
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
		// t: b: l: r: で指定してもらうようにする？
		// bs, be, is, ie
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

		// gap={row, column} の場合の処理
		objProcessor: (d) => `${d}Gap`,
	},
	rowGap: { BP: 1, name: 'rowg', converter: 'space' },
	columnGap: { BP: 1, name: 'colmg', converter: 'space' },

	// isFlowでのみ有効
	flowGap: { presets: 1, converter: 'space' },

	// isItem 解除したやつ
	// gridItem
	ga: { utils: 1 }, // grid-area
	gc: { BP: 1 },
	gr: { BP: 1 },

	// flexItem
	fxg: { BP: 1, presets: ['0', '1'] },
	fxsh: { BP: 1, presets: ['0', '1'] },
	fx: { BP: 1 },
	fxb: { BP: 1 },
	alignSelf: { style: 1 },
	justifySelf: { style: 1 },
	placeSelf: { style: 1 },

	// lismVar
	// lismVar: { withUtil: 0, BP: 1, style: '--lism' },

	grid: {
		areas: { name: 'gta', BP: 1 },
		columns: { name: 'gtc', BP: 1 },
		// cols: { name: 'gtc', BP: 1 }, // どっちでも受け付ける？
		rows: { name: 'gtr', BP: 1 },
		// autoFlow, autoRows, autoCols
	},
	flex: {
		wrap: { name: 'fxw', BP: 1, utils: 1 },
		direction: { name: 'fxd', BP: 1, utils: 1 },
		// fxw: { BP: 1, utils: 1 },
		// fxd: { BP: 1, utils: 1 },
	},

	// isFlex & isGrid
	// utility以外を使うのは珍しいので,
	ai: { style: 'alignItems', utils: 'place' },
	ac: { style: 'alignContent', utils: 'place' },
	ji: { style: 'justifyItems', utils: 'place' },
	jc: { style: 'justifyContent', utils: 'place' },

	// isItem: {},

	// クエリ対応あり、ユーティリティあり
};
