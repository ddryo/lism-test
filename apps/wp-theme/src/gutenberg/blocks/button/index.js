/**
 * @External dependencies
 */
import { Button as LismButton } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useState, useRef } from '@wordpress/element';
import {
	BlockControls,
	RichText,
	InspectorControls,
	useBlockProps,
	__experimentalLinkControl as LinkControl,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
} from '@wordpress/block-editor';
import {
	BaseControl,
	PanelBody,
	Popover,
	SelectControl,
	ToggleControl,
	ToolbarButton,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';
import { link, linkOff } from '@wordpress/icons';

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

const HOVER_STYLE_OPTIONS = [
	{
		label: __('Default', 'lism-blocks'),
		value: 'default',
	},
	{
		label: __('Reverse', 'lism-blocks'),
		value: 'reverse',
	},
	{
		label: __('Dark', 'lism-blocks'),
		value: 'dark',
	},
	{
		label: __('Shadow', 'lism-blocks'),
		value: 'shadow',
	},
	{
		label: __('Up', 'lism-blocks'),
		value: 'up',
	},
	{
		label: __('Scale', 'lism-blocks'),
		value: 'scale',
	},
];

const LINK_SETTINGS = [
	...LinkControl.DEFAULT_LINK_SETTINGS,
	{
		id: 'nofollow',
		title: __('Mark as nofollow'),
	},
];

function getAnchorAttributes({ url, opensInNewTab, nofollow }) {
	if (!url) {
		return {
			href: undefined,
			linkTarget: undefined,
			rel: undefined,
		};
	}

	const linkTarget = opensInNewTab ? '_blank' : undefined;

	let rel = undefined;
	if (opensInNewTab && nofollow) {
		rel = 'nofollow noreferrer noopener';
	} else if (nofollow) {
		rel = 'nofollow';
	} else if (opensInNewTab) {
		rel = 'noreferrer noopener';
	}

	return {
		url,
		linkTarget,
		rel,
	};
}

registerBlockType(metadata.name, {
	title: __('Button', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes, isSelected, clientId }) => {
		const {
			text,
			keyColor,
			width,
			variant,
			isIconOnly,
			leftIconSlug,
			rightIconSlug,
			iconSlug,
			iconOffset,
			isGrid,
			hoverStyle,
			url,
			linkTarget,
			rel,
			anchor,
			className,
		} = attributes;

		const [isEditingURL, setIsEditingURL] = useState(false);
		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });
		const colorGradientSettings = useMultipleOriginColorsAndGradients();
		const richTextRef = useRef();
		const nofollow = rel && rel.includes('nofollow');

		const blockProps = useBlockProps();
		const componentProps = {
			keycolor: keyColor,
			w: width,
			variant,
			leftIcon:
				!isIconOnly && leftIconSlug ? <InternalIcon icon={leftIconSlug} /> : undefined,
			rightIcon:
				!isIconOnly && rightIconSlug ? <InternalIcon icon={rightIconSlug} /> : undefined,
			icon: isIconOnly && iconSlug ? <InternalIcon icon={iconSlug} /> : undefined,
			iconOffset,
			isGrid,
			hover: hoverStyle,
		};

		return (
			<>
				<BlockControls group='block'>
					<ToolbarButton
						name='link'
						icon={url ? linkOff : link}
						title={url ? __('Unlink') : __('Link')}
						isActive={!!url}
						onClick={() => {
							if (url) {
								setAttributes({
									url: undefined,
									linkTarget: undefined,
									rel: undefined,
								});
								setIsEditingURL(false);
							} else {
								setIsEditingURL(true);
							}
						}}
					/>
				</BlockControls>
				{isSelected && (isEditingURL || !!url) && (
					<Popover
						placement='bottom'
						anchor={richTextRef.current}
						onClose={() => {
							setIsEditingURL(false);
						}}
						focusOnMount='firstElement'
					>
						<LinkControl
							value={{ url, opensInNewTab: linkTarget === '_blank', nofollow }}
							onChange={({
								url: newURL,
								opensInNewTab: newOpensInNewTab,
								nofollow: newNofollow,
							}) => {
								setAttributes(
									getAnchorAttributes({
										url: newURL,
										opensInNewTab: newOpensInNewTab,
										nofollow: newNofollow,
									})
								);
							}}
							onRemove={() => {
								setAttributes({
									url: undefined,
									linkTarget: undefined,
									rel: undefined,
								});
								setIsEditingURL(false);
								richTextRef.current?.focus();
							}}
							forceIsEditingLink={isEditingURL}
							settings={LINK_SETTINGS}
						/>
					</Popover>
				)}
				<InspectorControls>
					<PanelBody title={__('Setting', 'lism-blocks')}>
						<UnitControl
							size={'__unstable-large'}
							label={__('Button width', 'lism-blocks')}
							value={width}
							onChange={(value) => {
								setAttributes({ width: value });
							}}
							units={units}
							min={0}
						/>
						<ToggleGroupControl
							label={__('Variation', 'lism-blocks')}
							onChange={(nextVariant) => {
								setAttributes({
									variant: nextVariant !== 'default' ? nextVariant : undefined,
								});
							}}
							isBlock
							value={variant || 'default'}
						>
							{VARIANT_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
						<ToggleControl
							label={__('Icon only', 'lism-blocks')}
							checked={!!isIconOnly}
							onChange={(value) => {
								setAttributes({ isIconOnly: value });
							}}
						/>
						{isIconOnly ? (
							<BaseControl label={__('Icon', 'lism-blocks')}>
								<IconPicker
									value={iconSlug}
									onChange={(value) => {
										setAttributes({ iconSlug: value || undefined });
									}}
								/>
							</BaseControl>
						) : (
							<>
								<BaseControl label={__('Icon on the left', 'lism-blocks')}>
									<IconPicker
										value={leftIconSlug}
										onChange={(value) => {
											setAttributes({ leftIconSlug: value || undefined });
										}}
									/>
								</BaseControl>
								<BaseControl label={__('Icon on the right', 'lism-blocks')}>
									<IconPicker
										value={rightIconSlug}
										onChange={(value) => {
											setAttributes({ rightIconSlug: value || undefined });
										}}
									/>
								</BaseControl>
							</>
						)}
						<UnitControl
							size={'__unstable-large'}
							label={__('Icon offset', 'lism-blocks')}
							units={units}
							min={0}
							value={iconOffset}
							onChange={(value) => {
								setAttributes({ iconOffset: value || undefined });
							}}
						/>
						<ToggleControl
							label={__('Use grid layout', 'lism-blocks')}
							checked={!!isGrid}
							onChange={(value) => {
								setAttributes({ isGrid: value });
							}}
						/>
						<SelectControl
							label={__('Hover style', 'lism-blocks')}
							options={HOVER_STYLE_OPTIONS.map(({ value }) => {
								return {
									label: value,
									value,
								};
							})}
							onChange={(value) => {
								setAttributes({
									hoverStyle: value !== 'default' ? value : undefined,
								});
							}}
						/>
					</PanelBody>
				</InspectorControls>
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
				<div {...blockProps}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					<LismButton {...componentProps}>
						{!isIconOnly && (
							<RichText
								ref={richTextRef}
								placeholder={__('Add text...', 'lism-blocks')}
								value={text}
								withoutInteractiveFormatting
								onChange={(value) => {
									setAttributes({ text: value });
								}}
							/>
						)}
					</LismButton>
				</div>
			</>
		);
	},
	save: ({ attributes }) => {
		const {
			text,
			keyColor,
			width,
			variant,
			isIconOnly,
			leftIconSlug,
			rightIconSlug,
			iconSlug,
			iconOffset,
			isGrid,
			hoverStyle,
			url,
			linkTarget,
			rel,
		} = attributes;
		const blockProps = useBlockProps.save();
		const componentProps = {
			keycolor: keyColor,
			w: width,
			variant,
			leftIcon:
				!isIconOnly && leftIconSlug ? <InternalIcon icon={leftIconSlug} /> : undefined,
			rightIcon:
				!isIconOnly && rightIconSlug ? <InternalIcon icon={rightIconSlug} /> : undefined,
			icon: isIconOnly && iconSlug ? <InternalIcon icon={iconSlug} /> : undefined,
			iconOffset,
			isGrid,
			hover: hoverStyle,
			href: url,
			target: linkTarget,
			rel,
		};

		return (
			<div {...blockProps}>
				<LismButton {...componentProps}>
					<RichText.Content value={text} />
				</LismButton>
			</div>
		);
	},
});
