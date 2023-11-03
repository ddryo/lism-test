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
	Icon,
	RangeControl,
	ToggleControl,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { globe } from '@wordpress/icons';

const DEFAULT_LABEL = __('Columns', 'lism-blocks');

const TABS = [
	<Icon icon={globe} />,
	__('sm', 'lism-blocks'),
	__('md', 'lism-blocks'),
	__('lg', 'lism-blocks'),
];

export default function ResponsiveColumnsControl({
	label = DEFAULT_LABEL,
	value: columnValue = '2',
	onChange,
}) {
	const isSingleValue = typeof columnValue === 'string';
	const [isSynced, setIsSynced] = useState(isSingleValue);

	const parsedValue = isSingleValue
		? [columnValue, columnValue, columnValue, columnValue]
		: [columnValue?.[0], columnValue?.[1], columnValue?.[2], columnValue?.[3]];

	function onChangeIsSynced() {
		setIsSynced(!isSynced);
		// if (!isSingleValue) {
		// 	onChange(parsedValue[0]);
		// }
	}

	console.log(isSynced);

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
							value={columnValue}
							min={0}
							max={20}
						/>
					</div>
				) : (
					TABS.map((tab, index) => (
						<Flex className='__row' key={index}>
							<FlexItem className='__title'>{tab}</FlexItem>
							<FlexBlock>
								<RangeControl
									__nextHasNoMarginBottom
									label={__('all', 'lism-blocks')}
									hideLabelFromVision
									value={columnValue}
									min={0}
									max={20}
								/>
							</FlexBlock>
						</Flex>
					))
				)}
				<Button className='__reset' variant='secondary' size='small'>
					{__('Reset', 'lism-blocks')}
				</Button>
			</VStack>
		</BaseControl>
	);
}
