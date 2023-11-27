/**
 * @External dependencies
 */
import { Button as LismButton } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	BaseControl,
	PanelBody,
	Placeholder,
	RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import { SelectorPreviewTip, IconPicker, Icon as InternalIcon } from '@/gutenberg/components';

const VARIANT_OPTIONS = [
	{
		label: __('Default', 'lism-blocks'),
		value: 'default',
	},
	{
		label: __('Outline', 'lism-blocks'),
		value: 'outline',
	},
	{
		label: __('Ghost', 'lism-blocks'),
		value: 'ghost',
	},
];

registerBlockType(metadata.name, {
	title: __('Button', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const {
			text,
			keyColor,
			variant,
			leftIconSlug,
			rightIconSlug,
			iconSlug,
			isGrid,
			iconOffset,
			anchor,
			className,
		} = attributes;
		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem'] });

		const blockProps = useBlockProps();
		const componentProps = {
			variant,
		}

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('Setting', 'lism-blocks')}>
						<ToggleGroupControl
							label={__('Variation', 'lism-blocks')}
							onChange={(nextSize) => {
								setAttributes({ variant: nextSize !== 'default' ? nextSize : undefined });
							}}
							isBlock
							value={variant || 'default'}
						>
							{VARIANT_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
					</PanelBody>
				</InspectorControls>
				<div {...blockProps}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					<LismButton {...componentProps}>
						<RichText
							placeholder={__('Add text...', 'lism-blocks')}
							value={text}
							withoutInteractiveFormatting
							onChange={(newText) => {
								setAttributes({ text: newText });
							}}
						/>
					</LismButton>
				</div>
			</>
		);
	},
	save: ({ attributes }) => {
		const { keyColor, variant, leftIconSlug, rightIconSlug, iconSlug, isGrid, iconOffset } =
			attributes;
		const blockProps = useBlockProps.save();

		return (
			<div {...blockProps}>
				<LismButton>Push Me</LismButton>
			</div>
		);
	},
});
