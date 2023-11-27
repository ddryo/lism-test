/**
 * @External dependencies
 */
import { Flex as LismFlex } from '@loos/lism-core';

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
import { Flex, FlexItem, PanelBody, __experimentalVStack as VStack } from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import {
	SelectorPreviewTip,
	AlignJustifyControl,
	FlexDirectionControl,
	FlexWrapControl,
} from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Flex', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const {
			templateLock,
			flexWrap,
			flexDirection,
			alignItems,
			alignContent,
			justifyItems,
			justifyContent,
			anchor,
			className,
		} = attributes;

		const blockProps = useBlockProps({
			wrap: flexWrap,
			direction: flexDirection,
			ai: alignItems,
			ac: alignContent,
			ji: justifyItems,
			jc: justifyContent,
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
						<VStack>
							<Flex>
								<FlexItem>
									<FlexWrapControl
										value={flexWrap}
										onChange={(value) => {
											setAttributes({ flexWrap: value });
										}}
									/>
								</FlexItem>
								<FlexItem>
									<FlexDirectionControl
										value={flexDirection}
										onChange={(value) => {
											setAttributes({ flexDirection: value });
										}}
									/>
								</FlexItem>
							</Flex>
							<AlignJustifyControl
								values={{
									alignItems,
									alignContent,
									justifyItems,
									justifyContent,
								}}
								onChange={(values) => {
									setAttributes({ values });
								}}
							/>
						</VStack>
					</PanelBody>
				</InspectorControls>
				<LismFlex {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</LismFlex>
			</>
		);
	},

	save: ({ attributes }) => {
		const { flexWrap, flexDirection, alignItems, alignContent, justifyItems, justifyContent } =
			attributes;

		const blockProps = useBlockProps.save({
			wrap: flexWrap,
			direction: flexDirection,
			ai: alignItems,
			ac: alignContent,
			ji: justifyItems,
			jc: justifyContent,
		});

		return (
			<LismFlex {...blockProps}>
				<InnerBlocks.Content />
			</LismFlex>
		);
	},
});
