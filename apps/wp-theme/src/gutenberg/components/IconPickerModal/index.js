/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Button, Flex, Modal, SearchControl, TabPanel } from '@wordpress/components';

/**
 * @Internal dependencies
 */
import ICONS from '@/gutenberg/icons';

// 全ての絵文字を取得する
function getAllEmojis() {
	const emojis = [];

	for (let i = 0x1f600; i <= 0x1f64f; i++) {
		emojis.push({
			name: i,
			value: String.fromCodePoint(i),
		});
	}

	for (let i = 0x1f300; i <= 0x1f5ff; i++) {
		emojis.push({
			name: i,
			value: String.fromCodePoint(i),
		});
	}

	for (let i = 0x1f680; i <= 0x1f6ff; i++) {
		emojis.push({
			name: i,
			value: String.fromCodePoint(i),
		});
	}
	return emojis;
}

export default function IconPickerModal({ value, onChange, onClose }) {
	const [query, setQuery] = useState('');
	const allEmojis = getAllEmojis();

	const filteredIcons = query.length
		? Object.fromEntries(
				Object.entries(ICONS).filter(([name]) => {
					return name.toLowerCase().includes(query.toLowerCase());
				})
		  )
		: ICONS;

	return (
		<Modal
			className='lism-iconPickerModal'
			title={__('Search icon', 'lism-blocks')}
			onRequestClose={onClose}
		>
			<TabPanel
				tabs={[
					{
						name: 'icon',
						title: 'Icon',
					},
					{
						name: 'emoji',
						title: 'Emoji',
					},
				]}
			>
				{({ name }) => {
					if (name === 'icon') {
						return (
							<>
								<SearchControl
									className='__search'
									label={__('Search icon', 'lism-blocks')}
									value={query}
									onChange={(value) => setQuery(value)}
								/>
								<Flex className='__iconList __icon' wrap justify='flex-start'>
									{Object.entries(filteredIcons).map(([name, Icon]) => (
										<Button
											variant={name === value ? 'primary' : undefined}
											label={name}
											key={name}
											onClick={() => {
												onChange(name);
												onClose();
											}}
										>
											<Icon />
										</Button>
									))}
								</Flex>
							</>
						);
					}
					if (name === 'emoji') {
						return (
							<Flex className='__iconList __emoji' wrap justify='flex-start'>
								{allEmojis.map(({ name, value }) => (
									<Button
										// variant={value === value ? 'primary' : undefined}
										key={name}
										onClick={() => {
											onChange(value);
											onClose();
										}}
									>
										{value}
									</Button>
								))}
							</Flex>
						);
					}
				}}
			</TabPanel>
		</Modal>
	);
}
