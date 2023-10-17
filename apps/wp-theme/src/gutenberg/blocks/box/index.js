/**
 * @External dependencies
 */
import { Box } from '@lism/core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock, registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useInnerBlocksProps } from '@/gutenberg/compatible';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import SelectorPreviewTip from '@/gutenberg/components/SelectorPreviewTip';
import FlowControl from '@/gutenberg/components/FlowControl';
import HTMLElementInspectorControls from '@/gutenberg/components/HTMLElementInspectorControls';

/**
 * コンテナ
 */
registerBlockType(metadata.name, {
	title: __('Box', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon: icon,
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
	edit: ({ attributes, setAttributes }) => {
		const { templateLock, tagName = 'div', flowGap, anchor, className } = attributes;

		const onChangeFlowGap = (value) => {
			setAttributes({ flowGap: value });
		}

		const lismProps = {
			isFlow: flowGap !== undefined ? flowGap : undefined,
		};

		const blockProps = useBlockProps({
			...lismProps,
			tag: tagName,
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph']],
			templateLock,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<HTMLElementInspectorControls
					tagName={ tagName }
					onChange={ ( value ) => {
						setAttributes( { tagName: value } )
					} }
				/>
				<FlowControl value={flowGap} onChange={onChangeFlowGap}/>
				<Box
					{...innerProps}
					forwardedRef={ref}
				>
					<SelectorPreviewTip
						icon={icon}
						anchor={anchor}
						className={className}
					/>
					{children}
				</Box>
			</>
		);
	},

	save: ({ attributes }) => {
		const { tagName = 'div' } = attributes;

		const blockProps = useBlockProps.save({
			className: '',
			tag: tagName,
		});

		return (
			<Box {...blockProps}>
				<InnerBlocks.Content />
			</Box>
		);
	},
});
