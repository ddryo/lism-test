/**
 * @External dependencies
 */
import { AccordionGroup } from '@loos/lism-core';

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
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import { SelectorPreviewTip } from '@/gutenberg/components';

const DEFAULT_DULATION = 0.25;

registerBlockType(metadata.name, {
	title: __('Accordion Group', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	transforms: {
		from: [
			{
				type: 'block',
				isMultiBlock: true,
				blocks: ['lism-blocks/accordion'],
				__experimentalConvert: (blocks) => {
					return createBlock(
						'lism-blocks/accordion-group',
						{},
						blocks.map((block) =>
							createBlock(block.name, block.attributes, block.innerBlocks)
						)
					);
				},
			},
		],
	},
	edit: ({ attributes, setAttributes }) => {
		const { templateLock, hasDivider, allowMultiple, duration, anchor, className } = attributes;

		const blockProps = useBlockProps({
			hasDivider,
			allowMultiple,
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['lism-blocks/accordion']],
			templateLock,
			allowedBlocks: ['lism-blocks/accordion'],
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('Settings', 'lism-blocks')}>
						<ToggleControl
							label={__('Show divider', 'lism-blocks')}
							checked={!!hasDivider}
							onChange={(value) => {
								setAttributes({ hasDivider: value });
							}}
						/>
						<ToggleControl
							label={__(
								'Allow multiple accordions to open at the same time',
								'lism-blocks'
							)}
							checked={!!allowMultiple}
							onChange={(value) => {
								setAttributes({ allowMultiple: value });
							}}
						/>
						<RangeControl
							label={__('Speed to open and close accordion (seconds)', 'lism-blocks')}
							value={duration ?? DEFAULT_DULATION}
							min={0}
							max={1}
							step={0.05}
							onChange={(value) => {
								setAttributes({ duration: value });
							}}
							allowReset
						/>
					</PanelBody>
				</InspectorControls>
				<AccordionGroup {...innerProps} forwardedRef={ref}>
					{/* <SelectorPreviewTip icon={icon} anchor={anchor} className={className} /> */}
					{children}
				</AccordionGroup>
			</>
		);
	},
	save: ({ attributes }) => {
		const { hasDivider, allowMultiple, duration } = attributes;

		const blockProps = useBlockProps.save({
			hasDivider,
			allowMultiple,
			duration: duration !== undefined ? `${duration.toString()}s` : undefined,
		});

		return (
			<AccordionGroup {...blockProps}>
				<InnerBlocks.Content />
			</AccordionGroup>
		);
	},
});
