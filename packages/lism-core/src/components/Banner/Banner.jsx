import React from 'react';
import { Frame } from '../Frame';
import { LinkBox } from '../LinkBox';
import { FilterLayer } from '../Layer';
import { Lism } from '../Lism';
import { getMediaLayer } from '../helper';
// import { Box } from '../Box';
// import classnames from 'classnames';

export default function Banner({
	children,
	// ratio,
	// href,
	media,
	filter,
	// flowGap,
	// contentProps = {},
	...attrs
}) {
	const theProps = { blockClass: 'b--banner', ...attrs };

	if (attrs.aspect) {
		theProps.as = Frame;
	}

	const Contents = (
		<>
			{getMediaLayer(media)}
			{filter && <FilterLayer {...filter} />}
			{/* <Lism blockClass='b--banner__content' isFlow flowGap={flowGap || 40}> */}
			{children}
			{/* </Lism> */}
		</>
	);

	// hrefあり
	if (attrs.href) {
		return (
			<LinkBox tag='a' {...theProps}>
				{Contents}
			</LinkBox>
		);
	}

	// ratio指定なし、href指定なし
	return <Lism {...theProps}>{Contents}</Lism>;
}
