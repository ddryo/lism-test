// import { isValidElement } from 'react';
// import { Core } from '../Core';
import { getIconProps } from './helper';
import { getLismProps } from '../../lib';
import SVG from './SVG';

export default function Icon({
	lismClass = {},
	style = {},
	scale,
	isInline,
	emoji,
	children,
	...props
}) {
	lismClass.e = 'e--icon';
	if (isInline) lismClass.e += ' e--icon--inline';
	// if (variant) lismClass.e += ` e--icon--${variant}`;

	if (scale) style['--scale'] = scale;

	const hasChildren = !!children;

	let { Icon, asProps, props: otherProps } = getIconProps(props, hasChildren);
	if ('_SVG_' === Icon) Icon = SVG;

	const lismProps = getLismProps({ lismClass, style, ...otherProps });
	return (
		<Icon {...asProps} {...lismProps}>
			{children || emoji}
		</Icon>
	);
}
