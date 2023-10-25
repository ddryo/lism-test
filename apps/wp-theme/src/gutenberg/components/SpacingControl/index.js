/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { link, linkOff } from '@wordpress/icons';
import {
	Button,
	Icon,
	__experimentalVStack as VStack,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { sidesAll, sidesTop, sidesRight, sidesBottom, sidesLeft } from '@wordpress/icons';

const DEFAULT_UNITS = ['px', 'em', 'rem'];

const LABELS = {
	all: __('All'),
	top: __('Top'),
	bottom: __('Bottom'),
	left: __('Left'),
	right: __('Right'),
};

const ICONS = {
	top: sidesTop,
	right: sidesRight,
	bottom: sidesBottom,
	left: sidesLeft,
};

export default function SpacingControl({ units: _units = DEFAULT_UNITS }) {
	const [isLinked, setIsLinked] = useState(false);
	const [side, setSide] = useState();
	const units = useCustomUnits({ availableUnits: _units });
	const linkButtonlabel = isLinked
		? __('Unlink Sides', 'lism-blocks')
		: __('Link Sides', 'lism-blocks');

	return (
		<VStack className='lism-spacingControl'>
			<Button
				className='__link'
				variant={isLinked ? 'primary' : 'secondary'}
				label={linkButtonlabel}
				icon={isLinked ? link : linkOff}
				onClick={() => {
					if (isLinked) {
						setIsLinked(false);
						setSide(undefined);
					} else {
						setIsLinked(true);
					}
				}}
			/>
			{isLinked ? (
				<div className='__linked'>
					<Icon icon={sidesAll} className='__icon' />
					<UnitControl
						size='__unstable-large'
						__nextHasNoMarginBottom
						label={LABELS.all}
						hideLabelFromVision
						units={units}
						min={0}
					/>
				</div>
			) : (
				<div className='__unlinked'>
					<Icon icon={side ? ICONS[side] : sidesAll} className='__icon' />
					{['top', 'right', 'bottom', 'left'].map((side) => (
						<UnitControl
							key={side}
							className={`__${side}`}
							size='__unstable-large'
							__nextHasNoMarginBottom
							label={LABELS[side]}
							hideLabelFromVision
							units={units}
							min={0}
							onFocus={() => setSide(side)}
						/>
					))}
				</div>
			)}
			<Button className='__reset' variant='secondary' size='small'>
				{__('Clear', 'lism-blocks')}
			</Button>
		</VStack>
	);
}
