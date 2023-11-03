/**
 * @External dependencies
 */
import { FluidFix } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock, registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	PanelBody,
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
import {
	SelectorPreviewTip,
	ResponsiveGapControl,
	HTMLElementControls,
} from '@/gutenberg/components';

const FIX_OPTIONS = [
	{
		label: __('First', 'lism-blocks'),
		value: 'first',
	},
	{
		label: __('Last', 'lism-blocks'),
		value: 'last',
	},
];

registerBlockType(metadata.name, {
	title: __('Fluid Fix', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['core/group'],
				transform: (attributes, content) => {
					const newAttrs = {
						tagName: attributes.tagName,
					};
					return createBlock(metadata.name, newAttrs, content);
				},
			},
		],
	},
	edit: ({ attributes, setAttributes, clientId }) => {
		const {
			templateLock,
			tagName,
			gap,
			fix,
			fixedWidth,
			fluidMinWidth,
			anchor,
			className,
		} = attributes;

		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });

		const innerBlocksLength = useSelect(
			(select) => select(blockEditorStore).getBlocks(clientId).length,
			[clientId]
		);

		const lismProps = {
			fix,
			fixW: fixedWidth,
			fluidMinW: fluidMinWidth,
			gap: '16px',
		};

		const blockProps = useBlockProps({
			...lismProps,
			tag: tagName,
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph'], ['core/paragraph']],
			templateLock,
			renderAppender: innerBlocksLength < 2 ? InnerBlocks.ButtonBlockAppender : false,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<InspectorControls group='styles'>
					<PanelBody title={__('Layout', 'lism-blocks')}>
						<ToggleGroupControl
							__nextHasNoMarginBottom
							label={__('Fixed element', 'lism-blocks')}
							onChange={(nextFix) => {
								setAttributes({ fix: nextFix });
							}}
							isBlock
							value={fix}
						>
							{FIX_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
						<UnitControl
							size={'__unstable-large'}
							__nextHasNoMarginBottom
							label={__('Fixed element min width', 'lism-blocks')}
							units={units}
							min={0}
							value={fixedWidth}
							onChange={(value) => {
								setAttributes({ ...attributes, fixedWidth: value || undefined });
							}}
						/>
						<UnitControl
							size={'__unstable-large'}
							__nextHasNoMarginBottom
							label={__('Fluid element min width', 'lism-blocks')}
							units={units}
							min={0}
							value={fluidMinWidth}
							onChange={(value) => {
								setAttributes({ ...attributes, fluidMinWidth: value || undefined });
							}}
						/>
					</PanelBody>
					<PanelBody title={__('Spacing', 'lism-blocks')}>
						<ResponsiveGapControl label={__('Gap', 'lism-blocks')} />
					</PanelBody>
				</InspectorControls>
				<InspectorControls group='advanced'>
					<HTMLElementControls
						tagName={tagName}
						onChange={(value) => {
							setAttributes({ tagName: value });
						}}
					/>
				</InspectorControls>
				<FluidFix {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</FluidFix>
			</>
		);
	},

	save: ({ attributes }) => {
		const { tagName, gap, fix, fixedWidth, fluidMinWidth } = attributes;

		const lismProps = {
			fix,
			fixW: fixedWidth,
			fluidMinW: fluidMinWidth,
			gap: '16px',
		};

		const blockProps = useBlockProps.save({
			...lismProps,
			tag: tagName,
		});

		return (
			<FluidFix {...blockProps}>
				<InnerBlocks.Content />
			</FluidFix>
		);
	},
});
