import React from 'react';
import classnames from 'classnames';
import { Layer } from '../index';
import { separateStyleProps } from '../../lib';
// import { getMediaLayer, getFilterLayer } from '../helper';

const RATIO_PRESETS = ['16:9', '4:3', '3:2', '2:1', '1:1', 'golden', 'silver', 'bronze', 'ogp'];

// "Frame" (b--banner) にする
export default function Frame({
	children,
	tag,
	className,
	ratio,
	isPortrait,
	// media,
	// filter,
	// padding,
	// paddings,
	forwardedRef,
	...props
}) {
	const { classNames, styles, attrs } = separateStyleProps(props);

	const blockProps = {
		className: classnames('l--frame', className, classNames),
		style: styles,
		'data-direction': isPortrait ? 'portrait' : null,
		ref: forwardedRef,
		...attrs,
	};

	if (RATIO_PRESETS.includes(ratio)) {
		blockProps['data-ratio'] = ratio;
	} else {
		// ratioを : で分割してd,nに代入
		const [d, n] = ratio.split(':');

		blockProps.style = {
			...blockProps.style,
			...{
				'--ls--d': d || null,
				'--ls--n': n || null,
			},
		};
	}

	// const filterLayer = undefined !== filter && <FilterLayer {...filter} />;

	// padding は Content側にわたす
	// const ContentProps = {
	// 	className: 'l--frame__content',
	// 	position: 'cover',
	// 	z: 1,
	// 	padding,
	// 	paddings,
	// };

	const Tag = tag || 'div';
	return (
		<Tag {...blockProps}>
			<div className='l--frame__placeholder' aria-hidden='true'></div>
			{children}
			{/* {getMediaLayer(media)}
			{getFilterLayer(filter)}
			<Layer {...ContentProps}>{children}</Layer> */}
		</Tag>
	);
}

export const FrameContent = ({ children, className, ...props }) => {
	const ContentProps = {
		className: classnames('l--frame__content', className),
		position: 'cover',
		...props,
	};

	return <Layer {...ContentProps}>{children}</Layer>;
};