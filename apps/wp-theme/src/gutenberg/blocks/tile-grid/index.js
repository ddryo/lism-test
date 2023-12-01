/**
 * @External dependencies
 */
import { TileGrid } from '@loos/lism-core';

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
import { SelectorPreviewTip, AlignItemsControl, JustifyItemsControl } from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Tile Grid', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const { templateLock, alignItems, justifyItems, itemMinWitdh, anchor, className } =
			attributes;

		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });

		const blockProps = useBlockProps({
			ai: alignItems,
			ji: justifyItems,
			itemMinW: itemMinWitdh,
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
						<JustifyItemsControl
							value={justifyItems}
							controls={['flex-start', 'center', 'flex-end', 'stretch']}
							onChange={(value) => {
								setAttributes({ justifyItems: value });
							}}
						/>
						<AlignItemsControl
							value={alignItems}
							controls={['flex-start', 'center', 'flex-end', 'stretch']}
							onChange={(value) => {
								setAttributes({ alignItems: value });
							}}
						/>
						<UnitControl
							size={'__unstable-large'}
							label={__('Item min width', 'lism-blocks')}
							units={units}
							min={0}
							value={itemMinWitdh}
							onChange={(value) => {
								setAttributes({ itemMinWitdh: value || undefined });
							}}
						/>
					</PanelBody>
				</InspectorControls>
				<TileGrid {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</TileGrid>
			</>
		);
	},

	save: ({ attributes }) => {
		const { alignItems, justifyItems, itemMinWitdh } = attributes;

		const blockProps = useBlockProps.save({
			ai: alignItems,
			ji: justifyItems,
			itemMinW: itemMinWitdh,
		});

		return (
			<TileGrid {...blockProps}>
				<InnerBlocks.Content />
			</TileGrid>
		);
	},
});
