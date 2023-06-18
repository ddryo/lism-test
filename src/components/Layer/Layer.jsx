import React from 'react';
import classnames from 'classnames';
import { filterEmptyFromObj, separateStyleProps } from '../../lib';

export default function Layer({
	children,
	className,
	modifier = '',
	position,
	// width,
	// height,
	isContain,
	z,
	top,
	bottom,
	left,
	right,
	isFlow,
	// style = {},
	...props
}) {
	const { classNames, styles, attrs } = separateStyleProps(props, { flow: isFlow });

	const blockProps = {
		className: classnames(
			modifier ? `l--layer--${modifier}` : 'l--layer',
			{ 'is--flow': isFlow },
			className,
			classNames
		),
		style: {
			...styles,
			...filterEmptyFromObj({
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

	return <div {...blockProps}>{children}</div>;
}

export function MediaLayer({ children, media, ...props }) {
	if (children) {
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
	} = media;
	let mediaContent = null;

	// next/image の Image とかは自分で渡してもらう
	const MediaTag = tag; //"img" === type ? "img" : "video";

	mediaContent = (
		<MediaTag className='l--layer--media__item' src={src} alt={alt || ''} {...media} />
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

export function FilterLayer({ style = {}, bgc, texture, ...props }) {
	const backdropFilters = [];
	FILTERS.forEach((filterName) => {
		if (props[filterName]) {
			backdropFilters.push(`${filterName}(${props[filterName]})`);
			delete props[filterName];
		}
	});

	if (bgc) {
		style.backgroundColor = bgc;
	}

	if (backdropFilters.length > 0) {
		style.backdropFilter = backdropFilters.join(' ');
	}

	return <Layer modifier='filter' style={style} {...props} />;
}