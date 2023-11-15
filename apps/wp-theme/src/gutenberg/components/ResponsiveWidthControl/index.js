/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	BaseControl,
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

export default function ResponsiveWidthControl({
	label = DEFAULT_LABEL,
	value: widthValue = '',
	defaultValue = '',
	units: _units = DEFAULT_UNITS,
	onChange,
}) {
	const isSingleValue = typeof widthValue === 'string';
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
		onChange(value.toString());
	}

	function onChangePercial(value, index) {
		const newValue = [...parsedValue];
		newValue[index] = value.toString();
		onChange(newValue);
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
						<SingleValueControl units={units} />
					</div>
				) : (
					BREAKPOINTS.map(({ name, title }, index) => (
						<Flex className='__row' key={name}>
							<FlexItem className='__title'>{title}</FlexItem>
							<FlexBlock>
								<SingleValueControl units={units} />
							</FlexBlock>
						</Flex>
					))
				)}
			</VStack>
		</BaseControl>
	);
}
