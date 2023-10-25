/**
 * @External dependencies
 */
import { Box } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock, registerBlockType } from '@wordpress/blocks';
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
	SelectorPreviewTip,
	FlowControl,
	ResponsiveSpacingControl,
	HTMLElementControls,
} from '@/gutenberg/components';

/**
 * Box
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
				<InspectorControls group='styles'>
					<PanelBody title={__('Layout', 'lism-blocks')}>
						<FlowControl
							value={flowGap}
							onChange={(value) => {
								setAttributes({ flowGap: value });
							}}
						/>
					</PanelBody>
					<PanelBody title={__('Spacing', 'lism-blocks')}>
						<ResponsiveSpacingControl label={__('Padding', 'lism-blocks')} />
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
				<Box {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
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
