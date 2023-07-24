import React from 'react';
import classnames from 'classnames';
import { Lism } from '../Lism';

export default function Layer({ children, modifier = '', position, size, ...props }) {
	if (position === 'center' || position === 'center center') {
		props.left = '50%';
		props.top = '50%';
		props.translate = '-50% -50%';
	} else if (position) {
		let hasX = false;
		let hasY = false;

		if (position.indexOf('left') !== -1) {
			props.left = '0';
			hasX = true;
		} else if (position.indexOf('right') !== -1) {
			props.right = '0';
			hasX = true;
		}

		if (position.indexOf('top') !== -1) {
			props.top = '0';
			hasY = true;
		} else if (position.indexOf('bottom') !== -1) {
			props.bottom = '0';
			hasY = true;
		}

		if (position.indexOf('center') !== -1) {
			if (hasY) {
				props.left = '50%';
				props.translate = '-50% 0';
			} else if (hasX) {
				props.top = '50%';
				props.translate = '0 -50%';
			}
		}
	}

	const lismClass = modifier ? `l--layer--${modifier}` : 'l--layer';

	const blockProps = {
		lismClass,
		'data-size': size, // contain or cover
		...props,
	};

	// const Tag = tag || 'div';
	return <Lism {...blockProps}>{children}</Lism>;
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
