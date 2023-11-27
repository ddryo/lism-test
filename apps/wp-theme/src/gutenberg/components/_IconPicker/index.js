/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Button, Flex } from '@wordpress/components';
import { Icon, chevronDown } from '@wordpress/icons';

/**
 * @Internal dependencies
 */
import { IconPickerModal } from '@/gutenberg/components';
import ICONS from '@/gutenberg/icons';

export default function IconPicker({ value, onChange }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const ButtonLabel = ({ value }) => {
		if (!!value && !!ICONS[value]) {
			const Component = ICONS[value];
			return (
				<>
					<Component className='__toggleIcon' />
					<Icon icon={chevronDown} className='__toggleArrow' />
				</>
			);
		}
		return (
			<>
				{__('Select', 'lism-blocks')}
				<Icon icon={chevronDown} className='__toggleArrow' />
			</>
		);
	};

	return (
		<div className='lism-iconPicker'>
			<Flex justify='flex-start'>
				<Button
					className='__toggle'
					variant='secondary'
					onClick={() => setIsModalOpen(true)}
				>
					<ButtonLabel value={value} />
				</Button>
				<Button onClick={() => onChange(undefined)}>{__('Clear', 'lism-blocks')}</Button>
			</Flex>
			{isModalOpen && (
				<IconPickerModal
					value={value}
					onChange={onChange}
					onClose={() => setIsModalOpen(false)}
				/>
			)}
		</div>
	);
}
