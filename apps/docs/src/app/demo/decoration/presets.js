import {
	Grid,
	GridItem,
	// DecoBox,
} from '@loos/lism-core';

export default {
	// stripe:{
	// },
	// grid: {
	// 	boxProps: { p: 'box', bg: 'grid' },
	// 	bodyProps: {},
	// },
	sticky: {
		boxProps: {
			as: Grid,
			gt: `'fix .' / auto 1fr`,
		},
		bodyProps: {
			as: GridItem,
			// gcs: '1',
			ga: 'fix',
			pos: 'relative',
			c: 'base',
			bgc: 'pale',
			p: 'box',
			w: 'fit-content',
			bd: 'right',
			// bdc: 'inherit',
			bdw: '.5em',
		},
		decoratorCount: 1,
		decoratorProps: {
			as: GridItem,
			// gcs: '1',
			ga: 'fix',
			w: '50%',
			h: '50%',
			ml: 'auto',
			mt: 'auto',
			z: '-1',
			rotate: '4deg',
			transformOrigin: 'left bottom',
			translate: '-4px -4px',
			// filter: blur(4px),
		},
	},

	pipipi: {
		decoratorCount: 1,
		boxProps: { as: Grid, gt: 'fix:l' },
		bodyProps: { p: 'box:s', pb: 0, lh: 's', mt: 10 },
		decoratorProps: {
			// bgc: 'currentColor',
			as: GridItem,
			hasSize: true,
			size: '.5em',
			ga: 'fix',
			variant: 'pipipi',
		},
		left: {
			boxProps: { gt: 'fix:l', ai: 'start' },
			bodyProps: { ta: 'left' },
			decoratorProps: {
				bd: 'left',
				rotate: '-45deg',
				translate: '100% 50%',
			},
		},
		right: {
			boxProps: { gt: 'fix:r', ai: 'start' },
			bodyProps: { ta: 'right' },
			decoratorProps: { m: '1px', bd: 'left', rotate: '45deg', translate: '0% 50%' },
		},
	},
	kakko: {
		decoratorCount: 2,
		boxProps: { p: 'box', pos: 'r' },
		decoratorProps: { pos: 'a', bd: '-' },
		lr: {
			decoratorProps: {
				i1: { t: 0, l: 0, bdr: 'none', bdb: 'none' },
				i2: { r: 0, b: 0, bdt: 'none', bdl: 'none' },
			},
		},
		tb: {
			decoratorProps: {
				i1: { t: 0, r: 0, bdl: 'none', bdb: 'none' },
				i2: { l: 0, b: 0, bdr: 'none', bdt: 'none' },
			},
		},
	},
	'big-kakko': {
		decoratorCount: 2,
		boxProps: { p: 'box:l', pos: 'relative' },
		decoratorProps: {
			pos: 'absolute',
			bd: '-',
		},
		lr: {
			decoratorProps: {
				i1: { t: 0, l: 0, h: '100%', bdr: 'none' },
				i2: { t: 0, r: 0, h: '100%', bdl: 'none' },
			},
		},
		tb: {
			decoratorProps: {
				i1: { t: 0, l: 0, w: '100%', bdb: 'none' },
				i2: { b: 0, l: 0, w: '100%', bdt: 'none' },
			},
		},
	},
};
