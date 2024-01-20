const DECORATOR_PROPS = {
	start: {
		inset: { ie: '100%' },
	},
	end: {
		inset: { is: '100%' },
		scale: '-1 1',
	},
};

export function getProps(direction, variant) {
	if (direction === 'start') {
		return {
			boxcolor: '-',
			// gt: 'fix:l',
			ji: 'start',
			ai: 'start',
		};
	} else {
		return {
			boxcolor: '-',
			// gt: 'fix:r',
			ji: 'end',
			ai: 'start',
		};
	}
}

export function getContentProps(direction, variant, contentProps) {
	const returnProps = {
		pos: 'relative',
		maxW: 's',
	};
	if ('speak' === variant && direction === 'start') {
		returnProps.bdrs = { ss: 0 };
	} else if ('speak' === variant && direction === 'end') {
		returnProps.bdrs = { se: 0 };
	}

	return { ...returnProps, ...contentProps };
	// return {
	// 	className: 'c--chat__content',
	// 	pos: 'relative',
	// 	maxW: 's',
	// };
}

export function getDecoProps(direction, variant) {
	return {
		variant: `chat-${variant}`,
		mask: '-',
		pos: 'absolute',
		top: '0',
		...DECORATOR_PROPS[direction],
	};
}
