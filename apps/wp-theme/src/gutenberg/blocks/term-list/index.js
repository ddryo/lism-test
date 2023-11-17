/**
 * @External dependencies
 */
import { TermList } from '@loos/lism-core';

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
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import { SelectorPreviewTip, FlowControl } from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Term List', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const { templateLock, flowGap, isFluidMode, fixedWidth, fluidMinWidth, anchor, className } =
			attributes;

		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });

		const blockProps = useBlockProps({
			isFlow: flowGap !== undefined ? flowGap : undefined,
			mode: isFluidMode ? 'fluid' : undefined,
			fixW: isFluidMode ? fixedWidth : undefined,
			fluidMinW: isFluidMode ? fluidMinWidth : undefined,
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['lism-blocks/term-list-row']],
			templateLock,
			allowedBlocks: ['lism-blocks/term-list-row'],
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<InspectorControls group='styles'>
					<PanelBody title={__('Layout', 'lism-blocks')}>
						<FlowControl
							value={flowGap}
							onChange={(value) => {
								setAttributes({ flowGap: value });
							}}
						/>
						<ToggleControl
							label={__('Enable fluid mode', 'lism-blocks')}
							checked={!!isFluidMode}
							onChange={(value) => {
								setAttributes({ isFluidMode: value });
							}}
						/>
						{isFluidMode && (
							<>
								<UnitControl
									size={'__unstable-large'}
									label={__('Description Term width', 'lism-blocks')}
									units={units}
									min={0}
									value={fixedWidth}
									onChange={(value) => {
										setAttributes({ fixedWidth: value || undefined });
									}}
								/>
								<UnitControl
									size={'__unstable-large'}
									label={__('Description Details min width', 'lism-blocks')}
									units={units}
									min={0}
									value={fixedWidth}
									onChange={(value) => {
										setAttributes({ fixedWidth: value || undefined });
									}}
								/>
							</>
						)}
					</PanelBody>
				</InspectorControls>
				<TermList {...innerProps} forwardedRef={ref}>
					{/* <SelectorPreviewTip icon={icon} anchor={anchor} className={className} /> */}
					{children}
				</TermList>
			</>
		);
	},
	save: ({ attributes }) => {
		const { flowGap, isFluidMode, fixedWidth, fluidMinWidth } = attributes;

		const blockProps = useBlockProps.save({
			isFlow: flowGap !== undefined ? flowGap : undefined,
			mode: isFluidMode ? 'fluid' : undefined,
			fixW: isFluidMode ? fixedWidth : undefined,
			fluidMinW: isFluidMode ? fluidMinWidth : undefined,
		});

		return (
			<TermList {...blockProps}>
				<InnerBlocks.Content />
			</TermList>
		);
	},
});
