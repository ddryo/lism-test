/**
 * @WordPress dependencies
 */

/**
 * @Internal dependencies
 */
import { ResponsiveTabControl, SpacingControl } from '@/gutenberg/components';

export default function ResponsiveSpacingControl({ label }) {
	return (
		<div className='lism-responsiveSpacingControl'>
			<ResponsiveTabControl>
				{(tab) => {
					return <SpacingControl />;
				}}
			</ResponsiveTabControl>
		</div>
	);
}
