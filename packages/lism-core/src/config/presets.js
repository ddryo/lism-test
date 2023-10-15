const spacingPresets = ['0', '5', '10', '15', '20', '30', '40', '50'];

// PRESETS
export default {
	fz: [
		'root',
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
		'fluid',
		'fluid:s',
		'fluid:l',
	],
	// lh: ['10', '20', '30', '40', '50', '60', '70', '80', '90'],
	lh: ['base', '2xs', 'xs', 's', 'l', 'xl', '2xl'], // 検討
	lts: ['-3', '-2', '-1', '0', '1', '2', '3', '4', '5', '6', '7'],
	ff: ['base', 'mono', 'emoji', 'sans', 'serif'],

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
	p: [...spacingPresets, 'box', 'box:s', 'box:l'],
	flowGap: ['xs', 's', 'm', 'l', 'xl'],
	// align-content
	// "space-between"
	radius: ['0', '1', '2', '3', '4', '5', '6', '99'], // 'round'
	shadow: ['-1', '-2', '-3', '-4', '-5', '0', '1', '2', '3', '4', '5'],
	bd: [
		'guide',
		'emphasis',
		// 'current',
		// 'transparent',
		'top',
		'left',
		'right',
		'bottom',
		'block',
		'inline',
	], // dashed?

	//bds: dashed, solid, double, dotted,

	bg: ['glass', 'stripe', 'grid'],
	z: ['-1', '0', '1'],
	aspect: ['16/9', '4/3', '3/2', '2/1', '1/1', 'golden', 'silver', 'bronze', 'ogp'],
	gta: ['lcr', 'tcb', 'ltr'],
	gt: ['fix:l', 'fix:r', 'fix:t', 'fix:b'],
	gradient: ['sunset', 'black-to-bottom'],

	// size:['container', 'container:s', 'container:l'],
	contentSize: ['xs', 's', 'base', 'l', 'xl'],
};

// ユーティリティ化しないけど、変数を用意しておくもの
// export const VAR_PRESETS = {
// 	color: ['bg', 'text', 'link', 'headline'],
// };
