/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock, registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
// import { useEffect } from '@wordpress/element';
// import { PanelBody, BaseControl, ToggleControl, SelectControl } from '@wordpress/components';
// import { useInnerBlocksProps } from '@/gutenberg/compatible';
// import { Box } from '@lism/core/components/Box';
// import { Core } from '@lism/core';
// import { Core } from '../Core';

// function Box({ lismClass = {}, variant, ...props }) {
// 	lismClass.l = 'l--box';
// 	if (variant) lismClass.l += ` l--box--${variant}`;
// 	return <Core lismClass={lismClass} {...props} />;
// }
import Box from './Box';

/**
 * コンテナ
 */
import metadata from './block.json';
registerBlockType(metadata.name, {
	title: __('Box', 'lism-blocks'),
	// icon: icon.container,
	// variations,
	transforms: {
		from: [
			//どのブロックタイプから変更できるようにするか
			{
				type: 'block',
				blocks: ['core/group'],
				transform: (attributes, content) => {
					// console.log('attributes', attributes);
					const newInnerBlocks = content;
					const newAttrs = {
						tagName: attributes.tagName,
					};
					return createBlock(metadata.name, newAttrs, newInnerBlocks);
				},
			},
		],
	},
	edit: ({ clientId, attributes, setAttributes }) => {
		const { templateLock, tagName } = attributes;

		const blockProps = useBlockProps({
			// className: classnames('has--guide'),
		});

		// paragraphブロックを初期配置
		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph']],
			templateLock,
			// __experimentalLayout: layout,
		});

		const { children, ...innerProps } = innerBlocksProps;

		return (
			<>
				<Box {...innerProps}>{children}</Box>
			</>
		);
	},

	save: ({ attributes }) => {
		const { tagName: TagName = 'div' } = attributes;

		// 以下、innerなし
		const blockProps = useBlockProps.save({
			className: '',
		});

		return (
			<div {...blockProps}>
				<InnerBlocks.Content />
			</div>
		);
	},
	// deprecated,
});
