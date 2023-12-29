import { Frame } from '../Frame';
import { Media } from '../Media';

import { separateMediaAttrs } from '../../lib';

// srcがあれば自身をmediaにする？この時、objectFit適用する
// c--avatar?
export default function Avatar({
	lismClass = {},
	variant,
	children,
	name,
	src,
	mediaProps = {},
	...props
}) {
	lismClass.e = 'e--avatar';
	if (variant) lismClass.e += ` e--avatar--${variant}`;

	if (children) {
		return (
			<Frame lismClass={lismClass} radius='99' {...props}>
				{children}
			</Frame>
		);
	}

	const { mediaAttrs, otherProps } = separateMediaAttrs(props);
	return (
		<Frame lismClass={lismClass} radius='99' {...otherProps}>
			<Media
				src={src}
				alt={name}
				width='100%'
				height='100%'
				decoding='async'
				// objectFit='cover'
				{...mediaProps}
				{...mediaAttrs}
			/>
		</Frame>
	);
}
