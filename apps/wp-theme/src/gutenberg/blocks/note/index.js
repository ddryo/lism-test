/**
 * @External dependencies
 */
import { Note } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	RichText,
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
} from '@wordpress/block-editor';
import { SelectControl, PanelBody } from '@wordpress/components';
import { warning as icon } from '@wordpress/icons';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import { SelectorPreviewTip, FlowControl } from '@/gutenberg/components';
import { ALERT_PRESETS, LISM_ICON_PRESETS } from '@/gutenberg/constants';

registerBlockType(metadata.name, {
	title: __('Note', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes, clientId }) => {
		const { heading, keyColor, iconSlug, flowGap, anchor, className } = attributes;

		const currentPreset = ALERT_PRESETS.find(
			({ icon, color }) => icon === iconSlug && color === keyColor
		);

		const presets = currentPreset
			? LISM_ICON_PRESETS.map(({ value }) => {
					return {
						label: value,
						value,
					};
			  })
			: [
					{
						label: __('Select preset...', 'lism-blocks'),
						value: 'default',
					},
					...LISM_ICON_PRESETS.map(({ value }) => {
						return {
							label: value,
							value,
						};
					}),
			  ];

		function onChangePreset(value) {
			const preset = ALERT_PRESETS.find(({ value: _value }) => _value === value);
			if (preset) {
				const iconPreset = LISM_ICON_PRESETS.find(
					({ value: _value }) => _value === preset.icon
				);
				setAttributes({
					keyColor: preset.color,
					iconLabel: preset.label,
					iconSlug: iconPreset ? iconPreset.value : undefined,
				});
			} else {
				setAttributes({
					keyColor: undefined,
					iconLabel: undefined,
					iconSlug: undefined,
				});
			}
		}

		const blockProps = useBlockProps({
			isFlow: flowGap !== undefined ? flowGap : undefined,
			keycolor: keyColor,
			icon: iconSlug,
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph']],
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		const colorGradientSettings = useMultipleOriginColorsAndGradients();

		return (
			<>
				<InspectorControls group='color'>
					<ColorGradientSettingsDropdown
						__experimentalIsRenderedInSidebar
						settings={[
							{
								colorValue: keyColor,
								label: __('Key color', 'lism-blocks'),
								onColorChange: (value) => setAttributes({ keyColor: value }),
								isShownByDefault: true,
								resetAllFilter: () => ({}),
								enableAlpha: true,
							},
						]}
						panelId={clientId}
						{...colorGradientSettings}
					/>
				</InspectorControls>
				<InspectorControls>
					<PanelBody title={__('Layout', 'lism-blocks')}>
						<FlowControl
							value={flowGap}
							onChange={(value) => {
								setAttributes({ flowGap: value });
							}}
						/>
					</PanelBody>
					<PanelBody title={__('Settings')}>
						<SelectControl
							label={__('Preset', 'lism-blocks')}
							options={presets}
							onChange={onChangePreset}
							value={currentPreset ? currentPreset.value : 'default'}
						/>
						<SelectControl
							label={__('Icon', 'lism-blocks')}
							options={[
								{
									label: __('None', 'lism-blocks'),
									value: 'none',
								},
								...LISM_ICON_PRESETS.map(({ value }) => {
									return {
										label: value,
										value,
									};
								}),
							]}
							onChange={(value) => {
								setAttributes({
									iconSlug: value !== 'none' ? value : undefined,
								});
							}}
							value={iconSlug}
						/>
					</PanelBody>
				</InspectorControls>
				<Note
					{...innerProps}
					forwardedRef={ref}
					heading={
						<RichText
							placeholder={__('Add heading text...', 'lism-blocks')}
							value={heading}
							onChange={(newTerm) => {
								setAttributes({ heading: newTerm });
							}}
						/>
					}
				>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</Note>
			</>
		);
	},

	save: ({ attributes }) => {
		const { heading, keyColor, iconSlug, flowGap } = attributes;
		const blockProps = useBlockProps.save({
			isFlow: flowGap !== undefined ? flowGap : undefined,
			keycolor: keyColor,
			icon: iconSlug,
		});

		return (
			<Note {...blockProps} heading={<RichText.Content value={heading} />}>
				<InnerBlocks.Content />
			</Note>
		);
	},
});
