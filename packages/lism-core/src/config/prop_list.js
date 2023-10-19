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

	例: space系の 20 → var(--s--20)
	例: color系など

options.objProcessor: 方向成分を指定できるpropで、そのオブジェクトをどう処理するかを指定する
	[string | function]

	例: p={{x:20, y:40}} → px, py としてそれぞれ処理

↓ 未実装
options.splitProcessor: スペース区切りで成分を指定できるpropで、その文字列をどう処理するかを指定する
	[string | function]

	例: p="20 40" → px, py としてそれぞれ処理


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
const paddingOption = { BP: 1, converter: 'space' };

export default {
	d: { BP: 1, utils: 1 },
	w: { BP: 1, utils: 'size', converter: 'size' },
	h: { BP: 1, utils: 'size', converter: 'size' },
	maxW: { style: 'maxWidth', utils: 'maxSize', converter: 'size' },
	maxH: { style: 'maxHeight', utils: 'maxSize', converter: 'size' },
	minW: { style: 'minWidth', utils: 'minSize', converter: 'size' },
	minH: { style: 'minHeight', utils: 'minSize', converter: 'size' },
	size: { style: '--size', converter: 'size' },
	c: { presets: 1, converter: 'color' },
	bg: { style: 'background', presets: 1, utils: 1, map: 1 },
	bgc: { presets: 1, utils: 1, converter: 'color' },
	// bgcOpacity: { style: '--bgc-opacity' },
	keycolor: { style: '--keycolor', presets: 1, converter: 'color' },
	// mask: { map: 1 },
	bd: {
		// map: 1,
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
	fz: { BP: 1, presets: 1, converter: 'fz' },
	lh: { presets: 1, style: 'lineHeight' },
	fw: { style: 'fontWeight', utils: 1 },
	ff: { style: 'fontFamiry', presets: 1 },
	lts: { style: 'letterSpacing', presets: 1 }, // utilityあってもいい
	ta: { style: 'textAlign', utils: 1 },
	td: { style: 'textDecoration' },
	whs: { style: 'whiteSpace', utils: { nowrap: 'nw' } },

	// others
	radius: { name: 'bdrs', presets: 1 },
	shadow: { name: 'bxsh', presets: 1 },
	bdrs: { presets: 'radius' },
	bxsh: { presets: 'shadow' },
	aspect: { BP: 1, presets: 1 },
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
	clipPath: { style: 1 },
	// appearance: { style: 1, utils: { none: 'n' } },

	//transform
	translate: { style: 1, utils: 1, utilKey: 'trnslt' },
	transformOrigin: { style: 1, utilKey: 'trso', utils: 'origin' },
	rotate: { style: 1, utils: 1 },
	scale: { style: 1 },

	// Spacing
	p: {
		BP: 1,
		presets: 'p',
		converter: 'space',
		// {x, y, top, bottom, left, right} だけ正常に動作
		objProcessor: (d) => `p${d[0]}`,
	},
	pl: paddingOption,
	pr: paddingOption,
	pt: paddingOption,
	pb: paddingOption,
	px: Object.assign({}, paddingOption, { presets: 'space' }),
	py: Object.assign({}, paddingOption, { presets: 'space' }),
	ps: paddingOption,
	pbs: paddingOption,
	// pe: paddingOption,
	// pbe: paddingOption,
	m: {
		...marginOption,
		// {x, y, top, bottom, left, right } の場合の処理.
		objProcessor: (d) => `m${d[0]}`,
	},
	ml: marginOption,
	mr: marginOption,
	mt: marginOption,
	mb: marginOption,
	mx: marginOption,
	my: marginOption,
	ms: Object.assign({}, marginOption, { presets: 'space' }),
	mbs: Object.assign({}, marginOption, { presets: 'space' }),
	// me: marginOption,
	// mbe: marginOption,

	// isFlowでのみ有効
	flowGap: { presets: 1, converter: 'space' },

	// flexItem
	flex: { map: 1, style: 1 },
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
		rows: { name: 'gtr', BP: 1 },
		// autoFlow, autoRows, autoCols
		...placeProps,
		...gapProps,
	},

	flex: {
		wrap: { name: 'fxw', BP: 1, utils: 'fxw' },
		direction: { name: 'fxd', BP: 1, utils: 'fxd' },
		// fxw: { BP: 1, utils: 1 },
		// fxd: { BP: 1, utils: 1 },
		// placement: { context: 1 },
		...placeProps,
		...gapProps,
	},

	// item?
	flexItem: {
		flex: { style: 1 }, // `flexItem.flex`もうけつける
		grow: { name: 'fxg', BP: 1, presets: ['0', '1'] },
		shrink: { name: 'fxsh', BP: 1, presets: ['0', '1'] },
		basis: { name: 'fxb', BP: 1 },
		// fx,fxsh,fxg,fxb
		order: { style: 1, presets: ['0', '-1', '1'] },
		...selfProps,
	},

	gridItem: {
		area: { name: 'ga', utils: 'ga' }, // grid-area
		column: { name: 'gc', BP: 1 }, // grid-column
		row: { name: 'gr', BP: 1 }, // grid-row
		// ga: { utils: 1 }, // grid-area
		// gc: { BP: 1 }, // grid-column
		// gr: { BP: 1 }, // grid-row
		order: { style: 1, presets: ['0', '-1', '1'] },
		...selfProps,
	},

	bg: {
		color: { name: 'bgc', presets: 1, utils: 1, converter: 'color' },
		attachment: { style: 'backgroundAttachment' },
		blendMode: { style: 'backgroundBlendMode' },
		clip: { style: 'backgroundClip' },
		image: { style: 'backgroundImage' },
		origin: { style: 'backgroundOrigin' },
		position: { style: 'backgroundPosition' },
		positionX: { style: 'backgroundPositionX' },
		positionY: { style: 'backgroundPositionY' },
		repeat: { style: 'backgroundRepeat' },
		size: { style: 'backgroundSize' },
	},
	mask: {},
};
