import React from 'react';
import { Lism } from '../Lism';
import { Cluster } from '../Flex/Cluster';
// import { getMaybeColorVar } from '../../lib';

export default function NavMenu({
	children,
	variant,
	nestLevel,
	border,
	direction,
	// hovBgc,
	// hovColor,
	// itemP,
	// style = {},
	...props
}) {
	// p:0→ ulにデフォルトで付いてくる可能性の高いpaddingを削除

	const lismStyle = {};
	const navProps = {
		tag: 'ul',
		blockClass: 'b--navMenu',
		p: 0,
		// lis: 'none',
		// style: style,
		...props,
	};

	if (variant) {
		navProps['data-variant'] = variant;
	}

	if (border)
		if (variant === 'box') {
			navProps.bd = '-';
		} else if (variant === 'border') {
			navProps.bd = '-';
			navProps.bdl = 'none';
			navProps.bdr = 'none';
		}

	if (nestLevel) {
		lismStyle['--level'] = parseInt(nestLevel);
		navProps['data-nest-level'] = nestLevel;
	}

	// if (hovBgc) {
	// 	lismStyle['--hov--bgc'] = getMaybeColorVar(hovBgc);
	// }
	// if (hovColor) {
	// 	lismStyle['--hov--c'] = getMaybeColorVar(hovColor);
	// }

	if (direction === 'horizontal') {
		return (
			<Cluster {...navProps} data-direction='horizontal' lismStyle={lismStyle}>
				{children}
			</Cluster>
		);
	}
	return (
		<Lism {...navProps} lismStyle={lismStyle}>
			{children}
		</Lism>
	);
}
