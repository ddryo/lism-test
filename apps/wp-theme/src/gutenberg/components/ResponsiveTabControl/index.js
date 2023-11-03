/**
 * @WordPress dependencies
 */
import { TabPanel } from '@wordpress/components';
import { BaseControl } from '@wordpress/components';
import { Icon, globe } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

/**
 * @Internal dependencies
 */

const DEFAULT_TABS = [
	{
		name: 'global',
		title: <Icon icon={globe} />,
		isDefault: true,
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

export default function ResponsiveTabControl({ tabs = DEFAULT_TABS, children }) {
	return (
		<BaseControl className='lism-responsiveTabControl'>
			<TabPanel tabs={tabs}>
				{({ name }) => {
					const selectedTab = tabs.find((tab) => tab.name === name);
					return children(selectedTab);
				}}
			</TabPanel>
		</BaseControl>
	);
}
