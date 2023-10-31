import { Lism } from '../Lism';

export default function Box({ lismClass = {}, variant, ...props }) {
	lismClass.l = 'l--box';
	if (variant) lismClass.l += ` l--box--${variant}`;
	return <Lism lismClass={lismClass} {...props} />;
}
