import React from 'react';
import { Lism } from '../Lism';
// import { Center } from '../Flex/Center';

import { Icon } from '../Icon';
import { getLismProps } from '@/lib';
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
	const { className, style, attrs } = getLismProps(props, {
		lismClass: 'l--accordion__header',
		bgc: 'whitesmoke',
	});

	const blockProps = {
		className,
		style,
		...attrs,
	};

	const iconProps = {
		tag: 'span',
		lismClass: 'l--accordion__icon',
	};

	// clickable=iconなら、iconをbuttunに
	const { clickable } = React.useContext(AccContext);
	if (clickable === 'icon') {
		iconProps.tag = 'button';
	} else {
		iconProps['aria-hidden'] = 'true';
		// iconSize = iconSize || '1.25em';
	}

	let Icons = null;
	if (openIcon && closeIcon) {
		Icons = (
			<Lism {...iconProps}>
				<Icon tag='span' icon={openIcon} size={iconSize} data-to='open' />
				<Icon tag='span' icon={closeIcon} size={iconSize} data-to='close' />
			</Lism>
		);
	} else {
		Icons = (
			<Lism {...iconProps}>
				<Icon icon={icon || caretSvg} size={iconSize} />
			</Lism>
		);
	}

	let baseLabelProps = {
		tag: 'span', // div?
		lismClass: 'l--accordion__label',
	};

	// -f:inhert みたいにフォント関連を一括で継承するクラス作る？
	if (labelTag) {
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
