import React from 'react';
import { Frame } from '../Frame';
import { LinkBox } from '../LinkBox';
import { Box } from '../Box';
import { getMediaLayer, getFilterLayer } from '../helper';

// import classnames from 'classnames';

// "Banner" (b--banner) にする
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
		<Box blockClass='b--banner__content' isFlow flowGap={flowGap || 40}>
			{children}
		</Box>
	);

	// ratio の有無、href の有無でコンポーネントを分岐していく
	if (ratio) {
		// ratioあり、hrefあり
		if (href) {
			blockProps.href = href;
			return (
				<LinkBox href={href} {...blockProps} as={Frame} ratio={ratio}>
					{getMediaLayer(media)}
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
		<Box {...blockProps}>
			{getMediaLayer(media)}
			{getFilterLayer(filter)}
			{Contents}
		</Box>
	);
}
