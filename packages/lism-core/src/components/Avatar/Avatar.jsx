import { Core } from '../Core';

// srcがあれば自身をmediaにする？この時、objectFit適用する
export default function Avatar({ lismClass = {}, lismStyle = {}, children, size, ...props }) {
	lismClass.e = 'e--avatar';
	// if (variant) lismClass.e += ` e--avatar--${variant}`;

	if (size) {
		lismStyle['--size'] = size;
	}

	return (
		<Core lismClass={lismClass} lismStyle={lismStyle} radius='99' {...props}>
			{children}
		</Core>
	);
}
