import React from 'react';
import classnames from 'classnames';
// import Image from "next/image";
import { Box, Frame, FrameContent, LinkBox } from '../index';
// import { separateStyleProps } from '../../lib';
import { getMediaLayer, getFilterLayer } from '../helper';

// "Banner" (b--banner) にする
function Banner({
	children,
	className,
	ratio,
	media,
	medias,
	href,
	filter,
	padding,
	paddings,
	...attrs
}) {
	// let bannerContents = null;
	const blockProps = { className: classnames('b--banner', className), ...attrs };
	const paddingProps = { padding, paddings };

	// ratio の有無、href の有無でコンポーネントを分岐していく
	if (ratio) {
		// ratioがある → Frame を使う
		// blockProps.ratio = ratio;
		// const frameProps = {
		// 	ratio,
		// };

		// ratioあり、hrefあり
		if (href) {
			blockProps.href = href;
			return (
				<LinkBox href={href} {...blockProps}>
					<Frame ratio={ratio}>
						{getMediaLayer(media)}
						{getFilterLayer(filter)}
						<FrameContent className='b--banner__content' {...paddingProps}>
							{children}
						</FrameContent>
					</Frame>
				</LinkBox>
			);
		}

		// ratioあり、hrefなし
		return (
			<Frame ratio={ratio} {...blockProps}>
				{getMediaLayer(media)}
				{getFilterLayer(filter)}
				<FrameContent className='b--banner__content' {...paddingProps}>
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
				<Box className='b--banner__content'>{children}</Box>
			</LinkBox>
		);
	}

	// ratio指定なし、href指定なし
	return (
		<Box {...blockProps} {...paddingProps}>
			{getMediaLayer(media)}
			{getFilterLayer(filter)}
			<Box className='b--banner__content'>{children}</Box>
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

export default Banner;
