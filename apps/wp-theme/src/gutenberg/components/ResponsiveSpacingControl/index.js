/**
 * @WordPress dependencies
 */
import { BaseControl } from '@wordpress/components';

/**
 * @Internal dependencies
 */
import { ResponsiveTabControl, SpacingControl } from '@/gutenberg/components';

export default function ResponsiveSpacingControl({ label }) {
	return (
		<BaseControl className='lism-responsiveSpacingControl' label={label}>
			<ResponsiveTabControl>
				{(tab) => {
					return <SpacingControl />;
				}}
			</ResponsiveTabControl>
		</BaseControl>
	);
}
