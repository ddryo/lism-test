/**
 * @External dependencies
 */
import { FluidFix } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
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
import { SelectorPreviewTip } from '@/gutenberg/components';

const FIXED_ELEMENT_OPTIONS = [
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
	edit: ({ attributes, setAttributes, clientId }) => {
		const { templateLock, fixedElement, fixedWidth, fluidMinWidth, anchor, className } =
			attributes;

		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });

		const innerBlocksLength = useSelect(
			(select) => select(blockEditorStore).getBlocks(clientId).length,
			[clientId]
		);

		const blockProps = useBlockProps({
			fix: fixedElement,
			fixW: fixedWidth,
			fluidMinW: fluidMinWidth,
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
							label={__('Fixed element', 'lism-blocks')}
							onChange={(nextFixedElement) => {
								setAttributes({ fixedElement: nextFixedElement });
							}}
							isBlock
							value={fixedElement}
						>
							{FIXED_ELEMENT_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
						<UnitControl
							size={'__unstable-large'}
							label={__('Fixed element min width', 'lism-blocks')}
							units={units}
							min={0}
							value={fixedWidth}
							onChange={(value) => {
								setAttributes({ fixedWidth: value || undefined });
							}}
						/>
						<UnitControl
							size={'__unstable-large'}
							label={__('Fluid element min width', 'lism-blocks')}
							units={units}
							min={0}
							value={fluidMinWidth}
							onChange={(value) => {
								setAttributes({ fluidMinWidth: value || undefined });
							}}
						/>
					</PanelBody>
				</InspectorControls>
				<FluidFix {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</FluidFix>
			</>
		);
	},

	save: ({ attributes }) => {
		const { fixedElement, fixedWidth, fluidMinWidth } = attributes;

		const blockProps = useBlockProps.save({
			fix: fixedElement,
			fixW: fixedWidth,
			fluidMinW: fluidMinWidth,
		});

		return (
			<FluidFix {...blockProps}>
				<InnerBlocks.Content />
			</FluidFix>
		);
	},
});
