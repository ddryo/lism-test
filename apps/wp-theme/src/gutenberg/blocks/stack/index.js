/**
 * @External dependencies
 */
import { Flex } from '@loos/lism-core';

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
	AlignItemsControl,
	ResponsiveGapControl,
	HTMLElementControls,
} from '@/gutenberg/components';

/**
 * Box
 */
registerBlockType(metadata.name, {
	title: __('Stack', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
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
		const { templateLock, tagName = 'div', gap, alignItems, anchor, className } = attributes;

		const lismProps = {
			direction: 'column',
			ai: alignItems,
			gap: '16px',
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
						<AlignItemsControl
							value={alignItems}
							controls={['flex-start', 'center', 'flex-end']}
							onChange={(value) => {
								setAttributes({ ...attributes, alignItems: value });
							}}
						/>
					</PanelBody>
					<PanelBody title={__('Spacing', 'lism-blocks')}>
						<ResponsiveGapControl label={__('Gap', 'lism-blocks')} />
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
				<Flex {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</Flex>
			</>
		);
	},

	save: ({ attributes }) => {
		const { tagName = 'div', gap, alignItems } = attributes;

		const lismProps = {
			direction: 'column',
			ai: alignItems,
			gap: '16px',
		};

		const blockProps = useBlockProps.save({
			...lismProps,
			tag: tagName,
		});

		return (
			<Flex {...blockProps}>
				<InnerBlocks.Content />
			</Flex>
		);
	},
});
