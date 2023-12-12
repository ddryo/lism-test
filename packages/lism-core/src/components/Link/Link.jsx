import { Core } from '../Core';

export default function Link({
	// lismClass = {},
	// lismState = [],
	as,
	href,
	target,
	openNewTab,
	rel,
	// ariaLabel,
	hover = 'fade',
	...props
}) {
	target = target || openNewTab ? '_blank' : null;

	if (target && !rel) rel = 'noopener noreferrer';
	const linkProps = { href, rel, target };

	const Link = as || Core;
	return <Link tag='a' hover={hover} {...linkProps} {...props} />;
}
