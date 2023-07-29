import React from 'react';
import { Lism } from '../Lism';
// import { Accordion, AccordionHeader, AccordionBody } from '../Accordion';
// import classnames from 'classnames';

export default function NavMenu({
	children,
	variant,
	nestLevel,
	// itemP,
	style = {},
	...props
}) {
	// p:0→ ulにデフォルトで付いてくる可能性の高いpaddingを削除

	const ulProps = {
		tag: 'ul',
		blockClass: 'b--navMenu',
		p: 0,
		lis: 'none',
		// style: style,
		...props,
	};

	if (variant) {
		ulProps['data-variant'] = variant;
	}

	if (nestLevel) {
		style['--level'] = parseInt(nestLevel);
		ulProps['data-nest-level'] = nestLevel;
	}

	return (
		<Lism {...ulProps} style={style}>
			{children}
		</Lism>
	);
}

// itemProps: p,border,background-color,shadow,radius,flowGap,gap...?
// has--itemProp > .is--item{...}

// --item-p, --item-shadow, --item-radius, --item-bg, --item-hover, --item-border,
// [data-item-p]
// :where(is--item{p:var(--item-p),...})
// data-ls-provide=[p,...], data-ls-consume=[p,...]
