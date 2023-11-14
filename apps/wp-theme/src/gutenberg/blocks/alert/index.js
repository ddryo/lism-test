/**
 * @External dependencies
 */
import { Alert } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
} from '@wordpress/block-editor';
import {
	SelectControl,
	PanelBody,
	TextControl,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';
import { warning as icon } from '@wordpress/icons';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import { SelectorPreviewTip, FlowControl } from '@/gutenberg/components';
import { ALERT_PRESETS, ICON_PRESETS } from '@/gutenberg/constants';

registerBlockType(metadata.name, {
	title: __('Alert', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes, clientId }) => {
		const { keyColor, iconSize, iconLabel, iconSlug, flowGap, anchor, className } = attributes;
		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem'] });

		function onChangePreset(value) {
			const preset = ALERT_PRESETS.find(({value: _value}) => _value === value);
			if ( preset ) {
				const iconPreset = ICON_PRESETS.find(({value: _value}) => _value === preset.icon);
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
			iconSize,
			iconLabel,
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
							options={[
								{
									label: __('Default', 'lism-blocks'),
									value: 'default',
								},
								...ALERT_PRESETS.map(({value}) => {
									return {
										label: value,
										value
									};
								})
							]}
							onChange={onChangePreset}
						/>
						<SelectControl
							label={__('Icon', 'lism-blocks')}
							options={[
								{
									label: __('Default', 'lism-blocks'),
									value: 'default',
								},
								...ICON_PRESETS.map(({value}) => {
									return {
										label: value,
										value
									};
								})
							]}
							onChange={(value) => {
								setAttributes({ iconSlug: value !== 'default' ? value : undefined });
							}}
						/>
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
				<Alert {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</Alert>
			</>
		);
	},

	save: ({ attributes }) => {
		const { keyColor, iconSize, iconLabel, iconSlug, flowGap } = attributes;

		const blockProps = useBlockProps.save({
			isFlow: flowGap !== undefined ? flowGap : undefined,
			keycolor: keyColor,
			iconSize,
			iconLabel,
			icon: iconSlug,
		});

		return (
			<Alert {...blockProps}>
				<InnerBlocks.Content />
			</Alert>
		);
	},
});
