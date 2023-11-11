/**
 * @Internal dependencies
 */
import { GapControl, ResponsiveTabControl } from '@/gutenberg/components';

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
