import React from 'react';
import { Lism } from '../Lism';
// import { getMaybeColorVar } from '../../lib';

export default function NavMenu({
	children,
	variant,
	nestLevel,
	// hovBgc,
	// hovColor,
	// itemP,
	// style = {},
	...props
}) {
	// p:0→ ulにデフォルトで付いてくる可能性の高いpaddingを削除

	const lismStyle = {};
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
		lismStyle['--level'] = parseInt(nestLevel);
		ulProps['data-nest-level'] = nestLevel;
	}
	// if (hovBgc) {
	// 	lismStyle['--hov--bgc'] = getMaybeColorVar(hovBgc);
	// }
	// if (hovColor) {
	// 	lismStyle['--hov--c'] = getMaybeColorVar(hovColor);
	// }

	return (
		<Lism {...ulProps} lismStyle={lismStyle}>
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
