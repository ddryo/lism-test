// import React from 'react';
import { Box } from '../Box';
import { Core } from '../Core';
import { Decorator } from '../Decorator';
import PRESETS from './presets';

export default function DecoBox({
	lismClass = {},
	lismState = [],
	variant = '',
	subvariant = '',
	children,
	data = {},
	isFlow,
	flowGap,
	// sub_data = {},
	// decoratorCount,
	// decoratorProps = {},
	// bodyProps = {},
	...props
}) {
	lismClass.c = 'c--decoBox';
	// lismState.push(`d--${variant}`);

	if (variant) {
		lismClass.c += ` c--decoBox--${variant}`;
	}
	// if (subvariant) {
	// 	lismClass.c += ` deco--${variant}--${subvariant}`;
	// }

	// 'c--decoBox'
	const DATA = Object.assign({}, PRESETS[variant] || {});
	const SUB_DATA = DATA[subvariant] || {};

	const boxProps = Object.assign({}, DATA?.boxProps, SUB_DATA?.boxProps, data.boxProps || {});
	const bodyProps = Object.assign({}, DATA?.bodyProps, SUB_DATA?.bodyProps, data.bodyProps || {});

	// デコレーターの数
	const decoratorCount = DATA?.decoratorCount || 0;

	let decorator = null;
	if (decoratorCount) {
		if (1 === decoratorCount) {
			const decoratorProps = Object.assign(
				{},
				DATA.decoratorProps,
				SUB_DATA.decoratorProps,
				data.decoratorProps || {}
			);

			decorator = <Decorator {...decoratorProps} />;
		} else if (1 < decoratorCount) {
			decorator = Array.from({ length: decoratorCount }).map((_, i) => {
				const decoratorProps = Object.assign(
					{},
					DATA.decoratorProps,
					SUB_DATA.decoratorProps?.[`i${i + 1}`],
					data.decoratorProps || {}
				);
				return <Decorator key={i} index={i + 1} {...decoratorProps} />;
			});
		}
	}

	if (isFlow) {
		bodyProps.isFlow = isFlow;
	}
	if (flowGap) {
		bodyProps.flowGap = flowGap;
	}

	let boxCntent = null;
	if (bodyProps) {
		boxCntent = <Box {...bodyProps}>{children}</Box>;
	} else {
		boxCntent = children;
	}

	// lismState.push(`d--${variant}`);
	// if (subvariant) {
	// 	lismState.push(`d--${variant}--${subvariant}`);
	// }

	if (subvariant) {
		boxProps[`data-${variant}`] = subvariant;
	}

	return (
		<Core lismClass={lismClass} lismState={lismState} {...boxProps} {...props}>
			{boxCntent}
			{decorator}
		</Core>
	);
}
