/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	BaseControl,
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	RangeControl,
	ToggleControl,
	__experimentalVStack as VStack,
} from '@wordpress/components';

/**
 * @Internal dependencies
 */
import { BREAKPOINTS } from '@/gutenberg/constants';

const DEFAULT_LABEL = __('Columns', 'lism-blocks');

export default function ResponsiveColumnsControl({
	label = DEFAULT_LABEL,
	value: columnValue = '',
	defaultValue = '2',
	onChange,
}) {
	const isSingleValue = typeof columnValue === 'string';
	const [isSynced, setIsSynced] = useState(isSingleValue);

	const parsedValue = isSingleValue
		? [columnValue, columnValue, columnValue, columnValue]
		: [columnValue?.[0], columnValue?.[1], columnValue?.[2], columnValue?.[3]];

	function onChangeIsSynced() {
		setIsSynced(!isSynced);
		if (!isSingleValue) {
			onChange(parsedValue[0]);
		}
	}

	function onChangeAll(value) {
		onChange(value.toString());
	}

	function onChangePercial(value, index) {
		const newValue = [...parsedValue];
		newValue[index] = value.toString();
		onChange(newValue);
	}

	function onReset() {
		onChange(defaultValue);
	}

	return (
		<BaseControl className='lism-responsiveColumnsControl' label={label}>
			<VStack>
				<ToggleControl
					__nextHasNoMarginBottom
					label={__('Synced', 'lism-blocks')}
					checked={isSynced}
					onChange={onChangeIsSynced}
				/>
				{isSynced ? (
					<div className='__row'>
						<RangeControl
							__nextHasNoMarginBottom
							label={__('all', 'lism-blocks')}
							hideLabelFromVision
							value={parseInt(parsedValue[0]) || 1}
							min={0}
							max={10}
							onChange={onChangeAll}
						/>
					</div>
				) : (
					BREAKPOINTS.map(({ name, title }, index) => (
						<Flex className='__row' key={name}>
							<FlexItem className='__title'>{title}</FlexItem>
							<FlexBlock>
								<RangeControl
									__nextHasNoMarginBottom
									label={__('all', 'lism-blocks')}
									hideLabelFromVision
									value={parseInt(parsedValue[index]) || 1}
									min={0}
									max={10}
									onChange={(value) => onChangePercial(value, index)}
								/>
							</FlexBlock>
						</Flex>
					))
				)}
				<Button className='__reset' variant='secondary' size='small' onClick={onReset}>
					{__('Reset', 'lism-blocks')}
				</Button>
			</VStack>
		</BaseControl>
	);
}
