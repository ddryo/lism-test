/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	Button,
	Flex,
	Modal,
	SearchControl,
} from '@wordpress/components';
import { Icon, chevronDown } from '@wordpress/icons';

/**
 * @Internal dependencies
 */
import { ICONS } from './icons';

export default function IconPicker({ value, onChange }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [query, setQuery] = useState('');

	const filteredIcons = query.length
		? Object.fromEntries(
				Object.entries(ICONS).filter(([name]) => {
					return name.toLowerCase().includes(query.toLowerCase());
				})
		  )
		: ICONS;

	const ButtonLabel = ({ value }) => {
		if (!!value && !!ICONS[value]) {
			const Component = ICONS[value];
			return (
				<>
					<Component className='__toggleIcon' />
					<Icon icon={chevronDown} class='__toggleArrow' />
				</>
			);
		}
		return (
			<>
				{__('Select', 'lism-blocks')}
				<Icon icon={chevronDown} class='__toggleArrow' />
			</>
		);
	};

	return (
		<div className='lism-iconPicker'>
			<Flex justify='flex-start'>
				<Button
					className='__toggle'
					variant='secondary'
					onClick={() => {
						setQuery('');
						setIsModalOpen(true);
					}}
				>
					<ButtonLabel value={value} />
				</Button>
				<Button onClick={() => onChange(undefined)}>{__('Clear', 'lism-blocks')}</Button>
			</Flex>
			{isModalOpen && (
				<Modal
					className='lism-iconPickerModal'
					title={__('Search icon', 'lism-blocks')}
					onRequestClose={() => setIsModalOpen(false)}
				>
					<SearchControl
						className='__search'
						label={__('Search icon', 'lism-blocks')}
						value={query}
						onChange={(value) => setQuery(value)}
					/>
					<Flex className='__iconList' wrap justify='flex-start'>
						{Object.entries(filteredIcons).map(([name, Icon]) => (
							<Button
								variant={name === value ? 'primary' : undefined}
								label={name}
								key={name}
								onClick={() => {
									onChange(name);
									setIsModalOpen(false);
								}}
							>
								<Icon />
							</Button>
						))}
					</Flex>
				</Modal>
			)}
		</div>
	);
}
