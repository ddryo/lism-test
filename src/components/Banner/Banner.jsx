import React from 'react';
import classnames from 'classnames';
import { Frame, FrameContent } from '../Frame';
import { LinkBox } from '../LinkBox';
import { Box } from '../Box';
// import { getCommonProps } from '../../lib';
import { getMediaLayer, getFilterLayer } from '../helper';

// "Banner" (b--banner) にする
export default function Banner({
	children,
	className,
	ratio,
	media,
	// medias,
	href,
	filter,
	padding,
	paddings,
	contentProps = {},
	...attrs
}) {
	// let bannerContents = null;
	const blockProps = { className: classnames('b--banner', className), ...attrs };
	const paddingProps = { padding, paddings };

	// ratio の有無、href の有無でコンポーネントを分岐していく
	if (ratio) {
		// ratioあり、hrefあり
		if (href) {
			blockProps.href = href;
			return (
				<LinkBox href={href} {...blockProps} component={Frame} ratio={ratio}>
					{/* <Frame ratio={ratio}> */}
					{getMediaLayer(media)}
					{getFilterLayer(filter)}
					<FrameContent
						className='b--banner__content'
						{...paddingProps}
						{...contentProps}
					>
						{children}
					</FrameContent>
					{/* </Frame> */}
				</LinkBox>
			);
		}

		// ratioあり、hrefなし
		return (
			<Frame ratio={ratio} {...blockProps}>
				{getMediaLayer(media)}
				{getFilterLayer(filter)}
				<FrameContent className='b--banner__content' {...paddingProps} {...contentProps}>
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

// export default Banner;
