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
	ResponsiveGapControl,
	HTMLElementControls,
} from '@/gutenberg/components';

/**
 * Box
 */
registerBlockType(metadata.name, {
	title: __('Flex', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	// icon: icon,
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
			tagName = 'div',
			flexWrap,
			flexDirection,
			gap,
			alignItems,
			alignContent,
			justifyItems,
			justifyContent,
			anchor,
			className,
		} = attributes;

		const lismProps = {
			wrap: flexWrap,
			direction: flexDirection,
			ai: alignItems,
			ac: alignContent,
			ji: justifyItems,
			jc: justifyContent,
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
		const { tagName = 'div' } = attributes;

		const blockProps = useBlockProps.save({
			className: '',
			tag: tagName,
		});

		return (
			<Flex {...blockProps}>
				<InnerBlocks.Content />
			</Flex>
		);
	},
});
