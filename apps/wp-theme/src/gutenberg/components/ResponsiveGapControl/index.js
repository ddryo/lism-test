/**
 * @WordPress dependencies
 */
import { BaseControl } from '@wordpress/components';

/**
 * @Internal dependencies
 */
import { GapControl, ResponsiveTabControl } from '@/gutenberg/components';

export default function ResponsiveGapControl() {
	return (
		<BaseControl className='lism-responsiveGapControl'>
			<ResponsiveTabControl>
				{(tab) => {
					return <GapControl />;
				}}
			</ResponsiveTabControl>
		</BaseControl>
	);
}
