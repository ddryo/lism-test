// import React from 'react';
// import { Core } from '../Core';
import { getLismProps, getLayoutStateData } from '../../lib';

// layoutStateは<Lism> で受け持つ。
// const analyzeLayoutState = ({ alignfull, alignwide, isFlow, hasLayer, hasDivider, ...props }) => {
// 	const state = [];
// 	const style = {};

// 	return props;
// };

// getLismProps で処理すると全てに動作して過剰すぎるものはLismで処理する.
// getLismProps だけ処理したい場合は <Core /> を使う。
export default function Lism({
	lismState = [],
	lismStyle = {},
	children,
	as,
	tag,
	alignfull,
	alignwide,
	isFlow,
	isContainer,
	isConstrained,
	hasGutter,
	hasLayer,
	hasDivider,
	...props
}) {
	if (isContainer) {
		const { className, style } = getLayoutStateData('is--container', isContainer);
		lismState.push(className);
		Object.assign(lismStyle, style);
	}

	if (isConstrained) {
		const { className, style } = getLayoutStateData('is--constrained', isConstrained);
		lismState.push(className);
		Object.assign(lismStyle, style);
	}

	if (isFlow) {
		// const { className, style } = getFlowData(isFlow);
		const { className, style } = getLayoutStateData('is--flow', isFlow);
		lismState.push(className);
		Object.assign(lismStyle, style);
	}

	hasGutter && lismState.push('has--gutter');
	hasLayer && lismState.push('has--layer');
	alignfull && lismState.push('alignfull');
	alignwide && lismState.push('alignwide');

	if (hasDivider === true) {
		lismState.push('has--divider:B');
	} else if (typeof hasDivider === 'string') {
		lismState.push(`has--divider:${hasDivider}`);
	}

	// console.log('lismState', lismState);
	props.lismState = [...new Set(lismState)]; // strictモードで2重レンダリングされる時の重複を削除;
	props.lismStyle = lismStyle;

	const { className, style, attrs } = getLismProps(props);

	const JSX = as || tag || 'div';
	return (
		<JSX className={className} style={style} {...attrs}>
			{children}
		</JSX>
	);
}
