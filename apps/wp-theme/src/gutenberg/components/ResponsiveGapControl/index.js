/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * @Internal dependencies
 */
import { GapControl, ResponsiveTabControl } from '@/gutenberg/components';

const DEFAULT_LABEL = __('Gap', 'lism-blocks');

export default function ResponsiveGapControl() {
	return (
		<div className='lism-responsiveGapControl'>
			<ResponsiveTabControl>
				{(tab) => {
					return <GapControl />;
				}}
			</ResponsiveTabControl>
		</div>
	);
}
