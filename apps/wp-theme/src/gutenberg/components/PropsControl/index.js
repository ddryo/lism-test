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

const DUMMY_PROPS = [
	'p={{x:30, y:40}}',
	'ml={20}',
	`ai={"flex-start"}`,
	`columns={["1fr 1fr", "1fr 1fr 1fr"]}`,
];

export default function PropsControl() {
	return (
		<div className='lism-propsControl'>
			<VStack spacing='3'>
				{DUMMY_PROPS.map((prop, index) => (
					<Flex className='__row' key={index}>
						<FlexBlock>
							<Button className='__code' variant='secondary'>
								{prop}
							</Button>
						</FlexBlock>
						<FlexItem>
							<Button
								className='__delete'
								icon={trash}
								isDestructive
								label={__('Delete prop', 'lism-blocks')}
							/>
						</FlexItem>
					</Flex>
				))}
				<VStack className='__row __open'>
					<Flex>
						<FlexBlock>
							<Button className="__code" variant="secondary">
								{`c=base`}
							</Button>
						</FlexBlock>
						<FlexItem>
							<Button
								className='__delete'
								icon={trash}
								isDestructive
								label={__('Delete prop', 'lism-blocks')}
							/>
						</FlexItem>
					</Flex>
					<Flex>
						<FlexBlock>
							<TextControl
								__nextHasNoMarginBottom
								label={__('Prop key', 'lism-blocks')}
								value='c'
							/>
						</FlexBlock>
						<FlexItem>
							<BaseControl label={__('Prop type', 'lism-blocks')} className='__types'>
								<ButtonGroup>
									<Button size='small' isPressed>
										Single
									</Button>
									<Button size='small'>Array</Button>
									<Button size='small'>Object</Button>
								</ButtonGroup>
							</BaseControl>
						</FlexItem>
					</Flex>
					<TextControl
						__nextHasNoMarginBottom
						label={__('Prop value', 'lism-blocks')}
						value='base'
					/>
				</VStack>
				<VStack className='__row __open'>
					<Flex>
						<FlexBlock>
							<Button className="__code" variant="secondary">
								{`fz=["l",null, "xl"]`}
							</Button>
						</FlexBlock>
						<FlexItem>
							<Button
								className='__delete'
								icon={trash}
								isDestructive
								label={__('Delete prop', 'lism-blocks')}
							/>
						</FlexItem>
					</Flex>
					<Flex>
						<FlexBlock>
							<TextControl
								__nextHasNoMarginBottom
								label={__('Prop key', 'lism-blocks')}
								value='fz'
							/>
						</FlexBlock>
						<FlexItem>
							<BaseControl label={__('Prop type', 'lism-blocks')} className='__types'>
								<ButtonGroup>
									<Button size='small'>Single</Button>
									<Button size='small' isPressed>
										Array
									</Button>
									<Button size='small'>Object</Button>
								</ButtonGroup>
							</BaseControl>
						</FlexItem>
					</Flex>
					<BaseControl label={__('Prop values', 'lism-blocks')} className='__values'>
						<VStack>
							<Flex>
								<FlexBlock>
									<TextControl
										hideLabelFromVision
										__nextHasNoMarginBottom
										label={__('Prop value 1', 'lism-blocks')}
										value='l'
									/>
								</FlexBlock>
								<FlexItem>
									<Button
										className='__delete'
										icon={trash}
										isDestructive
										label={__('Delete value', 'lism-blocks')}
									/>
								</FlexItem>
							</Flex>
							<Flex>
								<FlexBlock>
									<TextControl
										hideLabelFromVision
										__nextHasNoMarginBottom
										label={__('Prop value 2', 'lism-blocks')}
									/>
								</FlexBlock>
								<FlexItem>
									<Button
										className='__delete'
										icon={trash}
										isDestructive
										label={__('Delete value', 'lism-blocks')}
									/>
								</FlexItem>
							</Flex>
							<Flex>
								<FlexBlock>
									<TextControl
										hideLabelFromVision
										__nextHasNoMarginBottom
										label={__('Prop value 3', 'lism-blocks')}
										value='xl'
									/>
								</FlexBlock>
								<FlexItem>
									<Button
										className='__delete'
										icon={trash}
										isDestructive
										label={__('Delete value', 'lism-blocks')}
									/>
								</FlexItem>
							</Flex>
						</VStack>
					</BaseControl>
					<Button className='__add' variant='primary' size='small'>
						{__('Add value', 'lism-blocks')}
					</Button>
				</VStack>
				<VStack className='__row __open'>
					<Flex>
						<FlexBlock>
							<Button className="__code" variant="secondary">
								{`m={_:20, md: 40}`}
							</Button>
						</FlexBlock>
						<FlexItem>
							<Button
								className='__delete'
								icon={trash}
								isDestructive
								label={__('Delete prop', 'lism-blocks')}
							/>
						</FlexItem>
					</Flex>
					<Flex>
						<FlexBlock>
							<TextControl
								__nextHasNoMarginBottom
								label={__('Prop key', 'lism-blocks')}
								value='m'
							/>
						</FlexBlock>
						<FlexItem>
							<BaseControl label={__('Prop type', 'lism-blocks')} className='__types'>
								<ButtonGroup>
									<Button size='small'>Single</Button>
									<Button size='small'>Array</Button>
									<Button size='small' isPressed>
										Object
									</Button>
								</ButtonGroup>
							</BaseControl>
						</FlexItem>
					</Flex>
					<BaseControl label={__('Prop values', 'lism-blocks')} className='__values'>
						<VStack>
							<Flex>
								<FlexBlock>
									<TextControl
										hideLabelFromVision
										__nextHasNoMarginBottom
										label={__('Prop key 1', 'lism-blocks')}
										value='_'
										placeholder='key'
									/>
								</FlexBlock>
								<FlexItem>:</FlexItem>
								<FlexBlock>
									<TextControl
										hideLabelFromVision
										__nextHasNoMarginBottom
										label={__('Prop value 1', 'lism-blocks')}
										value='20'
										placeholder='value'
									/>
								</FlexBlock>
								<FlexItem>
									<Button
										className='__delete'
										icon={trash}
										isDestructive
										label={__('Delete value', 'lism-blocks')}
									/>
								</FlexItem>
							</Flex>
							<Flex>
								<FlexBlock>
									<TextControl
										hideLabelFromVision
										__nextHasNoMarginBottom
										label={__('Prop key 1', 'lism-blocks')}
										value='md'
										placeholder='key'
									/>
								</FlexBlock>
								<FlexItem>:</FlexItem>
								<FlexBlock>
									<TextControl
										hideLabelFromVision
										__nextHasNoMarginBottom
										label={__('Prop value 1', 'lism-blocks')}
										value='40'
										placeholder='value'
									/>
								</FlexBlock>
								<FlexItem>
									<Button
										className='__delete'
										icon={trash}
										isDestructive
										label={__('Delete value', 'lism-blocks')}
									/>
								</FlexItem>
							</Flex>
							<Flex>
								<FlexBlock>
									<TextControl
										hideLabelFromVision
										__nextHasNoMarginBottom
										label={__('Prop key 1', 'lism-blocks')}
										placeholder='key'
										className='__invalid'
									/>
								</FlexBlock>
								<FlexItem>:</FlexItem>
								<FlexBlock>
									<TextControl
										hideLabelFromVision
										__nextHasNoMarginBottom
										label={__('Prop value 1', 'lism-blocks')}
										placeholder='value'
										className='__invalid'
									/>
								</FlexBlock>
								<FlexItem>
									<Button
										className='__delete'
										icon={trash}
										isDestructive
										label={__('Delete value', 'lism-blocks')}
									/>
								</FlexItem>
							</Flex>
						</VStack>
					</BaseControl>
					<Button className='__add' variant='primary' size='small'>
						{__('Add value', 'lism-blocks')}
					</Button>
				</VStack>
				<Button className='__add' variant='primary'>
					{__('Add prop', 'lism-blocks')}
				</Button>
			</VStack>
		</div>
	);
}
