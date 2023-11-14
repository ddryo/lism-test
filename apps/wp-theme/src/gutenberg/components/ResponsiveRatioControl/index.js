/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { BaseControl, ToggleControl } from '@wordpress/components';

/**
 * @Internal dependencies
 */
import { RatioControl, ResponsiveTabControl } from '@/gutenberg/components';

const DEFAULT_LABEL = __('Ratio', 'lism-blocks');

export default function ResponsiveRatioControl({
	label = DEFAULT_LABEL,
	value: ratioValue = '',
	onChange,
}) {
	const isSingleValue = typeof ratioValue === 'string';
	const [isSynced, setIsSynced] = useState(isSingleValue);

	const parsedValue = isSingleValue
		? [ratioValue, ratioValue, ratioValue, ratioValue]
		: [ratioValue?.[0], ratioValue?.[1], ratioValue?.[2], ratioValue?.[3]];

	function onChangeIsSynced(newIsSynced) {
		setIsSynced(newIsSynced);
		if (!isSingleValue) {
			onChange(parsedValue[0]);
		}
	}

	function onChangeAll(value) {
		onChange(value);
	}

	function onChangePercial(value, index) {
		const newValue = [...parsedValue];
		newValue[index] = value;
		onChange(newValue);
	}

	return (
		<BaseControl className='lism-responsiveRatioControl' label={label}>
			<ToggleControl
				label={__('Synced', 'lism-blocks')}
				checked={isSynced}
				onChange={onChangeIsSynced}
			/>
			{isSynced ? (
				<RatioControl value={parsedValue[0]} onChange={onChangeAll} />
			) : (
				<ResponsiveTabControl>
					{({ index }) => {
						return (
							<RatioControl
								value={parsedValue[index]}
								onChange={(value) => onChangePercial(value, index)}
							/>
						);
					}}
				</ResponsiveTabControl>
			)}
		</BaseControl>
	);
}
