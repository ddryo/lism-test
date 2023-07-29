import React from 'react';
import { Frame, FrameContent } from '../Frame';
import { LinkBox } from '../LinkBox';
import { Box } from '../Box';
import { getMediaLayer, getFilterLayer } from '../helper';
// import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

// "Banner" (b--banner) にする
export default function Banner({
	children,
	ratio,
	media,
	// medias,
	href,
	filter,
	p,
	padding,
	flowGap,
	// contentProps = {},
	...attrs
}) {
	// let bannerContents = null;
	const blockProps = { blockClass: 'b--banner', ...attrs };
	const paddingProps = { p, padding };

	// ratio の有無、href の有無でコンポーネントを分岐していく
	if (ratio) {
		// ratioあり、hrefあり
		if (href) {
			blockProps.href = href;
			return (
				<LinkBox href={href} {...blockProps} component={Frame} ratio={ratio}>
					{getMediaLayer(media)}
					{getFilterLayer(filter)}
					<FrameContent
						blockClass='b--banner__content'
						isFlow
						flowGap={flowGap || 40}
						{...paddingProps}
						// {...contentProps}
					>
						{children}
					</FrameContent>
				</LinkBox>
			);
		}

		// ratioあり、hrefなし
		return (
			<Frame ratio={ratio} {...blockProps}>
				{getMediaLayer(media)}
				{getFilterLayer(filter)}
				<FrameContent
					blockClass='b--banner__content'
					isFlow
					flowGap={flowGap || 40}
					{...paddingProps}
					// {...contentProps}
				>
					{children}
				</FrameContent>
			</Frame>
		);
	}

	// 以下、ratio なし
	if (href) {
		blockProps.href = href;
		return (
			<LinkBox {...blockProps} {...paddingProps}>
				{getMediaLayer(media)}
				{getFilterLayer(filter)}
				<Box blockClass='b--banner__content' isFlow flowGap={flowGap || 40}>
					{children}
				</Box>
			</LinkBox>
		);
	}

	// ratio指定なし、href指定なし
	return (
		<Box {...blockProps} {...paddingProps}>
			{getMediaLayer(media)}
			{getFilterLayer(filter)}
			<Box blockClass='b--banner__content' isFlow flowGap={flowGap || 40}>
				{children}
			</Box>
		</Box>
	);
}

// Banner.Content = ({ children, className, ...props }) => {
// 	return (
// 		<Layer className={classnames("b--banner__content", className)} position="cover" {...props}>
// 			{children}
// 		</Layer>
// 	);
// };

// export default Banner;
