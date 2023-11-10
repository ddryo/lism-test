/**
 * @External dependencies
 */
import { Flex } from '@loos/lism-core';
import classnames from 'classnames';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	AlignmentControl,
	BlockControls,
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
	Flex as GutenbergFlex,
	FlexItem,
	PanelBody,
	__experimentalVStack as VStack,
} from '@wordpress/components';

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
							<GutenbergFlex>
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
							</GutenbergFlex>
							<AlignJustifyControl
								values={{
									alignItems,
									alignContent,
									justifyItems,
									justifyContent,
								}}
								onChange={(values) => {
									setAttributes({ ...attributes, ...values });
								}}
							/>
						</VStack>
					</PanelBody>
				</InspectorControls>
				<Flex {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</Flex>
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
			<Flex {...blockProps}>
				<InnerBlocks.Content />
			</Flex>
		);
	},
});
