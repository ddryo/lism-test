/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	RangeControl,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { settings } from '@wordpress/icons';

const TOKEN_VALUES = [20, 30, 40, 50, 60, 70, 80];
const DEFAULT_TOKEN_VALUE = 50;

export default function SingleValueControl({ label, units, value, onChange }) {
	const isTokenValue = typeof value === 'number';

	function onChangeIsTokenValue() {
		if (isTokenValue) {
			// トークン値からカスタム値への変換
			if (TOKEN_VALUES.includes(value)) {
				onChange(`${value}px`);
			} else {
				onChange(`${DEFAULT_TOKEN_VALUE}px`);
			}
		} else {
			// カスタム値からトークン値への変更
			const parsedValue = parseInt(value);
			if (TOKEN_VALUES.includes(parsedValue)) {
				onChange(parsedValue);
			} else {
				onChange(DEFAULT_TOKEN_VALUE);
			}
		}
	}

	return (
		<Flex style={{ minHeight: '40px' }}>
			{isTokenValue ? (
				<>
					<FlexItem className='__title'>
						<code>{value}</code>
					</FlexItem>
					<FlexBlock>
						<RangeControl
							label={label}
							units={units}
							min={0}
							max={TOKEN_VALUES.length - 1}
							withInputField={false}
							renderTooltipContent={(value) => TOKEN_VALUES[value]}
							type='slider'
							onChange={(newValue) => {
								onChange(TOKEN_VALUES[newValue]);
							}}
							value={TOKEN_VALUES.findIndex((tokenValue) => tokenValue === value)}
						/>
					</FlexBlock>
				</>
			) : (
				<FlexBlock>
					<UnitControl
						size={'__unstable-large'}
						label={label}
						units={units}
						min={0}
						onChange={onChange}
						value={value}
					/>
				</FlexBlock>
			)}
			<FlexItem>
				<Button
					icon={settings}
					isPressed={isTokenValue}
					label={
						isTokenValue
							? __('Use custom value', 'lism-blocks')
							: __('Use token value', 'lism-blocks')
					}
					onClick={onChangeIsTokenValue}
				/>
			</FlexItem>
		</Flex>
	);
}
