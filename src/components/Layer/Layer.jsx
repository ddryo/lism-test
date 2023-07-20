import React from 'react';
import classnames from 'classnames';
import { filterEmptyObj, getCommonProps } from '../../lib';

export default function Layer({
	children,
	tag,
	modifier = '',
	position,
	isContain,
	z,
	top,
	bottom,
	left,
	right,
	...props
}) {
	const lismClass = modifier ? `l--layer--${modifier}` : 'l--layer';
	const { className, style, attrs } = getCommonProps(props, { lismClass });

	const blockProps = {
		className,
		style: {
			...style,
			...filterEmptyObj({
				zIndex: undefined !== z ? String(z) : null,
				top: top || null,
				bottom: bottom || null,
				left: left || null,
				right: right || null,
			}),
		},
		'data-contain': isContain ? '1' : null,
		'data-position': position,
		...attrs,
	};

	const Tag = tag || 'div';
	return <Tag {...blockProps}>{children}</Tag>;
}

export function MediaLayer({ children, media, ...props }) {
	if (children) {
		// クラスを付与
		if (React.isValidElement(children)) {
			const mediaProps = children?.props || {};
			const { className, ...mediaAttrs } = mediaProps;

			children = React.cloneElement(children, {
				className: classnames('l--layer__media', className),
				...mediaAttrs,
			});
		}
		return (
			<Layer modifier='media' {...props}>
				{children}
			</Layer>
		);
	}
	if (undefined === media) return null;

	const {
		tag = 'img',
		// type = 'img',
		src,
		alt,
		className,
	} = media;
	let mediaContent = null;

	// next/image の Image とかは自分で渡してもらう
	const MediaTag = tag; //"img" === type ? "img" : "video";

	mediaContent = (
		<MediaTag
			className={classnames('l--layer__media', className)}
			src={src}
			alt={alt || ''}
			{...media}
		/>
	);

	return (
		<Layer modifier='media' {...props}>
			{mediaContent}
		</Layer>
	);
}

// bakdorp-filterを適用するレイヤー
// filter種類: https://developer.mozilla.org/en-US/docs/Web/CSS/filter#functions

const FILTERS = [
	'blur',
	'contrast',
	'brightness',
	'drop-shadow',
	'grayscale',
	'hue-rotate',
	'invert',
	'opacity',
	'saturate',
	'sepia',
];

export function FilterLayer({
	style = {},
	//texture,
	...props
}) {
	const backdropFilters = [];
	FILTERS.forEach((filterName) => {
		if (props[filterName]) {
			backdropFilters.push(`${filterName}(${props[filterName]})`);
			delete props[filterName];
		}
	});

	if (backdropFilters.length > 0) {
		style.backdropFilter = backdropFilters.join(' ');
	}

	return <Layer modifier='filter' style={style} {...props} />;
}
