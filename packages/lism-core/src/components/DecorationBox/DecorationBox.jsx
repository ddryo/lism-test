// import React from 'react';
import { Box } from '../Box';
import { Lism } from '../Lism';
import { Decorator } from '../Decorator';
import PRESETS from './presets';

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

			decorator = <Decorator {...decoratorProps} />;
		} else if (1 < decoratorCount) {
			decorator = Array.from({ length: decoratorCount }).map((_, i) => {
				const decoratorProps = Object.assign(
					{},
					DATA.decoratorProps,
					DIR_DATA.decoratorProps?.[`i${i + 1}`]
				);
				return <Decorator key={i} index={i + 1} {...decoratorProps} />;
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
