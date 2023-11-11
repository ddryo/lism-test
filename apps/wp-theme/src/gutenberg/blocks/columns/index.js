/**
 * @External dependencies
 */
import { Columns } from '@loos/lism-core';

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
	ResponsiveColumnsControl,
} from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Columns', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const { templateLock, columns, alignItems, justifyItems, anchor, className } = attributes;

		const blockProps = useBlockProps({
			cols: columns,
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
						<ResponsiveColumnsControl />
					</PanelBody>
				</InspectorControls>
				<Columns {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</Columns>
			</>
		);
	},

	save: ({ attributes }) => {
		const { columns, alignItems, justifyItems } = attributes;

		const blockProps = useBlockProps.save({
			cols: columns,
			ai: alignItems,
			ji: justifyItems,
		});

		return (
			<Columns {...blockProps}>
				<InnerBlocks.Content />
			</Columns>
		);
	},
});
