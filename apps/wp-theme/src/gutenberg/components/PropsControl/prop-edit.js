/**
 * @WordPress dependencies
 */
import {
	BaseControl,
	Button,
	ButtonGroup,
	Flex,
	FlexBlock,
	FlexItem,
	TextControl,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { trash } from '@wordpress/icons';
import { getPropType, transformPropValue } from './utils';

/**
 * @Internal dependencies
 */
const { BREAKPOINTS } = require('../../constants');

const PROP_TYPES = [
	{
		label: __('String', 'lism-blocks'),
		value: 'string',
	},
	{
		label: __('Array', 'lism-blocks'),
		value: 'array',
	},
	{
		label: __('Object', 'lism-blocks'),
		value: 'object',
	},
];

export default function PropEdit({ lismProp, propErrors, onChange }) {
	const { key = '', value = '' } = lismProp;
	const propType = getPropType(value);
	console.log(propErrors);

	function onChangeKey(newValue) {
		onChange({
			...lismProp,
			key: newValue,
		});
	}

	function onChangePropType(newPropType) {
		const newValue = transformPropValue(value, newPropType);
		console.log(newValue);

		onChange({
			...lismProp,
			value: newValue,
		});
	}

	function onChangeStringValue(newValue) {
		onChange({
			...lismProp,
			value: newValue,
		});
	}

	function onChangeArrayValue(index, newValue) {
		const newArrayValue = [
			value?.[0] || null,
			value?.[1] || null,
			value?.[2] || null,
			value?.[3] || null,
		];
		newArrayValue[index] = newValue || null;
		while (newArrayValue[newArrayValue.length - 1] === null) {
			newArrayValue.pop();
		}
		onChange({
			...lismProp,
			value: newArrayValue,
		});
	}

	function onChangeObjectKey(index, newValue) {
		const newObjectValue = [...value];
		newObjectValue[index] = {
			...newObjectValue[index],
			key: newValue,
		};
		onChange({
			...lismProp,
			value: newObjectValue,
		});
	}

	function onChangeObjectValue(index, newValue) {
		const newObjectValue = [...value];
		newObjectValue[index] = {
			...newObjectValue[index],
			value: newValue,
		};
		onChange({
			...lismProp,
			value: newObjectValue,
		});
	}

	function onAddObjectValue() {
		onChange({
			...lismProp,
			value: [...value, { key: '', value: '' }],
		});
	}

	function onDeleteObjectValue(index) {
		onChange({
			...lismProp,
			value: value.filter((_, i) => i !== index),
		});
	}

	return (
		<VStack>
			<Flex>
				<FlexBlock style={{ position: 'relative' }}>
					<TextControl
						__nextHasNoMarginBottom
						label={__('Prop key', 'lism-blocks')}
						className={!key && '__invalid'}
						value={key || ''}
						onChange={onChangeKey}
					/>
				</FlexBlock>
				<FlexItem>
					<BaseControl label={__('Prop type', 'lism-blocks')} className='__types'>
						<ButtonGroup>
							{PROP_TYPES.map(({ label, value }) => (
								<Button
									key={value}
									size='small'
									isPressed={propType === value}
									onClick={() => onChangePropType(value)}
								>
									{label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>
				</FlexItem>
			</Flex>
			{propType === 'string' && (
				<TextControl
					__nextHasNoMarginBottom
					label={__('Prop value', 'lism-blocks')}
					className={!value && '__invalid'}
					value={value || ''}
					onChange={onChangeStringValue}
				/>
			)}
			{propType === 'array' && (
				<BaseControl label={__('Prop values', 'lism-blocks')} className='__values'>
					<VStack>
						{BREAKPOINTS.map(({ name, title, index }) => (
							<Flex key={name}>
								<FlexItem className='__breakpoint'>{title}</FlexItem>
								<FlexBlock>
									<TextControl
										__nextHasNoMarginBottom
										value={value?.[index] || ''}
										onChange={(value) => onChangeArrayValue(index, value)}
									/>
								</FlexBlock>
							</Flex>
						))}
					</VStack>
				</BaseControl>
			)}
			{propType === 'object' && (
				<>
					<BaseControl label={__('Prop values', 'lism-blocks')} className='__values'>
						<VStack>
							{(value || []).map((object, index) => (
								<Flex key={index}>
									<FlexBlock>
										<TextControl
											__nextHasNoMarginBottom
											value={object.key || ''}
											placeholder='key'
											className={!object.key && '__invalid'}
											onChange={(value) => onChangeObjectKey(index, value)}
										/>
									</FlexBlock>
									<FlexItem>:</FlexItem>
									<FlexBlock>
										<TextControl
											__nextHasNoMarginBottom
											value={object.value || ''}
											placeholder='value'
											className={!object.value && '__invalid'}
											onChange={(value) => onChangeObjectValue(index, value)}
										/>
									</FlexBlock>
									<FlexItem>
										<Button
											className='__delete'
											icon={trash}
											label={__('Delete value', 'lism-blocks')}
											onClick={() => onDeleteObjectValue(index)}
											disabled={value.length === 1}
										/>
									</FlexItem>
								</Flex>
							))}
						</VStack>
					</BaseControl>
					<Button
						className='__add'
						variant='primary'
						size='small'
						onClick={onAddObjectValue}
						disabled={value.length >= 5}
					>
						{__('Add value', 'lism-blocks')}
					</Button>
				</>
			)}
		</VStack>
	);
}
