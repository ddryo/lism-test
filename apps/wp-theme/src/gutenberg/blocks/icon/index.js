/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useState } from '@wordpress/element';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	BaseControl,
	Button,
	PanelBody,
	Placeholder,
	TextControl,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import { SelectorPreviewTip, IconPicker, IconPickerModal } from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Icon', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const { iconSize, iconLabel, iconSlug, anchor, className } = attributes;
		const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);
		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem'] });
		const blockProps = useBlockProps({});

		// const { ref, ...restBlockProps } = blockProps;

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('Setting', 'lism-blocks')}>
						<BaseControl label={__('Select icon', 'lism-blocks')}>
							<IconPicker
								value={iconSlug}
								onChange={(value) => setAttributes({ iconSlug: value })}
							/>
						</BaseControl>
						<UnitControl
							size={'__unstable-large'}
							label={__('Icon size', 'lism-blocks')}
							value={iconSize}
							onChange={(value) => {
								setAttributes({ iconSize: value });
							}}
							units={units}
							min={0}
						/>
						<TextControl
							label={__('Icon label', 'lism-blocks')}
							onChange={(value) => {
								setAttributes({ iconLabel: value });
							}}
							value={iconLabel || ''}
							help={__('The aria-label of the icon.', 'lism-blocks')}
						/>
					</PanelBody>
				</InspectorControls>
				{!iconSlug ? (
					<div {...blockProps}>
						<Placeholder icon={icon} label={__('Icon', 'lism-blocks')}>
							<Button variant='primary' onClick={() => setIsIconPickerOpen(true)}>
								{__('Select icon', 'lism-blocks')}
							</Button>
							{isIconPickerOpen && (
								<IconPickerModal
									onChange={(value) => setAttributes({ iconSlug: value })}
									onClose={() => setIsIconPickerOpen(false)}
								/>
							)}
						</Placeholder>
					</div>
				) : (
					<div {...blockProps}>
						<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
						Icon Block
					</div>
				)}
			</>
		);
	},
});