// import React from 'react';
import { Box, Lism, Decorator } from '@lism/core';

const PRESETS = {
	// stripe:{
	// },
	// grid: {
	// 	boxProps: { p: 'box', bg: 'grid' },
	// 	bodyProps: {},
	// },
	sticky: {
		bodyProps: {
			p: 'box',
			bd: 'right',
			// bgc: '-',
			// c: '-',
			pos: 'relative',
		},
	},
	call: {
		decoratorCount: 2,
		boxProps: {
			d: 'grid',
		},
		bodyProps: { p: 'box:s' },
		decoratorProps: {
			// flexItem: { fxsh: 0 },
			// bgc: 'currentColor',
			// pos: 'absolute',
			// size: '1em',
		},
		left: {
			// rtl言語を考慮してleftも明示的にセット
			// boxProps: { ta: 'left' },
			boxProps: {
				grid: { areas: 'tcb' },
				ta: 'left',
			},
			decoratorProps: {
				i1: {
					rotate: '45deg',
					bd: 'left',
					transformOrigin: 'left bottom',
					gridItem: { ga: 'top' },
					mr: 'auto',
				},
				i2: {
					rotate: '-45deg',
					bd: 'left',
					transformOrigin: 'left top',
					mr: 'auto',
					gridItem: { ga: 'bottom' },
					// flexItem: {},
				},
			},
		},
		right: {
			boxProps: { ta: 'right', grid: { areas: 'tcb' } },
			decoratorProps: {
				i1: {
					bd: 'right',
					rotate: '-45deg',
					transformOrigin: 'right bottom',
					ml: 'auto',
					gridItem: { ga: 'top' },
				},
				i2: {
					bd: 'right',
					rotate: '45deg',
					ml: 'auto',
					transformOrigin: 'right top',
					gridItem: { ga: 'bottom' },
				},
			},
		},
		top: {
			boxProps: { grid: { areas: 'lcr', jc: 'center' } },
			decoratorProps: {
				i1: {
					bd: 'top',
					rotate: '-45deg',
					transformOrigin: 'right top',
					gridItem: { ga: 'l' },
				},
				i2: {
					bd: 'top',
					rotate: '45deg',
					transformOrigin: 'left top',
					gridItem: { ga: 'right' },
				},
			},
		},
		bottom: {
			boxProps: { grid: { areas: 'lcr', jc: 'center', ai: 'end' } },
			decoratorProps: {
				i1: {
					bd: 'bottom',
					rotate: '45deg',
					transformOrigin: 'right bottom',
					gridItem: { ga: 'left' },
				},
				i2: {
					bd: 'bottom',
					rotate: '-45deg',
					transformOrigin: 'left bottom',
					gridItem: { ga: 'right' },
				},
			},
		},
	},
	balloon: {
		decoratorCount: 1,
		boxProps: {
			d: 'grid',
		},
		bodyProps: {
			p: 'box',
			radius: 3,
			w: 'fit-content',
			// bgc: '-', // 親から受け取る
			// flexItem: { fxg: '1' },
		},
		decoratorProps: {
			// pos: 'relative',
			// bgc: '-', // 親から受け取る
			// flexItem: { fxsh: '0' },
			gridItem: { ga: 'fix' },
		},
		left: {
			boxProps: { grid: { template: 'fix:l', ai: 'center' } },
			bodyProps: { mr: 'auto' },
			decoratorProps: {
				rotate: '45deg',
				translate: '50%',
				left: '1px',
				clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%)',
			},
		},

		right: {
			boxProps: { grid: { template: 'fix:r', ai: 'center' } },
			bodyProps: { ml: 'auto' },
			decoratorProps: {
				rotate: '-45deg',
				translate: '-50%',
				right: '1px',
				clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)',
			},
		},
		top: {
			boxProps: { grid: { template: 'fix:t', ji: 'center' } },
			decoratorProps: {
				rotate: '45deg',
				translate: '0 50%',
				top: '1px',
				clipPath: 'polygon(0% 0%, 0% 100%, 100% 0%)',
			},
		},
		bottom: {
			boxProps: { grid: { template: 'fix:b', ji: 'center' } },
			decoratorProps: {
				rotate: '45deg',
				translate: '0 -50%',
				bottom: '1px',
				clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
			},
		},
		'top-start': {
			// boxProps: { flex: { direction: 'column', ai: 'flex-start' } },
			boxProps: { grid: { template: 'fix:t', ji: 'start' } },
			decoratorProps: {
				rotate: '45deg',
				translate: '0% 50%',
				mX: '1.5em',
				top: '1px',
				// flexItem: { fxsh: '0', order: '-1' },
				clipPath: 'polygon(0% 0%, 0% 100%, 100% 0%)',
			},
		},

		'bottom-start': {
			// boxProps: { flex: { direction: 'column', ai: 'flex-start' } },
			boxProps: { grid: { template: 'fix:b', ji: 'start' } },
			decoratorProps: {
				rotate: '45deg',
				translate: '0% -50%',
				mX: '1.5em',
				bottom: '1px',
				clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
			},
		},
	},
	pipipi: {
		decoratorCount: 1,
		boxProps: { d: 'grid' },
		bodyProps: {},
		decoratorProps: {
			// bgc: 'currentColor',
			gridItem: { ga: 'fix' },
			variant: 'pipipi',
		},
		left: {
			boxProps: { grid: { template: 'fix:l' }, ai: 'start' },
			bodyProps: { ta: 'left' },
			decoratorProps: { rotate: '-45deg' },
		},
		right: {
			boxProps: { grid: { template: 'fix:r' }, ai: 'start' },
			bodyProps: { ta: 'right' },
			decoratorProps: { rotate: '45deg' },
		},
	},
	kakko: {
		decoratorCount: 2,
		boxProps: { p: 'box', pos: 'relative' },
		decoratorProps: {
			pos: 'absolute',
			bd: '-',
		},
		lr: {
			decoratorProps: {
				i1: {
					top: 0,
					left: 0,
					bdr: 'none',
					bdb: 'none',
				},
				i2: {
					right: 0,
					bottom: 0,
					bdt: 'none',
					bdl: 'none',
					// rotate: '180deg',
				},
			},
		},
		tb: {
			decoratorProps: {
				i1: {
					top: 0,
					right: 0,
					// rotate: '90deg',
					bdl: 'none',
					bdb: 'none',
				},
				i2: {
					left: 0,
					bottom: 0,
					// rotate: '-90deg',
					bdr: 'none',
					bdt: 'none',
				},
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
				i1: {
					top: 0,
					left: 0,
					h: '100%',
					bdr: 'none',
				},
				i2: {
					top: 0,
					right: 0,
					h: '100%',
					bdl: 'none',
					// rotate: '180deg',
				},
			},
		},
		tb: {
			decoratorProps: {
				i1: {
					top: 0,
					left: 0,
					w: '100%',
					bdb: 'none',
					// rotate: '90deg',
				},
				i2: {
					bottom: 0,
					left: 0,
					w: '100%',
					bdt: 'none',
					// rotate: '180deg',
				},
			},
		},
	},
};

export default function DecorationBox({
	lismState = [],
	variant = '',
	direction = '',
	children,
	data,
	// decoratorCount,
	// decoratorProps = {},
	// bodyProps = {},
	...props
}) {
	const DATA = Object.assign({}, PRESETS[variant] || {}, data);
	const DIR_DATA = DATA[direction] || {};

	const boxProps = Object.assign({}, DATA?.boxProps, DIR_DATA?.boxProps);
	const bodyProps = Object.assign({}, DATA?.bodyProps, DIR_DATA?.bodyProps);

	// デコレーターの数
	const decoratorCount = DATA?.decoratorCount || 0;

	let decorator = null;
	if (decoratorCount) {
		if (1 === decoratorCount) {
			const decoratorProps = Object.assign({}, DATA.decoratorProps, DIR_DATA.decoratorProps);

			decorator = (
				<Decorator
					// variant={variant}
					// direction={direction || null}
					{...decoratorProps}
				/>
			);
		} else if (1 < decoratorCount) {
			decorator = Array.from({ length: decoratorCount }).map((_, i) => {
				const decoratorProps = Object.assign(
					{},
					DATA.decoratorProps,
					DIR_DATA.decoratorProps?.[`i${i + 1}`]
				);
				return (
					<Decorator
						key={i}
						// variant={variant}
						// direction={direction}
						index={i + 1}
						{...decoratorProps}
					/>
				);
			});
		}
	}

	let boxCntent = null;
	if (bodyProps) {
		const bodyClass = `d--${variant}__body`;
		boxCntent = (
			<Lism className={bodyClass} {...bodyProps}>
				{children}
			</Lism>
		);
	} else {
		boxCntent = children;
	}

	lismState.push(`d--${variant}`);
	if (direction) {
		lismState.push(`d--${variant}--${direction}`);
	}

	// if (direction) {
	// 	boxProps[`data-${variant}`] = direction;
	// }

	return (
		<Box lismState={lismState} {...boxProps} {...props}>
			{boxCntent}
			{decorator}
		</Box>
	);
}
