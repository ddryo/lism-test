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
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import {
	PanelBody,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import { SelectorPreviewTip } from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Term List', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes, clientId }) => {
		const { templateLock, fixedWidth, fluidMinWidth, anchor, className } = attributes;

		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });

		const hasFluidChildBlock = useSelect(
			(select) => {
				const { getBlocks } = select(blockEditorStore);
				const innerBlocks = getBlocks(clientId);
				return innerBlocks.some(({ attributes }) => attributes.isFluidMode);
			},
			[clientId]
		);

		const blockProps = useBlockProps({
			fixW: fixedWidth,
			fluidMinW: fluidMinWidth,
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
						<>
							<UnitControl
								size={'__unstable-large'}
								label={__('All Description Term width', 'lism-blocks')}
								units={units}
								min={0}
								value={fixedWidth}
								onChange={(value) => {
									setAttributes({ fixedWidth: value || undefined });
								}}
								disabled={!hasFluidChildBlock}
							/>
							<UnitControl
								size={'__unstable-large'}
								label={__('All Description Details min width', 'lism-blocks')}
								units={units}
								min={0}
								value={fluidMinWidth}
								onChange={(value) => {
									setAttributes({ fluidMinWidth: value || undefined });
								}}
								disabled={!hasFluidChildBlock}
								help={
									!hasFluidChildBlock &&
									__(
										'To change this setting, you must have at least one Term List Row block with Fluid mode enabled.',
										'lism-blocks'
									)
								}
							/>
						</>
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
		const { fixedWidth, fluidMinWidth } = attributes;

		const blockProps = useBlockProps.save({
			fixW: fixedWidth,
			fluidMinW: fluidMinWidth,
		});

		return (
			<TermList {...blockProps}>
				<InnerBlocks.Content />
			</TermList>
		);
	},
});
