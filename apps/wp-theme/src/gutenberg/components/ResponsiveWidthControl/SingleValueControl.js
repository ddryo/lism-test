/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	RangeControl,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { settings } from '@wordpress/icons';

const TOKEN_VALUES = [0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80];

export default function SingleValueControl({ label, units, value }) {
	const [isPresetValue, setIsPresetValue] = useState(typeof value === 'number');

	return (
		<Flex style={{ minHeight: '40px' }}>
			<FlexBlock>
				{isPresetValue ? (
					<RangeControl
						label={label}
						units={units}
						min={0}
						max={TOKEN_VALUES.length - 1}
						withInputField={false}
						marks={
							TOKEN_VALUES.map((value, index) => ({
								value: index,
								label: value.toString(),
							})) || false
						}
					/>
				) : (
					<UnitControl size={'__unstable-large'} label={label} units={units} min={0} />
				)}
			</FlexBlock>
			<FlexItem>
				<Button
					icon={settings}
					isPressed={isPresetValue}
					onClick={() => setIsPresetValue(!isPresetValue)}
				/>
			</FlexItem>
		</Flex>
	);
}
