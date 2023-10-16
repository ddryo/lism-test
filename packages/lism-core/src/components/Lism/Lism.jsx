// import React from 'react';
import { getLismProps } from '../../lib';
// import classnames from 'classnames';

// as : Component | html-tag
// tag : html-tag
export default function Lism({ children, as, tag, ...props }) {
	const { className, style, attrs } = getLismProps(props);

	let hasError = false;
	// if (typeof as === 'function' && !as.prototype?.isReactComponent) {
	// 	console.error(
	// 		'Lism: Invalid component passed. The component passed as "as" could not be recognized as a React component. '
	// 	);
	// 	hasError = true;
	// }

	if (tag && typeof tag !== 'string') {
		console.error(
			'Lism: Invalid tag passed. Only strings can be specified for the "tag" prop.'
		);
		hasError = true;
	}

	if (hasError) {
		return (
			<div data-has-lism-error>
				<p data-has-lism-error>Error@Lism: Invalid component passed.</p>
				{children}
			</div>
		);
	}
	const Lism = as || tag || 'div';

	return (
		<Lism className={className} style={style} {...attrs}>
			{children}
		</Lism>
	);
}
