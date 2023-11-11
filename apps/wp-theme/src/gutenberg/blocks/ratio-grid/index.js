/**
 * @External dependencies
 */
import { RatioGrid } from '@loos/lism-core';

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
import { PanelBody } from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import {
	AlignItemsControl,
	JustifyItemsControl,
	SelectorPreviewTip,
	ResponsiveRatioControl,
} from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Ratio Grid', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const { templateLock, ratio, alignItems, justifyItems, anchor, className } = attributes;

		const blockProps = useBlockProps({
			ratio,
			ai: alignItems,
			ji: justifyItems,
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph']],
			templateLock,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<InspectorControls group='styles'>
					<PanelBody title={__('Layout', 'lism-blocks')}>
						<JustifyItemsControl
							value={justifyItems}
							controls={['flex-start', 'center', 'flex-end', 'stretch']}
							onChange={(value) => {
								setAttributes({ ...attributes, justifyItems: value });
							}}
						/>
						<AlignItemsControl
							value={alignItems}
							controls={['flex-start', 'center', 'flex-end', 'stretch']}
							onChange={(value) => {
								setAttributes({ ...attributes, alignItems: value });
							}}
						/>
						<ResponsiveRatioControl
							value={ratio}
							onChange={(value) => {
								setAttributes({ ratio: value });
							}}
						/>
					</PanelBody>
				</InspectorControls>
				<RatioGrid {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</RatioGrid>
			</>
		);
	},

	save: ({ attributes }) => {
		const { ratio, alignItems, justifyItems } = attributes;

		const blockProps = useBlockProps.save({
			ratio,
			ai: alignItems,
			ji: justifyItems,
		});

		return (
			<RatioGrid {...blockProps}>
				<InnerBlocks.Content />
			</RatioGrid>
		);
	},
});
