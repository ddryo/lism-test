import React from 'react';
// import { Core } from '../Core';
// import { Layouter } from '../Layouter';
import { Grid } from '../Grid';

export default function Chat({
	lismClass = {},
	lismState = [],
	variant = 'speak',
	direction = 'start',
	children,
	...props
}) {
	lismClass.c = `c--chat c--chat--${direction}`;
	if (variant) lismClass.c += ` c--chat--${variant}`;

	let boxProps;

	if (direction === 'start') {
		boxProps = {
			// gt: 'fix:l',
			ji: 'start',
			ai: 'start',
		};
	} else {
		boxProps = {
			// gt: 'fix:r',
			ji: 'end',
			ai: 'start',
		};
	}

	if (props.keycolor) {
		lismState.push(`has--mixcolor`);
	}

	return (
		<Grid
			lismClass={lismClass}
			lismState={lismState}
			data-dir={direction}
			{...boxProps}
			{...props}
		>
			{/* {children} */}
			{React.Children.map(children, (child) => {
				// 子コンポーネントにも direction, variant の情報を渡す
				return React.cloneElement(child, { context: { direction, variant } });
			})}
		</Grid>
	);
}
