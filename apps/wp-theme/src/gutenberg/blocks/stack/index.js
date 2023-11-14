/**
 * @External dependencies
 */
import { Stack } from '@loos/lism-core';

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
import { SelectorPreviewTip, AlignItemsControl } from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Stack', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const { templateLock, alignItems, anchor, className } = attributes;

		const blockProps = useBlockProps({
			ai: alignItems,
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
						<AlignItemsControl
							value={alignItems}
							controls={['flex-start', 'center', 'flex-end', 'stretch']}
							onChange={(value) => {
								setAttributes({ alignItems: value });
							}}
						/>
					</PanelBody>
				</InspectorControls>
				<Stack {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</Stack>
			</>
		);
	},

	save: ({ attributes }) => {
		const { alignItems } = attributes;

		const blockProps = useBlockProps.save({
			ai: alignItems,
		});

		return (
			<Stack {...blockProps}>
				<InnerBlocks.Content />
			</Stack>
		);
	},
});
