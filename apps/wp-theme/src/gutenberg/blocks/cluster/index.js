/**
 * @External dependencies
 */
import { Cluster } from '@loos/lism-core';

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
	PanelBody,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import {
	SelectorPreviewTip,
	JustifyContentControl,
	ResponsiveGapControl,
	HTMLElementControls,
} from '@/gutenberg/components';

/**
 * Box
 */
registerBlockType(metadata.name, {
	title: __('Cluster', 'lism-blocks'),
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
			tagName = 'div',
			gap,
			justifyContent,
			itemMinWitdh,
			anchor,
			className,
		} = attributes;

		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });

		const lismProps = {
			jc: justifyContent,
			itemMinW: itemMinWitdh,
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
						<JustifyContentControl
							value={justifyContent}
							controls={['flex-start', 'center', 'flex-end']}
							onChange={(value) => {
								setAttributes({ ...attributes, justifyContent: value });
							}}
						/>
						<UnitControl
							size='__unstable-large'
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
				<Cluster {...innerProps} forwardedRef={ref}>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</Cluster>
			</>
		);
	},

	save: ({ attributes }) => {
		const { tagName = 'div', gap, justifyContent, itemMinWitdh } = attributes;

		const lismProps = {
			jc: justifyContent,
			itemMinW: itemMinWitdh,
			gap: '16px',
		};

		const blockProps = useBlockProps.save({
			...lismProps,
			tag: tagName,
		});

		return (
			<Cluster {...blockProps}>
				<InnerBlocks.Content />
			</Cluster>
		);
	},
});
