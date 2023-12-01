/**
 * @WordPress dependencies
 */
import {
	BaseControl,
	Flex,
	FlexBlock,
	FlexItem,
	TextControl,
	SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const OPTIONS = [
	{
		label: __('Auto', 'lism-blocks'),
		value: 'auto',
	},
	{
		label: __('1 / 1', 'lism-blocks'),
		value: '1/1',
	},
	{
		label: __('2 / 1', 'lism-blocks'),
		value: '2/1',
	},
	{
		label: __('1 / 2', 'lism-blocks'),
		value: '1/2',
	},
	{
		label: __('3 / 1', 'lism-blocks'),
		value: '3/1',
	},
	{
		label: __('1 / 3', 'lism-blocks'),
		value: '1/3',
	},
	{
		label: __('16 / 9', 'lism-blocks'),
		value: '16/9',
	},
	{
		label: __('9 / 16', 'lism-blocks'),
		value: '9/16',
	},
];

const DEFAULT_LABEL = __('Aspect', 'lism-blocks');

export default function AspectControl({ label = DEFAULT_LABEL, value: aspectValue, onChange }) {
	const isCustomValue = !OPTIONS.some((option) => option.value === aspectValue);
	const aspectValues = (aspectValue || '').split('/').map((value) => {
		return isNaN(parseFloat(value)) ? 1 : parseFloat(value);
	});
	const selectedValue =
		aspectValue === undefined ? 'auto' : isCustomValue ? 'custom' : aspectValue;

	const options = isCustomValue
		? [
				...OPTIONS,
				{
					label: __('Custom', 'lism-blocks'),
					value: 'custom',
				},
		  ]
		: OPTIONS;

	function onChangeAspect(index, newValue) {
		const newAspectValues = [...aspectValues];
		const parsedValue = isNaN(parseFloat(newValue)) ? 1 : parseFloat(newValue);
		newAspectValues[index] = parsedValue;
		onChange(newAspectValues.join('/'));
	}

	return (
		<BaseControl className='aspectControl' label={label}>
			<SelectControl
				label={__('Preset', 'lism-blocks')}
				options={options}
				value={selectedValue}
				onChange={(value) => {
					if (value === 'auto') {
						onChange(undefined);
					} else if (value === 'custom') {
						onChange('1/1');
					} else {
						onChange(value);
					}
				}}
			/>
			{aspectValue && (
				<Flex>
					<FlexBlock>
						<TextControl
							min={0}
							max={100}
							step={0.1}
							type='number'
							value={aspectValues[0]}
							onChange={(value) => onChangeAspect(0, value)}
						/>
					</FlexBlock>
					<FlexItem>:</FlexItem>
					<FlexBlock>
						<TextControl
							min={0}
							max={100}
							step={0.1}
							type='number'
							value={aspectValues[1]}
							onChange={(value) => onChangeAspect(1, value)}
						/>
					</FlexBlock>
				</Flex>
			)}
		</BaseControl>
	);
}
