import { Frame } from '../Frame';
import { Media } from '../Media';
import getProps from './getProps';

// srcがあれば自身をmediaにする？この時、objectFit適用する
// c--avatar?
export default function Avatar({ children, name, src, ...props }) {
	// _lismClass.push('c--avatar');
	// if (variant) _lismClass.push(`c--avatar--${variant}`);

	const hasChildren = !!children;
	const { avatarProps, mediaProps } = getProps(props);

	if (hasChildren) {
		return <Frame {...avatarProps}>{children}</Frame>;
	}

	return (
		<Frame {...avatarProps}>
			<Media
				src={src}
				alt={name}
				width='100%'
				height='100%'
				decoding='async'
				// objectFit='cover'
				{...mediaProps}
			/>
		</Frame>
	);
}
