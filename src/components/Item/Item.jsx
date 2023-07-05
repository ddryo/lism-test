import React from 'react';
import { Lism } from '../Lism';
import { isPresetValue } from '../../lib';
// import classnames from 'classnames';

// itemsのpropsはここでのみ受け付ける → クラスの順番気持ち悪い？
export function Item({ children, component, style, ...props }) {
	const { classNames, styles, attrs } = getItemProps(props);

	const blockProps = {
		utilityClass: classNames,
		style: {
			...style,
			...styles,
		},
		...attrs,
	};
	const Comp = component || Lism;
	return (
		<Comp isItem {...blockProps}>
			{children}
		</Comp>
	);
}

function getItemProps(props) {
	// fx,fxs,?
	const { as, js, flex, fxg, fxsh, fxb, ga, gc, gr, ...others } = props;
	const classNames = [];
	let styles = {};

	// fxb, fxg, fxsh は 単体指定可能だが、クエリ指定不可
	if (undefined !== fxg) styles['--fxg'] = fxg;
	if (undefined !== fxsh) styles['--fxsh'] = fxsh;
	if (undefined !== fxb) styles['--fxb'] = fxb;

	// fxg, fxsh は 0,1 のみユーティリティあり

	// flex='1' とか flex='1 1 0%' とかで指定。クエリ指定可能。
	// flex="20%" のように単位付き文字列→flex-basis単体指定とほぼ同じ
	if (undefined !== flex) {
		if (typeof flex === 'string') {
			styles['--fx'] = flex;
		} else if (typeof flex === 'object') {
			if (flex._) styles['--fx'] = flex._;
			if (flex.sm) styles['--fx--sm'] = flex.sm;
			if (flex.xs) styles['--fx--xs'] = flex.xs;
		}
	}

	// align-self, justify-self
	if (undefined !== as) {
		// styles.alignSelf = as;
		// classNames.push(`-as:`);
		styles[`--as`] = as;
	}
	if (undefined !== js) {
		// styles.justifySelf = js;
		// classNames.push(`-js:`);
		styles[`--js`] = js;
	}

	// ga (grid-area) はクエリ指定不可。utilityを持つ。
	if (undefined !== ga) {
		// styles = { ...styles, ...getGridAreaStyles(area, areas) };
		if (isPresetValue('ga', ga)) {
			classNames.push(`-ga:${ga}`);
		} else {
			styles['--ga'] = ga;
		}
	}

	// grid-row, grid-column は String | Obj でクエリ指定可能
	if (undefined !== gc) {
		if (typeof gc === 'string') {
			styles['--gc'] = gc;
		} else if (typeof gc === 'object') {
			if (gc._) styles['--gc'] = gc._;
			if (gc.sm) styles['--gc--sm'] = gc.sm;
			if (gc.xs) styles['--gc--xs'] = gc.xs;
		}
	}

	if (undefined !== gr) {
		if (typeof gr === 'string') {
			styles['--gr'] = gr;
		} else if (typeof gr === 'object') {
			if (gr._) styles['--gr'] = gr._;
			if (gr.sm) styles['--gr--sm'] = gr.sm;
			if (gr.xs) styles['--gr--xs'] = gr.xs;
		}
	}

	return { styles, classNames, attrs: others };
}
