/**
 * @External dependencies
 */
import { Icon as LismIcon } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	BaseControl,
	PanelBody,
	Placeholder,
	RangeControl,
	TextControl,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import { SelectorPreviewTip, IconPicker, Icon as InternalIcon } from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Icon', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const { size, scale, label, slug, anchor, className } = attributes;
		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem'] });
		const blockProps = useBlockProps();
		const componentProps = {
			size,
			scale,
			label,
		};

		return (
			<>
				{slug && (
					<InspectorControls>
						<PanelBody title={__('Setting', 'lism-blocks')}>
							<BaseControl label={__('Select icon', 'lism-blocks')}>
								<IconPicker
									value={slug}
									onChange={(value) => setAttributes({ slug: value })}
								/>
							</BaseControl>
							<UnitControl
								size={'__unstable-large'}
								label={__('Icon size', 'lism-blocks')}
								value={size}
								onChange={(value) => {
									setAttributes({ size: value });
								}}
								units={units}
								min={0}
							/>
							<RangeControl
								label={__('Scale', 'lism-blocks')}
								value={scale || 1}
								min={1}
								max={3}
								step={0.1}
								onChange={(value) => {
									setAttributes({ scale: value !== 1 ? value : undefined });
								}}
								allowReset
							/>
							<TextControl
								label={__('Icon label', 'lism-blocks')}
								onChange={(value) => {
									setAttributes({ label: value });
								}}
								value={label || ''}
								help={__('The aria-label of the icon.', 'lism-blocks')}
							/>
						</PanelBody>
					</InspectorControls>
				)}
				{!slug ? (
					<div {...blockProps}>
						<Placeholder icon={icon} label={__('Icon', 'lism-blocks')}>
							<IconPicker
								onChange={(value) => setAttributes({ slug: value })}
								clearable={false}
								position='center'
							/>
						</Placeholder>
					</div>
				) : (
					<div {...blockProps}>
						<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
						<LismIcon {...componentProps}>
							<InternalIcon icon={slug} />
						</LismIcon>
					</div>
				)}
			</>
		);
	},
	save: ({ attributes }) => {
		const { size, scale, label, slug } = attributes;
		const blockProps = useBlockProps.save();
		const componentProps = {
			size,
			scale,
			label,
		};

		if (!slug) return null;

		return (
			<div {...blockProps}>
				<LismIcon {...componentProps}>
					<InternalIcon icon={slug} />
				</LismIcon>
			</div>
		);
	},
});
