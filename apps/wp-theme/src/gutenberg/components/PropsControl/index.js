/**
 * @External dependencies
 */
import classnames from 'classnames';

/**
 * @WordPress dependencies
 */
import {
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { trash } from '@wordpress/icons';

/**
 * @Internal dependencies
 */
import PropEdit from './prop-edit';
import { getPropString } from './utils';

export default function PropsControl({ lismProps, onChange }) {
	const [propIndex, setPropIndex] = useState(undefined);

	function onAddProp() {
		const newLismProps = [...lismProps, {}];
		onChange(newLismProps);
		setPropIndex(undefined);
	}

	function onDeleteProp(index) {
		const newLismProps = lismProps.filter((value, i) => i !== index);
		onChange(newLismProps);
	}

	function onSelectProp(index) {
		setPropIndex(propIndex === index ? undefined : index);
	}

	function onChangeProp(index, value) {
		const newLismProps = [...lismProps];
		newLismProps[index] = value;
		onChange(newLismProps);
	}

	return (
		<div className='lism-propsControl'>
			<VStack spacing='3'>
				{lismProps.map((lismProp, index) => {
					const propString = getPropString(lismProp.key, lismProp.value);
					return (
						<VStack
							className={classnames('__row', {
								__open: propIndex === index,
							})}
							key={index}
						>
							<Flex>
								<FlexBlock>
									<Button
										className='__code'
										variant='secondary'
										isDestructive={propString === false}
										onClick={() => onSelectProp(index)}
										label={propString !== false ? propString : undefined}
										showTooltip
									>
										{propString !== false
											? propString
											: __('Invalid prop', 'lism-blocks')}
									</Button>
								</FlexBlock>
								<FlexItem>
									<Button
										className='__delete'
										icon={trash}
										isDestructive
										label={__('Delete prop', 'lism-blocks')}
										onClick={() => onDeleteProp(index)}
									/>
								</FlexItem>
							</Flex>
							{propIndex === index && (
								<PropEdit
									lismProp={lismProp}
									onChange={(value) => onChangeProp(index, value)}
								/>
							)}
						</VStack>
					);
				})}
				<Button className='__add' variant='primary' onClick={onAddProp}>
					{__('Add prop', 'lism-blocks')}
				</Button>
			</VStack>
		</div>
	);
}
