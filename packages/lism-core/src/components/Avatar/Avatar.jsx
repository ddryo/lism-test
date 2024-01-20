import { Frame } from '../Frame';
import { Media } from '../Media';

import { separateMediaAttrs } from '../../lib';

// srcがあれば自身をmediaにする？この時、objectFit適用する
// c--avatar?
export default function Avatar({
	_lismClass = [],
	variant,
	children,
	name,
	src,
	mediaProps = {},
	...props
}) {
	_lismClass.push('c--avatar');
	if (variant) _lismClass.push(`c--avatar--${variant}`);

	if (children) {
		return (
			<Frame _lismClass={_lismClass} aspect='1/1' bdrs='full' {...props}>
				{children}
			</Frame>
		);
	}

	const { mediaAttrs, otherProps } = separateMediaAttrs(props);
	return (
		<Frame _lismClass={_lismClass} aspect='1/1' bdrs='full' {...otherProps}>
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
