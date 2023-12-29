// import { isValidElement } from 'react';
// import { Core } from '../Core';
import getProps from './getProps';
import { getLismProps } from '../../lib';
import SVG from './SVG';

export default function Icon({
	lismClass = {},
	asProps = {},
	variant,
	isInline,

	// emoji,
	children,
	...props
}) {
	lismClass.e = 'e--icon';
	if (isInline) lismClass.e += ' e--icon--inline';
	if (variant) lismClass.e += ` e--icon--${variant}`;

	const hasChildren = !!children;

	let { as, iconProps, props: otherProps } = getProps(props, hasChildren);
	const IconComp = '_SVG_' === as ? SVG : as;

	const lismProps = getLismProps({ lismClass, ...otherProps });
	return (
		<IconComp {...lismProps} {...asProps} {...iconProps}>
			{children}
		</IconComp>
	);
}
