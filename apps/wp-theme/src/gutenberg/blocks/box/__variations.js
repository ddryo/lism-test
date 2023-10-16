/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import icon from './icon';

const variations = [
	{
		name: 'container',
		title: __('Container', 'arkhe-blocks'),
		attributes: { layout: { type: 'default' } },
		scope: ['transform'],
		isActive: (blockAttributes) =>
			!blockAttributes.layout ||
			!blockAttributes.layout?.type ||
			blockAttributes.layout?.type === 'default',
		icon: icon.container,
	},
	{
		name: 'container-horizontal',
		title: __('Horizontal', 'arkhe-blocks'),
		attributes: { layout: { type: 'flex', orientation: 'horizontal', flexWrap: 'nowrap' } },
		scope: ['transform'],
		isActive: (blockAttributes) =>
			blockAttributes.layout?.type === 'flex' &&
			blockAttributes.layout?.orientation === 'horizontal',
		icon: icon.horizontal,
	},
	{
		name: 'container-vertical',
		title: __('Vertical', 'arkhe-blocks'),
		attributes: { layout: { type: 'flex', orientation: 'vertical' } },
		scope: ['transform'],
		isActive: (blockAttributes) =>
			blockAttributes.layout?.type === 'flex' &&
			blockAttributes.layout?.orientation === 'vertical',
		icon: icon.vertical,
	},
];

export default variations;
