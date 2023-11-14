/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { link, linkOff } from '@wordpress/icons';
import {
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	Icon,
	__experimentalVStack as VStack,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { sidesAll, sidesVertical, sidesHorizontal } from '@wordpress/icons';

const DEFAULT_UNITS = ['px', 'em', 'rem'];

const LABELS = {
	all: __('All', 'lism-blocks'),
	row: __('Row', 'lism-blocks'),
	column: __('Column', 'lism-blocks'),
};

const ICONS = {
	row: sidesVertical,
	column: sidesHorizontal,
};

export default function GapControl({ units: _units = DEFAULT_UNITS }) {
	const [isLinked, setIsLinked] = useState(false);
	const units = useCustomUnits({ availableUnits: _units });
	const linkButtonlabel = isLinked
		? __('Unlink Sides', 'lism-blocks')
		: __('Link Sides', 'lism-blocks');

	return (
		<VStack className='lism-gapControl'>
			<Button
				className='__link'
				variant={isLinked ? 'primary' : 'secondary'}
				label={linkButtonlabel}
				icon={isLinked ? link : linkOff}
				onClick={() => setIsLinked(!isLinked)}
			/>
			{isLinked && (
				<Flex className='__row'>
					<FlexItem>
						<Icon icon={sidesAll} className='__icon' />
					</FlexItem>
					<FlexBlock>
						<UnitControl
							size={'__unstable-large'}
							label={LABELS.all}
							hideLabelFromVision
							units={units}
							min={0}
						/>
					</FlexBlock>
				</Flex>
			)}
			{!isLinked &&
				['row', 'column'].map((side) => (
					<Flex className='__row' key={side}>
						<FlexItem>
							<Icon icon={side ? ICONS[side] : sidesAll} className='__icon' />
						</FlexItem>
						<FlexBlock>
							<UnitControl
								key={side}
								size={'__unstable-large'}
								label={LABELS[side]}
								hideLabelFromVision
								units={units}
								min={0}
							/>
						</FlexBlock>
					</Flex>
				))}
			<Button className='__reset' variant='secondary' size='small'>
				{__('Clear', 'lism-blocks')}
			</Button>
		</VStack>
	);
}
