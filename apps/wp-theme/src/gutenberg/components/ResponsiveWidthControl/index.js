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
	ToggleControl,
	__experimentalVStack as VStack,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

/**
 * @Internal dependencies
 */
import { BREAKPOINTS } from '@/gutenberg/constants';
import SingleValueControl from './SingleValueControl';

const DEFAULT_LABEL = __('Width', 'lism-blocks');
const DEFAULT_UNITS = ['px', 'em', 'rem', '%'];
const DEFAULT_VALUE = '100px';

export default function ResponsiveWidthControl({
	label = DEFAULT_LABEL,
	value: widthValue = '',
	defaultValue = DEFAULT_VALUE,
	units: _units = DEFAULT_UNITS,
	onChange,
}) {
	const isSingleValue = typeof widthValue === 'string' || typeof widthValue === 'number';
	const [isSynced, setIsSynced] = useState(isSingleValue);
	const units = useCustomUnits({ availableUnits: _units });

	const parsedValue = isSingleValue
		? [widthValue, widthValue, widthValue, widthValue]
		: [widthValue?.[0], widthValue?.[1], widthValue?.[2], widthValue?.[3]];

	function onChangeIsSynced() {
		setIsSynced(!isSynced);
		if (!isSingleValue) {
			onChange(parsedValue[0]);
		}
	}

	function onChangeAll(value) {
		onChange(value);
	}

	function onChangePercial(value, index) {
		const newValue = [...parsedValue];
		newValue[index] = value;
		onChange(newValue);
	}

	function onReset() {
		onChange(defaultValue);
	}

	return (
		<BaseControl className='lism-responsiveWidthControl' label={label}>
			<VStack>
				<ToggleControl
					label={__('Synced', 'lism-blocks')}
					checked={isSynced}
					onChange={onChangeIsSynced}
				/>
				{isSynced ? (
					<div className='__row'>
						<SingleValueControl
							units={units}
							value={parsedValue[0]}
							onChange={onChangeAll}
						/>
					</div>
				) : (
					BREAKPOINTS.map(({ name, title }, index) => (
						<Flex className='__row' key={name}>
							<FlexItem className='__title'>{title}</FlexItem>
							<FlexBlock>
								<SingleValueControl
									units={units}
									value={parsedValue[index]}
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
