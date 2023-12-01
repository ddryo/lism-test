/**
 * @External dependencies
 */
import { TabItem } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	RichText,
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import { SelectorPreviewTip, FlowControl } from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Tab Item', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const { templateLock, anchor, className } = attributes;

		const blockProps = useBlockProps({});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph']],
			templateLock,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<InspectorControls group='styles'>
					<PanelBody title={__('Layout', 'lism-blocks')}></PanelBody>
				</InspectorControls>
				<TabItem {...innerProps} label={'Tab Item'} forwardedRef={ref}>
					{children}
				</TabItem>
			</>
		);
	},
	// save: (props) => {
	// 	const { attributes } = props;
	// 	const { term, flowGap, isFluidMode, fixedWidth, fluidMinWidth } = attributes;

	// 	const blockProps = useBlockProps.save({
	// 		isFlow: flowGap !== undefined ? flowGap : undefined,
	// 		mode: isFluidMode ? 'fluid' : undefined,
	// 		fixW: isFluidMode ? fixedWidth : undefined,
	// 		fluidMinW: isFluidMode ? fluidMinWidth : undefined,
	// 	});

	// 	return (
	// 		<TabItem {...blockProps} term={<RichText.Content value={term} />}>
	// 			<InnerBlocks.Content />
	// 		</TabItem>
	// 	);
	// },
});
