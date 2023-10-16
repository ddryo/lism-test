/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock, registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
// import { useEffect } from '@wordpress/element';
// import { PanelBody, BaseControl, ToggleControl, SelectControl } from '@wordpress/components';
import { useInnerBlocksProps } from '@/gutenberg/compatible';
// import { Box } from '@lism/core/components/Box';
import { Box } from '@lism/core';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
// import deprecated from './deprecated';
// import TheControls from './controls';
import LsSelectorPreviewTip from '@/gutenberg/components/LsSelectorPreviewTip';

/**
 * @Others dependencies
 */
import classnames from 'classnames';

/**
 * コンテナ
 */
registerBlockType(metadata.name, {
	title: __('Box', 'lism-blocks'),
	icon: icon.container,
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
			className: classnames('has--guide'),
		});

		// paragraphブロックを初期配置
		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph']],
			templateLock,
			// __experimentalLayout: layout,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		console.log('innerProps!!', innerProps);
		return (
			<>
				{/* <TheControls {...{ clientId, attributes, setAttributes }} /> */}
				<Box
					// </>{...customProps}
					{...innerProps}
					forwardedRef={ref}
				>
					<LsSelectorPreviewTip
						icon={icon.container}
						anchor={attributes.anchor}
						className={attributes.className}
					/>
					{children}
				</Box>
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
			<Box {...blockProps}>
				<InnerBlocks.Content />
			</Box>
		);
	},
	// deprecated,
});
