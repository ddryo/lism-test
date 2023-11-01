import { Layout } from '../Layout';

export default function Box({ lismClass = {}, variant, ...props }) {
	lismClass.l = 'l--box';
	if (variant) lismClass.l += ` l--box--${variant}`;
	return <Layout lismClass={lismClass} {...props} />;
}
