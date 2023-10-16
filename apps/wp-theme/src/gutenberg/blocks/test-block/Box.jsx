import { Core } from '@lism/core/components/Core';

// function Core({ children, tag, ...props }) {
// 	const { className, style, attrs } = {};

// 	const Core = tag || 'div';
// 	return (
// 		<Core className={className} style={style} {...attrs}>
// 			{children}
// 		</Core>
// 	);
// }

export default function Box({ lismClass = {}, variant, ...props }) {
	lismClass.l = 'l--box';
	if (variant) lismClass.l += ` l--box--${variant}`;
	return <Core lismClass={lismClass} {...props} />;
}
