/**
 * @External dependencies
 */
import { Columns } from '@loos/lism-core';
import classnames from 'classnames';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock, registerBlockType } from '@wordpress/blocks';
import {
	AlignmentControl,
	BlockControls,
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
	ResponsiveGapControl,
	HTMLElementControls,
} from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Columns', 'lism-blocks'),
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
		const {
			templateLock,
			tagName,
			gap,
			textAlign,
			columns,
			alignItems,
			justifyItems,
			anchor,
			className,
		} = attributes;

		const lismProps = {
			cols: columns,
			ai: alignItems,
			ji: justifyItems,
			gap: '16px',
		};

		const blockProps = useBlockProps({
			...lismProps,
			tag: tagName,
			className: classnames({
				[`has-text-align-${textAlign}`]: textAlign,
			}),
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph']],
			templateLock,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<BlockControls group='block'>
					<AlignmentControl
						value={textAlign}
						onChange={(value) => {
							setAttributes({ textAlign: value });
						}}
					/>
				</BlockControls>
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
					<PanelBody title={__('Spacing', 'lism-blocks')}>
						<ResponsiveGapControl />
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
				<Columns {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</Columns>
			</>
		);
	},

	save: ({ attributes }) => {
		const { tagName, gap, textAlign, columns, alignItems, justifyItems } = attributes;
		const lismProps = {
			cols: columns,
			ai: alignItems,
			ji: justifyItems,
			gap: '16px',
		};

		const blockProps = useBlockProps.save({
			...lismProps,
			tag: tagName,
			className: classnames({
				[`has-text-align-${textAlign}`]: textAlign,
			}),
		});

		return (
			<Columns {...blockProps}>
				<InnerBlocks.Content />
			</Columns>
		);
	},
});
