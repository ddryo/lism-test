import React from 'react';
// import { Lism } from '../Lism';
import { InlineIcon, Icon } from '../Icon';
import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

const caretSvg = (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
		<polygon points='13.6,4.2 8,9.8 2.4,4.2 1.4,5.2 7,10.8 8,11.8 9,10.8 14.6,5.2 ' />
	</svg>
);

export default function AccordionHeader({
	children,
	icon,
	openIcon,
	closeIcon,
	iconSize = '1.25em',
	iconPosition = 'right',
	before,
	tag,
	...props
}) {
	const { className, style, attrs } = getCommonProps(props, {
		isFlex: true,
		lismClass: 'l--accordion__header',
		ai: 'center',
		jc: 'space-between',
		bgc: 'lightgray',
		p: 40,
		gap: 30,
	});
	const blockProps = {
		className,
		style,
		...attrs,
	};

	// if (typeof icon === 'string') {
	// 	blockProps['data-icon'] = icon;
	// 	// icon = <span className={`e--icon--${icon}`} aria-hidden='true'></span>;
	// } else {
	// 	blockProps['data-icon'] = 'svg';
	// }

	let icons = null;
	if (openIcon && closeIcon) {
		icons = (
			<span className='l--accordion__icon is--item is--grid -fxsh:0' aria-hidden='true'>
				<Icon tag='span' icon={openIcon} size={iconSize} _util='-open' />
				<Icon tag='span' icon={closeIcon} size={iconSize} _util='-close' />
			</span>
		);
	} else {
		icons = (
			<span className='l--accordion__icon is--item is--grid -fxsh:0' aria-hidden='true'>
				<Icon
					tag='span'
					icon={icon || caretSvg}
					size={iconSize}
					//_util='-d:b'
				/>
			</span>
		);
	}

	const LavelTag = tag || 'span';
	// before: Q&Aアイコン入れれるように。
	return (
		<summary {...blockProps}>
			{before}
			{iconPosition !== 'right' && icons}
			<LavelTag className='l--accordion__label is--item -ovw:any -fxg:1'>{children}</LavelTag>
			{iconPosition === 'right' && icons}
		</summary>
	);
}
