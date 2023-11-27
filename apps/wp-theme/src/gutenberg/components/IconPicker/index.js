/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState, RawHTML } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { chevronDown } from '@wordpress/icons';

/**
 * @Internal dependencies
 */
import { Icon, IconModal } from '@/gutenberg/components';

export default function IconPicker ({
	value = '',
	position = 'sidebar',
	onChange,
	svg = '',
	onSetSvg,
	clearable = true,
}) {
	const [isOpenIconPicker, setIsOpenIconPicker] = useState(false);

	return (
		<div className='lism-iconPicker'>
			<Button
				variant='secondary'
				iconPosition='right'
				icon={chevronDown}
				text={
					svg ? (
						<RawHTML className='lism-iconPicker__prev'>{svg}</RawHTML>
					) : value ? (
						<Icon icon={value} size='24px' className='lism-iconPicker__prev' />
					) : (
						<span className='lism-iconPicker__placeholder'>
							{__('Search', 'lism-blocks')}
						</span>
					)
				}
				onClick={() => {
					setIsOpenIconPicker(true);
				}}
			/>
			{clearable && (
				<Button
					className='-clear'
					size='small'
					text={__('Clear', 'lism-blocks')}
					onClick={() => {
						onChange('');
						if (svg && onSetSvg) {
							onSetSvg('');
						}
					}}
				/>
			)}
			{isOpenIconPicker && (
				<IconModal
					{...{ value, position, onChange, svg, onSetSvg }}
					onClose={() => {
						setIsOpenIconPicker(false);
					}}
				/>
			)}
		</div>
	);
};
