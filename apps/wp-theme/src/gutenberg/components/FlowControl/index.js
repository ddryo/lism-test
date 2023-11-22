/**
 * @WordPress dependencies
 */
import {
	BaseControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const OPTIONS = [
	{
		label: __('S', 'lism-blocks'),
		value: 's',
	},
	{
		label: __('L', 'lism-blocks'),
		value: 'l',
	},
];

const DEFAULT_UNITS = ['px', 'em', 'rem'];

export default function FlowControl({ value, units: _units = DEFAULT_UNITS, onChange }) {
	const isCustomValue = value !== undefined && !OPTIONS.some((option) => option.value === value);

	const units = useCustomUnits({ availableUnits: _units });

	return (
		<BaseControl className='lism-flowControl'>
			<ToggleControl
				label={__('Use flow layout', 'lism-blocks')}
				checked={value !== undefined}
				onChange={(value) => {
					onChange(value ? 's' : undefined);
				}}
			/>
			{value !== undefined && (
				<ToggleGroupControl
					isBlock
					label={__('Flow gap', 'lism-blocks')}
					onChange={(value) => {
						onChange(value === 'custom' ? '' : value);
					}}
					value={isCustomValue ? 'custom' : value}
				>
					{OPTIONS.map(({ label, value }) => (
						<ToggleGroupControlOption key={value} label={label} value={value} />
					))}
					<ToggleGroupControlOption label={__('Custom', 'lism-blocks')} value='custom' />
				</ToggleGroupControl>
			)}
			{isCustomValue && (
				<UnitControl
					size={'__unstable-large'}
					label={__('Custom', 'lism-blocks')}
					labelPosition='top'
					hideLabelFromVision
					value={value}
					onChange={(newValue) => {
						onChange(newValue);
					}}
					units={units}
					min={0}
				/>
			)}
		</BaseControl>
	);
}
