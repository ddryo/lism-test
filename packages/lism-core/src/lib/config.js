export const BREAK_POINTS = ['sm', 'md', 'lg', 'xl'];

export const PRESETS = {
	fz: ['5xl', '4xl', '3xl', '2xl', 'xl', 'l', 'm', 's', 'xs', '2xs', 'r'],
	lh: [],
	// c,bgc,bdc 共通でutility化 & --c--xxx で管理するカラー
	color: [
		'main',
		'accent',
		'gray',
		'lightgray',
		'darkgray',
		'dimgray',
		'whitesmoke',
		'white',
		'black',
	],
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
		// 'lightgray',
		// 'darkgray',
	],

	// ユーティリティ化するもの。（）80~100以降、変数の用意はしている
	space: ['0', '10', '20', '30', '40', '50', '60', '70'],

	// align-content
	// "space-between"
	radius: ['0', '1', '2', '3', '4', '5', '6', '99'], // 'round'
	shadow: ['-1', '-2', '-3', '-4', '-5', '0', '1', '2', '3', '4', '5'],
	border: ['guide', 'transparent', 'top', 'left', 'right', 'bottom', 'block', 'inline'], // dashed?
	//bds: dashed, solid, double, dotted,
	bg: ['glass'],
	// inset: ['0'], // inset用
	// fw: ['100', '300', '400', '500', '700', '900'],
	// z: ['0', '1'],
	// 主要な areaキーワード はdata属性で出力
};

// ユーティリティ化しないけど、変数を用意しておくもの
export const VAR_PRESETS = {
	color: ['bg', 'text', 'link', 'headline'],
};
