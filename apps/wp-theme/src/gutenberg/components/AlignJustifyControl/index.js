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

const CONTROLS = [
	{
		label: __('Align content', 'lism-blocks'),
		key: 'alignContent',
	},
	{
		label: __('Justify content', 'lism-blocks'),
		key: 'justifyContent',
	},
	{
		label: __('Align items', 'lism-blocks'),
		key: 'alignItems',
	},
	{
		label: __('Justify items', 'lism-blocks'),
		key: 'justifyItems',
	},
];

export default function AlignJustifyControl({ values = {}, onChange }) {
	const onChangeValue = (key, value) => {
		const newValues = { ...values, [key]: value };
		onChange(newValues);
	};

	console.log( values );


	return (
		<div className='lism-alignJustifyControl'>
			{CONTROLS.map(({ label, key }) => (
				<ToggleGroupControl
					key={key}
					__nextHasNoMarginBottom
					label={label}
					onChange={(value) => onChangeValue(key, value)}
					value={values?.[key]}
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
			))}
		</div>
	);
}
