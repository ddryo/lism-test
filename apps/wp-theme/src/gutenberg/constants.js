/**
 * @External dependencies
 */
import { PROPS, CONTEXT_PROPS, HOVER_PROPS, PROVIDABLE_PROPS } from '@loos/lism-core/src/config';

const collator = new Intl.Collator('en');

// 全てのpropキー一覧
export const ALL_PROP_KEYS = [...Object.keys(PROPS), 'hover', 'provide'].sort(collator.compare);

// Prop TypeとしてObjectが使えるprop一覧
// objProcessor または map データを持つもの。ただし、`p`と `m` は除く
export const OBJECT_PROPS = [
	...Object.keys(PROPS).reduce((acc, key) => {
		if (key === 'p' || key === 'm') {
			return acc;
		}
		if (!PROPS[key].objProcessor && !PROPS[key].map) {
			return acc;
		}
		const prop = {
			key,
		};
		if (CONTEXT_PROPS[key]) {
			prop.contexts = Object.keys(CONTEXT_PROPS[key]);
		}

		acc.push(prop);
		return acc;
	}, []),
	{ key: 'provide', contexts: Object.keys(PROVIDABLE_PROPS) },
	{ key: 'hover', contexts: Object.keys(HOVER_PROPS) },
];

/**
 * @WordPress dependencies
 */
import { Icon, globe } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

export const BREAKPOINTS = [
	{
		name: 'global',
		title: <Icon icon={globe} aria-label={__('global', 'lism-blocks')} />,
		index: 0,
	},
	{
		name: 'sm',
		title: __('sm', 'lism-blocks'),
		index: 1,
	},
	{
		name: 'md',
		title: __('md', 'lism-blocks'),
		index: 2,
	},
	{
		name: 'lg',
		title: __('lg', 'lism-blocks'),
		index: 3,
	},
];
