// import React from 'react';
import { Core } from '../Core';
import { Grid } from '../Grid';
import { Decorator } from '../Decorator';
import { Avatar } from '../Avatar';
// import { MediaLayer } from '../Layer';

const DECORATOR_PROPS = {
	// chat: {
	left: {
		// rtl言語を考慮してleftも明示的にセット
		top: 0,
		right: '100%',
	},
	right: {
		top: 0,
		left: '100%',
	},
	// },
};

export default function ChatBubble({
	name,
	icon = '',
	type = 'chat',
	direction = 'left',
	contentProps = {},
	avatarProps = {},
	nameProps = {},
	children,
	...props
}) {
	let decorators = null;
	// const fxd = 'left' === direction ? null : 'row-reverse';

	let boxProps = {
		// ji: direction === 'left' ? 'start' : 'end',
	};
	// let _avatarProps = { radius: '99' };
	let bodyProps = {};
	let contentPropsDefault = {
		isFlow: true,
		flowGap: 's',
		radius: '3',
		p: 'box:s',
	};

	let namePropsDefault = {
		// d: 'flex',
		// flex: {
		// 	direction: direction === 'left' ? 'row' : 'row-reverse',
		// },
		fz: '2xs',
		p: 10,
		translate: '0 -100%',
	};
	nameProps = Object.assign(namePropsDefault, nameProps);

	let gridTemplate = direction === 'left' ? 'fix:l' : 'fix:r';

	if ('box' === type) {
		gridTemplate = 'fix:t';
		boxProps.gap = 0;
		contentPropsDefault.radius = 2;
		contentPropsDefault.p = 'box';
		if (direction === 'left') {
			nameProps.mr = 'auto';
		} else {
			nameProps.ml = 'auto';
		}
		// avatarProps = Object.assign({ radius: '1' }, avatarProps);
	} else {
		// console.log('DECORATOR_PROPS[direction]', DECORATOR_PROPS[direction]);
		decorators = (
			<>
				<Decorator
					variant={type}
					data-dir={direction}
					data-index='1'
					bgc='-'
					pos='absolute'
					{...DECORATOR_PROPS[direction]}
				/>
				<Decorator
					variant={type}
					data-dir={direction}
					data-index='2'
					bgc='-'
					pos='absolute'
					{...DECORATOR_PROPS[direction]}
				/>
			</>
		);
	}

	return (
		<Grid
			blockClass='b--chatBubble'
			template={gridTemplate}
			data-type={type}
			data-dir={direction}
			{...boxProps}
			{...props}
		>
			{icon && (
				<Avatar
					blockClass='b--chatBubble__icon'
					radius='99'
					aria-hidden='true'
					{...avatarProps}
				>
					<img src={icon} alt='' width={60} height={60} loading='lazy' />
				</Avatar>
			)}

			{/* aria-label : "name の発言" */}
			{name && (
				<Core blockClass='b--chatBubble__name' {...nameProps}>
					{name}
				</Core>
			)}
			<Core blockClass='b--chatBubble__body' {...bodyProps}>
				<Core
					blockClass='b--chatBubble__content'
					{...contentPropsDefault}
					{...contentProps}
				>
					{children}
				</Core>
				{decorators}
			</Core>
		</Grid>
	);
}
