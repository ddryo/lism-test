import React from 'react';
import { Lism, Decorator } from '@lism/core';

const PRESETS = {
	sticky: {
		textProps: {
			pX: 40,
			pY: 30,
			bgc: '-',
			c: '-',
			pos: 'relative',
		},
	},
	grid: {
		blockProps: {
			p: 40,
		},
	},
	stripe: {
		blockProps: {
			p: 40,
		},
	},
	emphasis: {
		decoratorCount: 1,
		blockProps: { isGrid: true },
		textProps: { pY: 10, pX: 20 },
		decoratorProps: {
			bgc: 'currentColor',
			ga: 'fix',
			pos: null,
		},
		left: {
			blockProps: { gta: '"fix ."', ai: 'start', jc: 'start' },
			decoratorProps: { rotate: '-45deg' },
		},
		right: {
			blockProps: { gta: '". fix"', ai: 'start', jc: 'end' },
			decoratorProps: { rotate: '45deg' },
		},
	},
	call: {
		decoratorCount: 2,
		blockProps: {
			p: 40,
		},
		decoratorProps: {
			bgc: 'currentColor',
		},
		left: {
			// rtl言語を考慮してleftも明示的にセット
			blockProps: { ta: 'left' },
			decoratorProps: {
				i1: {
					top: '0',
					left: '0',
					rotate: '45deg',
					transformOrigin: 'left bottom',
				},
				i2: {
					bottom: '0',
					left: '0',
					rotate: '-45deg',
					transformOrigin: 'left top',
				},
			},
		},
		right: {
			blockProps: { ta: 'right' },
			decoratorProps: {
				i1: {
					top: '0',
					right: '0',
					rotate: '-45deg',
					transformOrigin: 'right bottom',
				},
				i2: {
					bottom: '0',
					right: '0',
					rotate: '45deg',
					transformOrigin: 'right top',
				},
			},
		},
		top: {
			blockProps: { isGrid: true, gta: '"l c r"', jc: 'center', gap: 20 },
			decoratorProps: {
				i1: {
					pos: null,
					rotate: '45deg',
					transformOrigin: 'right top',
					ga: 'l',
				},
				i2: {
					pos: null,
					rotate: '-45deg',
					transformOrigin: 'left top',
					ga: 'r',
				},
			},
		},
		bottom: {
			blockProps: { isGrid: true, gta: '"l c r"', jc: 'center', ai: 'end', gap: 20 },
			decoratorProps: {
				i1: {
					pos: null,
					rotate: '-45deg',
					transformOrigin: 'right bottom',
					ga: 'l',
				},
				i2: {
					pos: null,
					rotate: '45deg',
					transformOrigin: 'left bottom',
					ga: 'r',
				},
			},
		},
	},
	balloon: {
		decoratorCount: 1,
		blockProps: {
			isGrid: true,
		},
		textProps: {
			p: 30,
			radius: 3,
		},
		decoratorProps: {
			ga: 'fix',
			pos: null,
		},
		'left-center': {
			blockProps: { gta: '"fix ."', ai: 'center', jc: 'start' },
			decoratorProps: {
				rotate: '-45deg',
				transformOrigin: 'right top',
			},
		},
		// 'left-top': {
		// 	blockProps: { gta: '"fix ."', ai: 'start', jc: 'start' },
		// 	decoratorProps: {
		// 		rotate: '-45deg',
		// 		transformOrigin: 'right top',
		// 		style: { '--trnsltY': 'calc(-25% + 1.25em)' },
		// 	},
		// },
		// 'left-bottom': {
		// 	blockProps: { gta: '"fix ."', ai: 'end', jc: 'start' },
		// 	decoratorProps: {
		// 		rotate: '-45deg',
		// 		transformOrigin: 'right top',
		// 		style: { '--trnsltY': 'calc(-25% - 1.25em)' },
		// 	},
		// },
		'right-center': {
			blockProps: { gta: '". fix"', ai: 'center', jc: 'end' },
			decoratorProps: {
				rotate: '45deg',
				transformOrigin: 'left top',
			},
		},
		// 'right-top': {
		// 	blockProps: { gta: '". fix"', ai: 'start', jc: 'end' },
		// 	decoratorProps: {
		// 		rotate: '45deg',
		// 		transformOrigin: 'left top',
		// 		style: { '--trnsltY': 'calc(-25% + 1.25em)' },
		// 	},
		// },
		// 'right-bottom': {
		// 	blockProps: { gta: '". fix"', ai: 'end', jc: 'end' },
		// 	decoratorProps: {
		// 		rotate: '45deg',
		// 		transformOrigin: 'left top',
		// 		style: { '--trnsltY': 'calc(-25% - 1.25em)' },
		// 	},
		// },
		'top-center': {
			blockProps: { gta: '"fix" "."', ai: 'start', ji: 'center' },
			decoratorProps: { rotate: '45deg', transformOrigin: 'left bottom' },
		},
		'top-left': {
			blockProps: { gta: '"fix" "."', ai: 'start', ji: 'start' },
			decoratorProps: {
				rotate: '45deg',
				transformOrigin: 'left bottom',
				style: { '--trnsltX': 'calc(-25% + 1.25em)' },
			},
		},
		'top-right': {
			blockProps: { gta: '"fix" "."', ai: 'start', ji: 'end' },
			decoratorProps: {
				rotate: '45deg',
				transformOrigin: 'left bottom',
				style: { '--trnsltX': 'calc(-25% - 1.25em)' },
			},
		},
		'bottom-center': {
			blockProps: { gta: '"." "fix"', ai: 'start', ji: 'center' },
			decoratorProps: {
				rotate: '-45deg',
				transformOrigin: 'left top',
			},
		},
		'bottom-left': {
			blockProps: { gta: '"." "fix"', ai: 'start', ji: 'start' },
			decoratorProps: {
				rotate: '-45deg',
				transformOrigin: 'left top',
				style: { '--trnsltX': 'calc(-25% + 1.25em)' },
			},
		},
		'bottom-right': {
			blockProps: { gta: '"." "fix"', ai: 'start', ji: 'end' },
			decoratorProps: {
				rotate: '-45deg',
				transformOrigin: 'left top',
				style: { '--trnsltX': 'calc(-25% - 1.25em)' },
			},
		},
	},
	kakko: {
		decoratorCount: 2,
		blockProps: { p: 40 },
		lr: {
			decoratorProps: {
				i1: {
					top: 0,
					left: 0,
				},
				i2: {
					right: 0,
					bottom: 0,
					rotate: '180deg',
				},
			},
		},
		tb: {
			decoratorProps: {
				i1: {
					top: 0,
					right: 0,
					rotate: '90deg',
				},
				i2: {
					left: 0,
					bottom: 0,
					rotate: '-90deg',
				},
			},
		},
	},
	'big-kakko': {
		decoratorCount: 2,
		blockProps: { p: 40 },
		lr: {
			decoratorProps: {
				i1: {
					top: 0,
					left: 0,
					h: '100%',
				},
				i2: {
					top: 0,
					right: 0,
					h: '100%',
					rotate: '180deg',
				},
			},
		},
		tb: {
			decoratorProps: {
				i1: {
					top: 0,
					left: 0,
					w: '100%',
					// rotate: '90deg',
				},
				i2: {
					bottom: 0,
					left: 0,
					w: '100%',
					rotate: '180deg',
				},
			},
		},
	},
};

export const DecoratedText = ({
	variant = 'text',
	direction = '',
	children,
	decoratorCount,
	decoratorProps = {},
	textProps = {},
	...props
}) => {
	const PRESET_DATA = PRESETS[variant] || {};
	const DIR_DATA = PRESET_DATA[direction] || {};
	const blockProps = { ...PRESET_DATA?.blockProps, ...DIR_DATA?.blockProps };

	// デコレーターの数
	decoratorCount = decoratorCount || PRESET_DATA?.decoratorCount || 0;

	// props
	textProps = { ...PRESET_DATA?.textProps, ...DIR_DATA?.textProps, ...textProps };

	let decorator = null;
	if (decoratorCount) {
		if (1 === decoratorCount) {
			const _presets = {
				...PRESET_DATA?.decoratorProps,
				...DIR_DATA?.decoratorProps,
			};
			decorator = <Decorator type={variant} direction={direction || null} {..._presets} {...decoratorProps} />;
		} else if (1 < decoratorCount) {
			decorator = Array.from({ length: decoratorCount }).map((_, i) => {
				// console.log(DIR_DATA?.decoratorProps?.[`i${i + 1}`]);

				const _presets = {
					...PRESET_DATA?.decoratorProps,
					...DIR_DATA?.decoratorProps?.[`i${i + 1}`],
				};
				return (
					<Decorator
						key={i}
						type={variant}
						direction={direction}
						index={i + 1}
						{..._presets}
						{...decoratorProps}
					/>
				);
			});
		}
	}

	return (
		<Lism
			blockClass='d--text'
			data-variant={variant}
			data-direction={direction}
			pos='relative'
			{...blockProps}
			{...props}
		>
			<Lism blockClass='d--text__content' {...textProps}>
				{children}
			</Lism>
			{decorator}
		</Lism>
	);
};
