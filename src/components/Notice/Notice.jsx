import React from 'react';
import { getMaybeColorVar } from '../../lib';
import { Box } from '../index';
import { Lism } from '../Lism';
import { Icon } from '../Icon';

// import classnames from 'classnames';

export default function Notice({
	icon,
	caption,
	variant,
	color,
	// boxColor,
	// iconColor,
	style = {},
	children,
	...props
}) {
	// --keyColor

	if (variant && color) {
		style['--keyColor'] = getMaybeColorVar(color);
	}

	// border = bd
	const blockProps = {
		blockClass: 'b--notice',
		radius: '1',
		'data-variant': variant,
		// maw: "60em",
		style,
		...props,
	};

	const titleProps = {
		blockClass: 'b--notice__head',
		// lh: 1.5,
		gap: 20,
	};

	if ('fill' !== variant) {
		blockProps.padding = 40;
	}

	if ('online' === variant) {
		titleProps.padding = { X: 20 };
	} else if ('cbox' === variant) {
		blockProps.cbox = color;
	}

	return (
		<Box {...blockProps}>
			<Lism {...titleProps} isFlex ai='center' fxw='nowrap'>
				{icon && <Icon icon={icon} blockClass='b--notice__icon' size='1.5em' />}
				<span>{caption}</span>
			</Lism>

			<Lism blockClass='b--notice__body' isFlow gap={40}>
				{children}
			</Lism>
		</Box>
	);
}
