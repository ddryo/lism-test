import { Layouter } from '../Layouter';

export default function Box({ lismClass = {}, variant, ...props }) {
	lismClass.l = 'l--box';
	if (variant) lismClass.l += ` l--box--${variant}`;
	return <Layouter lismClass={lismClass} {...props} />;
}
