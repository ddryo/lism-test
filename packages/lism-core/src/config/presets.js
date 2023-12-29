import TOKENS from './tokens';

const spacingPresets = ['0', '5', '10', '20', '30', '40', '50'];
const emPresets = ['em1', 'em2', 'em3', 'em5', 'em7', 'em10', 'em15', 'em20', 'em25', 'em30'];

// ユーティリティクラス化するキーワード
export default {
	radius: ['0', ...TOKENS.radius],
	shadow: TOKENS.shadow,
	fz: TOKENS.fz,
	lh: ['1', ...TOKENS.lh], // 検討
	lts: TOKENS.lts,
	ff: TOKENS.ff,
	fw: TOKENS.fw,
	c: ['main', 'accent', 'base', 'pale', 'opposite'],
	bgc: ['main', 'accent', 'base', 'pale', 'strong', 'opposite'],
	bdc: ['main', 'accent', 'base', 'strong'],
	keycolor: [
		'main',
		'accent',
		'red',
		'blue',
		'green',
		'yellow',
		'purple',
		'orange',
		'pink',
		'gray',
		// 'basic',
	],

	// ユーティリティ化
	space: spacingPresets,
	p: [...spacingPresets, ...emPresets, 'box', 'box:s', 'box:l'],
	pxy: [...spacingPresets, ...emPresets],
	gap: [...spacingPresets, ...emPresets],

	// align-content
	// "space-between"

	bd: ['guide', 'emphasis'], // dashed?

	//bds: dashed, solid, double, dotted,

	bg: ['glass', 'stripe', 'grid'],
	z: ['-1', '0', '1'],
	aspect: ['16/9', '4/3', '3/2', '1/1', 'golden', 'silver', 'bronze', 'ogp', 'cinema'], //'2/1',

	// fx: ['1'],
	// gd: ['fix:l', 'fix:r', 'fix:t', 'fix:b'],
	// gt: ['side:l', 'side:r', 'side:s', 'side:e', '3row', '3col'],
	// gta: ['3col', '3row', '3col:ltr'],
	gc: ['1', '2', '3', 'span2'],
	gr: ['1', '2', '3', 'span2'],
	// gcs: ['1', '2', '3'],
	// grs: ['1', '2', '3'],
	gce: ['-1'],
	gre: ['-1'],
	ga: [
		'side',
		//'start', 'center', 'end'
	],
	gradient: ['sunset', 'black-to-bottom'],
	// transform: ['flip:x', 'flip:y', 'flip:xy'],
	animation: [],

	contentSize: ['s', 'l'], // container, constrained のユーティリティクラス
	flow: ['s', 'l'], // flowのユーティリティクラス
	// mbs: ['s', 'm', 'l'], // --mbs--xxx トークン
};

// ユーティリティ化しないけど、変数を用意しておくもの
// export const VAR_PRESETS = {
// 	color: ['bg', 'text', 'link', 'headline'],
// };
