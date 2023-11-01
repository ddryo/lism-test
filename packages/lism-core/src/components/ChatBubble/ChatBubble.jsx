// import React from 'react';
import { Core } from '../Core';
import { Layout } from '../Layout';
import { Grid } from '../Grid';
import { Decorator } from '../Decorator';
// import { DecoBox } from '../DecoBox';
import { Avatar } from '../Avatar';
// import { MediaLayer } from '../Layer';

const DECORATOR_PROPS = {
	// chat: {
	// 	left: { box: { template: 'fix:l' }, body: {}, content: {}, deco: {} },
	// 	right: { box: { template: 'fix:r' }, deco: { flip: 'x' } },
	// },
	// think: {
	// 	left: { box: { template: 'fix:l' }, body: {}, content: {}, deco: {} },
	// 	right: { box: { template: 'fix:r' }, deco: { flip: 'x' } },
	// },
	// box: {
	// 	content: {
	// 		radius: 1,
	// 		p: 'box',
	// 	},
	// },
	left: {
		// rtl言語を考慮してleftも明示的にセット
		top: '0',
		right: '100%',
	},
	right: {
		top: '0',
		left: '100%',
	},
};

export default function ChatBubble({
	lismClass = {},
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
	lismClass.c = 'b--chatBubble';
	if (type) lismClass.c += ` b--chatBubble--${type}`;

	let decorator = null;
	// const fxd = 'left' === direction ? null : 'row-reverse';

	let boxProps = {
		template: direction === 'left' ? 'fix:l' : 'fix:r',
		// ji: direction === 'left' ? 'start' : 'end',
	};
	// let _avatarProps = { radius: '99' };
	let bodyProps = {};
	let contentPropsDefault = {
		isFlow: 's',
		radius: '2',
		consume: 'p',
	};

	let namePropsDefault = {
		fz: '2xs',
		p: 10,
		translate: '0 -100%',
	};
	nameProps = Object.assign(namePropsDefault, nameProps);

	// let gridTemplate = direction === 'left' ? 'fix:l' : 'fix:r';

	if ('box' === type) {
		// boxProps.template = 'fix:t';
		boxProps.gap = 0;
		// contentPropsDefault.radius = 1;
		// contentPropsDefault.p = 'box';

		if (direction === 'left') {
			nameProps.mr = 'auto';
		} else {
			nameProps.ml = 'auto';
		}
		// avatarProps = Object.assign({ radius: '1' }, avatarProps);
	} else {
		// console.log('DECORATOR_PROPS[direction]', DECORATOR_PROPS[direction]);
		decorator = (
			<Decorator
				variant={type}
				data-dir={direction}
				pos='absolute'
				{...DECORATOR_PROPS[direction]}
			/>
		);
	}

	return (
		<Grid lismClass={lismClass} data-dir={direction} {...boxProps} {...props}>
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
				<Layout
					blockClass='b--chatBubble__content'
					{...contentPropsDefault}
					{...contentProps}
				>
					{children}
				</Layout>
				{decorator}
			</Core>
		</Grid>
	);
}
