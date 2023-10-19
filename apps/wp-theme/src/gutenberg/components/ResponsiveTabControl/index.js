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
	},
	{
		name: 'sm',
		title: __('sm', 'lism-blocks'),
	},
	{
		name: 'md',
		title: __('md', 'lism-blocks'),
	},
	{
		name: 'lg',
		title: __('lg', 'lism-blocks'),
	},
];

export default function ResponsiveTabControl({ label, tabs = DEFAULT_TABS, children }) {
	return (
		<BaseControl className='lism-responsiveTabControl' label={label}>
			<TabPanel tabs={tabs}>
				{({ name }) => {
					const selectedTab = tabs.find((tab) => tab.name === name);
					return children(selectedTab);
				}}
			</TabPanel>
		</BaseControl>
	);
}
