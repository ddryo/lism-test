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
