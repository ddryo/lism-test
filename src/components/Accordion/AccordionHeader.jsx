import React from 'react';
import { Lism } from '../Lism';
import { Center } from '../Center';

import { Icon } from '../Icon';
import { getCommonProps } from '../../lib';
import { AccContext } from './context';

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
	iconSize,
	iconPosition = 'right',
	labelBefore,
	labelAfter,
	labelTag,
	labelProps = {},
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

	const iconProps = {
		tag: 'span',
		className: 'l--accordion__icon',
		isItem: true,
		// isGrid: true,
		// _util: '-fxsh:0',
		// className: 'l--accordion__icon is--item is--grid -fxsh:0',
	};

	// clickable=iconなら、iconをbuttunに
	const { clickable } = React.useContext(AccContext);
	if (clickable) {
		iconProps.tag = 'button';
		iconProps._util = '-bgc: -p: -bd:';
		iconSize = iconSize || '1em';
	} else {
		iconProps['aria-hidden'] = 'true';
		iconSize = iconSize || '1.25em';
	}

	let Icons = null;
	if (openIcon && closeIcon) {
		Icons = (
			<Center {...iconProps}>
				<Icon tag='span' icon={openIcon} size={iconSize} data-to='open' />
				<Icon tag='span' icon={closeIcon} size={iconSize} data-to='close' />
			</Center>
		);
	} else {
		Icons = (
			<Center {...iconProps}>
				<Icon icon={icon || caretSvg} size={iconSize} />
			</Center>
		);
	}

	let baseLabelProps = {
		tag: 'span', // div?
		lismClass: 'l--accordion__label',
		isItem: true,
		_util: '-fxg:1 -ovw:any', // 要検討
	};

	// -f:inhert みたいにフォント関連を一括で継承するクラス作る？
	if (baseLabelProps) {
		baseLabelProps.tag = labelTag;
		baseLabelProps.fz = 'm';
		baseLabelProps.fw = '400';
	}

	// before: Q&Aアイコン入れれるように。
	return (
		<summary {...blockProps}>
			{iconPosition !== 'right' && Icons}
			{labelBefore}
			<Lism {...baseLabelProps} {...labelProps}>
				{children}
			</Lism>
			{labelAfter}
			{iconPosition === 'right' && Icons}
		</summary>
	);
}
