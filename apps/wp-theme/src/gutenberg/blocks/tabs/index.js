/**
 * @External dependencies
 */
import { Tabs, TabItem } from '@loos/lism-core';

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
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import {
	PanelBody,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import { SelectorPreviewTip } from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Tabs', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes, clientId }) => {
		const { templateLock, anchor, className } = attributes;

		const blockProps = useBlockProps({});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['lism-blocks/tab-item']],
			templateLock,
			allowedBlocks: ['lism-blocks/tab-item'],
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('Settings', 'lism-blocks')}></PanelBody>
				</InspectorControls>
				<Tabs {...innerProps}>
					{/* <SelectorPreviewTip icon={icon} anchor={anchor} className={className} /> */}
					{children}
				</Tabs>
			</>
		);
	},
	// save: ({ attributes }) => {
	// 	const {} = attributes;

	// 	const blockProps = useBlockProps.save({
	// 	});

	// 	return (
	// 		<Tabs {...blockProps}>
	// 			<InnerBlocks.Content />
	// 		</Tabs>
	// 	);
	// },
});
