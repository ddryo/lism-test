/**
 * @External dependencies
 */
import { Cluster } from '@loos/lism-core';

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
import { SelectorPreviewTip, JustifyContentControl } from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Cluster', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const { templateLock, justifyContent, itemMinWitdh, anchor, className } = attributes;

		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });

		const blockProps = useBlockProps({
			jc: justifyContent,
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
						<JustifyContentControl
							value={justifyContent}
							onChange={(value) => {
								setAttributes({ ...attributes, justifyContent: value });
							}}
						/>
						<UnitControl
							size={'__unstable-large'}
							__nextHasNoMarginBottom
							label={__('Item min width', 'lism-blocks')}
							units={units}
							min={0}
							value={itemMinWitdh}
							onChange={(value) => {
								setAttributes({ ...attributes, itemMinWitdh: value || undefined });
							}}
						/>
					</PanelBody>
				</InspectorControls>
				<Cluster {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</Cluster>
			</>
		);
	},

	save: ({ attributes }) => {
		const { justifyContent, itemMinWitdh } = attributes;

		const blockProps = useBlockProps.save({
			jc: justifyContent,
			itemMinW: itemMinWitdh,
		});

		return (
			<Cluster {...blockProps}>
				<InnerBlocks.Content />
			</Cluster>
		);
	},
});
