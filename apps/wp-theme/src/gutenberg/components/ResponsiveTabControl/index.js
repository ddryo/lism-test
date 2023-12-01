/**
 * @WordPress dependencies
 */
import { TabPanel } from '@wordpress/components';
import { BaseControl } from '@wordpress/components';

/**
 * @Internal dependencies
 */
import { BREAKPOINTS } from '@/gutenberg/constants';

export default function ResponsiveTabControl({ tabs = BREAKPOINTS, children }) {
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
