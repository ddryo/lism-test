/**
 * @WordPress dependencies
 */
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	justifyLeft,
	justifyCenter,
	justifyRight,
	justifySpaceBetween,
	justifyStretch,
} from '@wordpress/icons';

const OPTIONS = [
	{
		label: __('flex-start', 'lism-blocks'),
		value: 'flex-start',
		icon: justifyLeft,
	},
	{
		label: __('center', 'lism-blocks'),
		value: 'center',
		icon: justifyCenter,
	},
	{
		label: __('flex-end', 'lism-blocks'),
		value: 'flex-end',
		icon: justifyRight,
	},
	{
		label: __('space-between', 'lism-blocks'),
		value: 'space-between',
		icon: justifySpaceBetween,
	},
	{
		label: __('stretch', 'lism-blocks'),
		value: 'stretch',
		icon: justifyStretch,
	},
];

export default function JustifyContentControl({ value, controls, onChange }) {
	const options =
		controls && !!controls.length
			? OPTIONS.filter(({ value }) => controls.includes(value))
			: OPTIONS;
	return (
		<div className='lism-justifyContentControl'>
			<ToggleGroupControl
				__nextHasNoMarginBottom
				label={__('Justify content', 'lism-blocks')}
				onChange={onChange}
				value={value}
			>
				{options.map(({ label, value, icon }) => (
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
