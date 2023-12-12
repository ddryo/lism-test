import { Core } from '../Core';
import { Media } from '../Media';

import { separateMediaAttrs } from '../../lib';

// srcがあれば自身をmediaにする？この時、objectFit適用する
export default function Avatar({
	lismClass = {},
	variant,
	children,
	size,
	name,
	mediaProps = {},
	...props
}) {
	lismClass.e = 'e--avatar';
	if (variant) lismClass.e += ` e--avatar--${variant}`;

	if (children) {
		return (
			<Core lismClass={lismClass} size={size} radius='99' {...props}>
				{children}
			</Core>
		);
	}

	const { mediaAttrs, otherProps } = separateMediaAttrs(props);
	return (
		<Core lismClass={lismClass} size={size} radius='99' {...otherProps}>
			<Media
				alt={name}
				width={size}
				height={size}
				decoding='async'
				objectFit='cover'
				{...mediaProps}
				{...mediaAttrs}
			/>
		</Core>
	);
}
