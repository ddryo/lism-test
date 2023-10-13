/* memo: 

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
	w: { BP: 1, utils: 'size', converter: 'size' },
	h: { BP: 1, utils: 'size', converter: 'size' },
	maxW: { style: 'maxWidth', utils: 'size', converter: 'size' },
	maxH: { style: 'maxHeight', utils: 'size', converter: 'size' },
	minW: { style: 'minWidth', converter: 'size' },
	minH: { style: 'minHeight', converter: 'size' },
	size: { style: '--size', converter: 'size' },

	c: { presets: 1, converter: 'color' },
	bgc: { presets: 1, utils: 1, converter: 'color' },
	// bgcOpacity: { style: '--bgc-opacity' },

	keycolor: { style: '--keycolor', presets: 1, converter: 'color' },

	bd: {
		presets: 1,
		utils: 1,
		objProcessor: (d) => `bd${d[0]}`,
	},
	//
	bdl: { style: 'borderLeft', utils: { none: 'n' } },
	bdr: { style: 'borderRight', utils: { none: 'n' } },
	bdt: { style: 'borderTop', utils: { none: 'n' } },
	bdb: { style: 'borderBottom', utils: { none: 'n' } },

	// bd="l,r,is"
	bdw: { style: '--bdw' }, // --bdw のみ
	bds: { style: '--bds' }, // --bds のみ
	bdc: { style: '--bdc', presets: 1, utils: 1, converter: 'color' },
	// borderSolid: { style: 1 },
	// borderWidth: { style: 1 },

	// Typography
	lh: { presets: 1 },
	fz: { BP: 1, presets: 1, converter: 'fz' },
	fw: { style: 'fontWeight', utils: 1 },
	ff: { style: 'fontFamiry', presets: 1 },
	ta: { style: 'textAlign', utils: 1 },
	lts: { style: 'letterSpacing' }, // utilityあってもいい
	td: { style: 'textDecoration' },
	// textDecoration: { style: 1 },
	whs: { style: 'whiteSpace', utils: { nowrap: 'nw' } },
	// others
	radius: { name: 'bdrs', presets: 'radius' },
	shadow: { name: 'bxsh', presets: 'shadow' },
	aspect: { BP: 1, presets: 1 },
	bg: { presets: 1, utils: 1, converter: 'bg' },

	// gradient: {},
	// gradientAngle: { style: '--gradient-angle' },
	opacity: { style: 1 },
	lis: { style: 'listStyle', utils: { none: 'n' } },
	ovw: { style: 'overflowWrap', utils: { anywhere: 'any' } },
	ov: { style: 'overflow', utils: 1 },
	ovx: { style: 'overflowX', utils: 'ov' },
	ovy: { style: 'overflowY', utils: 'ov' },
	z: { style: 'zIndex', presets: 1 },
	pos: { style: 'position', utils: 1, presets: ['static', 'sticky'] },
	top: { style: 1, utilKey: 't', utils: 'positions', converter: 'space' },
	left: { style: 1, utilKey: 'l', utils: 'positions', converter: 'space' },
	right: { style: 1, utilKey: 'r', utils: 'positions', converter: 'space' },
	bottom: { style: 1, utilKey: 'b', utils: 'positions', converter: 'space' },
	inset: { style: 1, utils: 1, converter: 'space' },

	//transform
	translate: { style: 1, utils: 1, utilKey: 'trnslt' },
	transformOrigin: { style: 1, utilKey: 'trso', utils: 'origin' },
	rotate: { style: 1, utils: 1 },
	scale: { style: 1 },
	clipPath: { style: 1 },

	// Spacing
	pl: { BP: 1, converter: 'space' },
	pr: { BP: 1, converter: 'space' },
	pt: { BP: 1, converter: 'space' },
	pb: { BP: 1, converter: 'space' },
	pX: { BP: 1, presets: 'space', converter: 'space' },
	pY: { BP: 1, presets: 'space', converter: 'space' },
	mbs: { presets: 'space', converter: 'space' },
	mbe: { presets: 'space', converter: 'space' },
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

	// isFlowでのみ有効
	flowGap: { presets: 1, converter: 'space' },

	// flexItem
	flex: { map: 1 },
	grid: { map: 1 },
	flexItem: { map: 1 },
	gridItem: { map: 1 },

	// lismVar
	// lismVar: { withUtil: 0, BP: 1, style: '--lism' },
	// ai: { style: 'alignItems', utils: 'place' },
	// ac: { style: 'alignContent', utils: 'place' },
	// ji: { style: 'justifyItems', utils: 'place' },
	// jc: { style: 'justifyContent', utils: 'place' },
};

const placeProps = {
	ai: { style: 'alignItems', utils: 'place' },
	ac: { style: 'alignContent', utils: 'place' },
	ji: { style: 'justifyItems', utils: 'place' },
	jc: { style: 'justifyContent', utils: 'place' },
};

const selfProps = {
	alignSelf: { style: 1 },
	justifySelf: { style: 1 },
	placeSelf: { style: 1 },
};

const gapProps = {
	gap: {
		BP: 1,
		presets: 'space',
		converter: 'space',

		// gap={row, column} の場合の処理→context内での処理ができないので一旦OFF
		// objProcessor: (d) => `${d}Gap`,
	},
	rowGap: { BP: 1, name: 'rowg', converter: 'space' },
	columnGap: { BP: 1, name: 'clmg', converter: 'space' },
};

export const CONTEXT_PROPS = {
	grid: {
		template: { style: 'gridTemplate', name: 'gt', presets: 'gt' },
		areas: { name: 'gta', BP: 1, presets: 'gta' },
		columns: { name: 'gtc', BP: 1 },
		// cols: { name: 'gtc', BP: 1 }, // どっちでも受け付ける？
		rows: { name: 'gtr', BP: 1 },
		// autoFlow, autoRows, autoCols
		...placeProps,
		...gapProps,
	},

	flex: {
		wrap: { name: 'fxw', BP: 1, utils: 1 },
		direction: { name: 'fxd', BP: 1, utils: 1 },
		// fxw: { BP: 1, utils: 1 },
		// fxd: { BP: 1, utils: 1 },
		// placement: { context: 1 },
		...placeProps,
		...gapProps,
	},

	flexItem: {
		fxg: { BP: 1, presets: ['0', '1'] },
		fxsh: { BP: 1, presets: ['0', '1'] },
		fx: { BP: 1 },
		fxb: { BP: 1 },
		order: { style: 1, presets: ['0', '-1', '1'] },
		...selfProps,
	},

	gridItem: {
		ga: { utils: 1 }, // grid-area
		gc: { BP: 1 }, // grid-column
		gr: { BP: 1 }, // grid-row
		order: { style: 1, presets: ['0', '-1', '1'] },
		...selfProps,
	},
};
