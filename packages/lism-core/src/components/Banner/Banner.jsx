import React from 'react';
import { Frame } from '../Frame';
import { LinkBox } from '../LinkBox';
import { MediaLayer } from '../Layer';
// import { Box } from '../Box';
import { Lism } from '../Lism';
import { getMediaLayer, getFilterLayer } from '../helper';
// import classnames from 'classnames';

export default function Banner({
	children,
	ratio,
	media,
	href,
	filter,
	flowGap,
	// contentProps = {},
	...attrs
}) {
	// let bannerContents = null;
	const blockProps = { blockClass: 'b--banner', ...attrs };

	const Contents = (
		<Lism blockClass='b--banner__content' isFlow flowGap={flowGap || 40}>
			{children}
		</Lism>
	);

	// ratio の有無、href の有無でコンポーネントを分岐していく
	if (ratio) {
		// ratioあり、hrefあり
		if (href) {
			blockProps.href = href;
			return (
				<LinkBox href={href} {...blockProps} as={Frame} ratio={ratio}>
					<MediaLayer media={media} />
					{getFilterLayer(filter)}
					{Contents}
				</LinkBox>
			);
		}

		// ratioあり、hrefなし
		return (
			<Frame ratio={ratio} {...blockProps}>
				{getMediaLayer(media)}
				{getFilterLayer(filter)}
				{Contents}
			</Frame>
		);
	}

	// 以下、ratio なし
	if (href) {
		blockProps.href = href;
		return (
			<LinkBox {...blockProps}>
				{getMediaLayer(media)}
				{getFilterLayer(filter)}
				{Contents}
			</LinkBox>
		);
	}

	// ratio指定なし、href指定なし
	return (
		<Lism {...blockProps}>
			{getMediaLayer(media)}
			{getFilterLayer(filter)}
			{Contents}
		</Lism>
	);
}
