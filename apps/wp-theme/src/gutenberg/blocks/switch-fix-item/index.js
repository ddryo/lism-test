/**
 * @External dependencies
 */
import { Item } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import { SelectorPreviewTip } from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Switch Fix Item', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	variations: [
		{
			name: 'fixed',
			title: __('Switch Fix Item (Fixed)', 'lism-blocks'),
			attributes: { isFixed: true },
			isActive: (blockAttributes) => {
				return blockAttributes.isFixed;
			},
			scope: [ 'block' ],
		},
	],
	edit: ({ attributes }) => {
		const { templateLock, isFixed, anchor, className } = attributes;

		const blockProps = useBlockProps({
			area: isFixed ? 'fix' : undefined,
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph']],
			templateLock,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<Item {...innerProps} forwardedRef={ref}>
				{/* <SelectorPreviewTip icon={icon} anchor={anchor} className={className} /> */}
				{children}
			</Item>
		);
	},
	save: ({ attributes }) => {
		const { isFixed } = attributes;

		const blockProps = useBlockProps.save({
			area: isFixed ? 'fix' : undefined,
		});

		return (
			<Item {...blockProps}>
				<InnerBlocks.Content />
			</Item>
		);
	},
});
