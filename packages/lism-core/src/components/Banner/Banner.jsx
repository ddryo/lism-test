import { Frame } from '../Frame';
import { Link } from '../Link';

export default function Banner({ lismClass = {}, variant, ...props }) {
	lismClass.c = 'c--banner';
	if (variant) lismClass.c += ` c--banner--${variant}`;

	// hrefあり
	if (props.href) {
		return <Link as={Frame} lismClass={lismClass} {...props} />;
	}

	// ratio指定なし、href指定なし
	return <Frame lismClass={lismClass} {...props} />;
}
