/**
 * @External dependencies
 */
import classnames from 'classnames';

/**
 * @WordPress dependencies
 */
import {
	BaseControl,
	Button,
	ButtonGroup,
	ComboboxControl,
	Flex,
	FlexBlock,
	FlexItem,
	TextControl,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { trash } from '@wordpress/icons';

/**
 * @Internal dependencies
 */
import { ALL_PROP_KEYS, OBJECT_PROPS, ARRAY_KEYS, BREAKPOINTS } from '@/gutenberg/constants';
import { getPropErrors, getPropType, transformPropValue } from '@/gutenberg/utils';

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

export default function PropEdit({ lismProp, onChange }) {
	const { key = '', value = '' } = lismProp;
	const propType = getPropType(value);
	const propErrors = getPropErrors(lismProp);

	function onChangeKey(newValue) {
		onChange({
			...lismProp,
			key: newValue,
		});
	}

	function onChangePropType(newPropType) {
		const newValue = transformPropValue(value, newPropType);
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

	function onChangeBreakpointValue(index, newValue) {
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

	function onChangeArrayValue(index, newValue) {
		const newArrayValue = [...value];
		newArrayValue[index] = newValue;
		onChange({
			...lismProp,
			value: newArrayValue,
		});
	}

	function onAddArrayValue() {
		onChange({
			...lismProp,
			value: [...value, ''],
		});
	}

	function onDeleteArrayValue(index) {
		onChange({
			...lismProp,
			value: value.filter((_, i) => i !== index),
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
			<Flex align='flex-start'>
				<FlexBlock>
					<ComboboxControl
						label={__('Prop key', 'lism-blocks')}
						options={ALL_PROP_KEYS.map((key) => {
							return { value: key, label: key };
						})}
						className={classnames('__key', { __invalid: propErrors.key })}
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
					label={__('Prop value', 'lism-blocks')}
					className={propErrors.value && '__invalid'}
					value={value || ''}
					onChange={onChangeStringValue}
				/>
			)}
			{propType === 'array' && !ARRAY_KEYS.includes(key) && (
				<BaseControl label={__('Prop values', 'lism-blocks')} className='__values'>
					<VStack>
						{BREAKPOINTS.map(({ name, title, index }) => (
							<Flex key={name}>
								<FlexItem className='__breakpoint'>{title}</FlexItem>
								<FlexBlock>
									<TextControl
										value={value?.[index] || ''}
										className={propErrors?.values?.[index] && '__invalid'}
										onChange={(value) => onChangeBreakpointValue(index, value)}
									/>
								</FlexBlock>
							</Flex>
						))}
					</VStack>
				</BaseControl>
			)}
			{propType === 'array' && ARRAY_KEYS.includes(key) && (
				<>
					<BaseControl label={__('Prop values', 'lism-blocks')} className='__values'>
						<VStack>
							{(value || []).map((valueElement, index) => (
								<Flex key={index}>
									<FlexBlock>
										<TextControl
											value={valueElement || ''}
											className={propErrors?.values?.[index] && '__invalid'}
											onChange={(value) => onChangeArrayValue(index, value)}
										/>
									</FlexBlock>
									<FlexItem>
										<Button
											className='__delete'
											icon={trash}
											label={__('Delete value', 'lism-blocks')}
											onClick={() => onDeleteArrayValue(index)}
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
						onClick={onAddArrayValue}
						disabled={value.length >= 5}
					>
						{__('Add value', 'lism-blocks')}
					</Button>
				</>
			)}
			{propType === 'object' && (
				<>
					<BaseControl label={__('Prop values', 'lism-blocks')} className='__values'>
						<VStack>
							{(value || []).map((object, index) => {
								const objectProps = OBJECT_PROPS.find((prop) => prop.key === key);
								return (
									<Flex key={index} align='flex-start'>
										<FlexBlock>
											{objectProps?.contexts?.length > 0 ? (
												<ComboboxControl
													options={objectProps.contexts.map((context) => {
														return { value: context, label: context };
													})}
													className={
														propErrors?.values?.[index]?.key &&
														'__invalid'
													}
													value={object.key || ''}
													onChange={(value) =>
														onChangeObjectKey(index, value)
													}
												/>
											) : (
												<TextControl
													value={object.key || ''}
													placeholder='key'
													className={
														propErrors?.values?.[index]?.key &&
														'__invalid'
													}
													onChange={(value) =>
														onChangeObjectKey(index, value)
													}
												/>
											)}
										</FlexBlock>
										<FlexItem>:</FlexItem>
										<FlexBlock>
											<TextControl
												value={object.value || ''}
												placeholder='value'
												className={
													propErrors?.values?.[index]?.value &&
													'__invalid'
												}
												onChange={(value) =>
													onChangeObjectValue(index, value)
												}
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
								);
							})}
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
