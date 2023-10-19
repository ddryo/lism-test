/**
 * @WordPress dependencies
 */

/**
 * @Internal dependencies
 */
import { GapControl, ResponsiveTabControl } from '@/gutenberg/components';

export default function ResponsiveGapControl({ label }) {
	return (
		<div className='lism-responsiveGapControl'>
			<ResponsiveTabControl label={label}>
				{(tab) => {
					return <GapControl />;
				}}
			</ResponsiveTabControl>
		</div>
	);
}
