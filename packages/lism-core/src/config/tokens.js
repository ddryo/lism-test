// const spacingPresets = ['0', '5', '10', '15', '20', '30', '40', '50'];

// PRESETS
export default {
	fz: [
		'5xl',
		'4xl',
		'3xl',
		'2xl',
		'xl',
		'l',
		'm',
		'r',
		's',
		'xs',
		'2xs',
		// 'fluid',
		// 'fluid:s',
		// 'fluid:l',
	],
	// lh: ['10', '20', '30', '40', '50', '60', '70', '80', '90'],
	lh: ['base', '2xs', 'xs', 's', 'l', 'xl', '2xl'], // 検討
	lts: ['-3', '-2', '-1', '0', '1', '2', '3', '4', '5', '6', '7'],
	ff: ['base', 'mono', 'emoji', 'sans', 'serif'],

	// space: ['0', '5', '10', '15', '20', '25', '30', '40', '50', '60', '70', '80', '90', '100'],
	// em: ['1', '2', '3', '4', '5', '10', '15', '20', '25', '30'],
	// p: ['box', 'box:s', 'box:l'],

	radius: ['0', '1', '2', '3', '4', '5', '6', '99'],
	shadow: ['-1', '-2', '-3', '-4', '-5', '0', '1', '2', '3', '4', '5'],

	// size:['container', 'container:s', 'container:l'],
	size: ['xs', 's', 'm', 'l', 'xl', 'item', 'screenW'], // --size--xxx トークン

	// --変数化できるキーワード
	color: [
		'main',
		'accent',
		'red',
		'blue',
		'green',
		'yellow',
		'purple',
		'orange',
		'pink',
		'white',
		'black',
		'gray',
		'b50',
		'b100',
		'b200',
		'b300',
		'b400',
		'b500',
		'b600',
		'b700',
		'b800',
		'b900',
		// 'b950',
	],
	filter: ['blur', 'blur:s', 'blur:l', 'darken', 'lighten'],
};

// ユーティリティ化しないけど、変数を用意しておくもの
// export const VAR_PRESETS = {
// 	color: ['bg', 'text', 'link', 'headline'],
// };
