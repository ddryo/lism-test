/**
 * @WordPress dependencies
 */
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { arrowRight, arrowLeft, arrowDown, arrowUp } from '@wordpress/icons';

const OPTIONS = [
	{
		label: __('row', 'lism-blocks'),
		value: 'row',
		icon: arrowRight,
	},
	{
		label: __('row-reverse', 'lism-blocks'),
		value: 'row-reverse',
		icon: arrowLeft,
	},
	{
		label: __('column', 'lism-blocks'),
		value: 'column',
		icon: arrowDown,
	},
	{
		label: __('column-reverse', 'lism-blocks'),
		value: 'column-reverse',
		icon: arrowUp,
	},
];

export default function FlexDirectionControl({ value = 'row', onChange }) {
	return (
		<div className='lism-flexWrapControl'>
			<ToggleGroupControl
				__nextHasNoMarginBottom
				label={__('Flex direction', 'lism-blocks')}
				onChange={(value) => onChange(value)}
				value={value}
			>
				{OPTIONS.map(({ label, value, icon }) => (
					<ToggleGroupControlOptionIcon
						key={value}
						value={value}
						icon={icon}
						label={label}
					/>
				))}
			</ToggleGroupControl>
		</div>
	);
}
