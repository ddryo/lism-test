/**
 * @WordPress dependencies
 */
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Icon, close, moveTo } from '@wordpress/icons';

const OPTIONS = [
	{
		label: __('nowrap', 'lism-blocks'),
		value: 'nowrap',
		icon: <Icon icon={close} />,
	},
	{
		label: __('wrap', 'lism-blocks'),
		value: 'wrap',
		icon: <Icon icon={moveTo} />,
	},
	{
		label: __('wrap-reverse', 'lism-blocks'),
		value: 'wrap-reverse',
		icon: <Icon icon={moveTo} style={{ transform: 'scaleY(-1)' }} />,
	},
];

export default function FlexWrapControl({ value, onChange }) {
	return (
		<ToggleGroupControl
			className='lism-flexWrapControl'
			label={__('Flex wrap', 'lism-blocks')}
			onChange={(value) => onChange(value)}
			value={value}
		>
			{OPTIONS.map(({ label, value, icon }) => (
				<ToggleGroupControlOptionIcon key={value} value={value} icon={icon} label={label} />
			))}
		</ToggleGroupControl>
	);
}
