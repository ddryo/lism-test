/**
 * @WordPress dependencies
 */
import {
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	TextControl,
	SelectControl,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { trash } from '@wordpress/icons';

const OPTIONS = [
	{
		label: __('1', 'lism-blocks'),
		value: '1',
	},
	{
		label: __('1:1', 'lism-blocks'),
		value: '1:1',
	},
	{
		label: __('1:2', 'lism-blocks'),
		value: '1:2',
	},
	{
		label: __('2:1', 'lism-blocks'),
		value: '2:1',
	},
	{
		label: __('1:3', 'lism-blocks'),
		value: '1:3',
	},
	{
		label: __('3:1', 'lism-blocks'),
		value: '3:1',
	},
	{
		label: __('Golden Ratio (1:1.618)', 'lism-blocks'),
		value: '1:1.618',
	},
	{
		label: __('Golden Ratio (1.618:1)', 'lism-blocks'),
		value: '1.618:1',
	},
];

export default function RatioControl({ value: ratioValue = '1:1', onChange }) {
	const isCustomValue = !OPTIONS.some((option) => option.value === ratioValue);
	const ratioValues = ratioValue.split(':');

	const options = isCustomValue
		? [
				...OPTIONS,
				{
					label: __('Custom', 'lism-blocks'),
					value: 'custom',
				},
		  ]
		: OPTIONS;

	function onAddRatio() {
		onChange(`${ratioValue}:1`);
	}

	function onDeleteRatio(index) {
		const newRatioValues = ratioValues.filter((value, i) => i !== index);
		onChange(newRatioValues.join(':'));
	}

	function onChangeRatio(index, newValue) {
		const parsedValue = isNaN(parseFloat(newValue)) ? 1 : parseFloat(newValue);
		const newRatioValues = ratioValues.map((value, i) => (i === index ? parsedValue : value));
		onChange(newRatioValues.join(':'));
	}

	return (
		<div className='lism-ratioControl'>
			<SelectControl
				__nextHasNoMarginBottom
				label={__('Preset', 'lism-blocks')}
				options={options}
				value={isCustomValue ? 'custom' : ratioValue}
				onChange={(value) => {
					onChange(value === 'custom' ? '1' : value);
				}}
			/>
			<>
				<code className='__preview'>{ratioValue}</code>
				<VStack spacing='3'>
					{ratioValues.map((ratioValue, index) => {
						const parsedRatioValue = isNaN(parseFloat(ratioValue))
							? 1
							: parseFloat(ratioValue);
						return (
							<Flex className='__row' key={index}>
								<FlexBlock>
									<TextControl
										hideLabelFromVision
										__nextHasNoMarginBottom
										label={__('Ratio value', 'lism-blocks')}
										min={0}
										max={10}
										step={0.1}
										type='number'
										value={parsedRatioValue}
										onChange={(value) => onChangeRatio(index, value)}
									/>
								</FlexBlock>
								<FlexItem>
									<Button
										className='__delete'
										icon={trash}
										variant='secondary'
										label={__('Delete', 'lism-blocks')}
										onClick={() => onDeleteRatio(index)}
										disabled={ratioValues.length === 1}
									/>
								</FlexItem>
							</Flex>
						);
					})}
					<Button
						className='__add'
						variant='primary'
						size='small'
						onClick={onAddRatio}
						disabled={ratioValues.length > 5}
					>
						{__('Add', 'lism-blocks')}
					</Button>
				</VStack>
			</>
		</div>
	);
}
