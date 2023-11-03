/**
 * @External dependencies
 */
import { Center } from '@loos/lism-core';
import classnames from 'classnames';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock, registerBlockType } from '@wordpress/blocks';
import {
	AlignmentControl,
	BlockControls,
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
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
	ResponsiveGapControl,
	HTMLElementControls,
} from '@/gutenberg/components';

const SIZE_OPTIONS = [
	{
		label: __('None', 'lism-blocks'),
		value: 'none',
	},
	{
		label: __('Cover', 'lism-blocks'),
		value: 'cover',
	},
	{
		label: __('Content', 'lism-blocks'),
		value: 'content',
	},
];

registerBlockType(metadata.name, {
	title: __('Center', 'lism-blocks'),
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
			tagName,
			gap,
			textAlign,
			height,
			size,
			anchor,
			className,
		} = attributes;

		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });

		const lismProps = {
			h: height,
			size,
			gap: '16px',
		};

		const blockProps = useBlockProps({
			...lismProps,
			tag: tagName,
			className: classnames({
				[`has-text-align-${textAlign}`]: textAlign,
			}),
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph']],
			templateLock,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<BlockControls group='block'>
					<AlignmentControl
						value={textAlign}
						onChange={(value) => {
							setAttributes({ textAlign: value });
						}}
					/>
				</BlockControls>
				<InspectorControls group='styles'>
					<PanelBody title={__('Layout', 'lism-blocks')}>
						<ToggleGroupControl
							__nextHasNoMarginBottom
							label={__('Size', 'lism-blocks')}
							onChange={(nextSize) => {
								const hasSize = nextSize !== 'none';
								if (hasSize) {
									setAttributes({
										size: nextSize,
										height: undefined,
									});
								} else {
									setAttributes({ size: undefined });
								}
							}}
							isBlock
							value={size || 'none'}
						>
							{SIZE_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
						{!size && (
							<UnitControl
								size={'__unstable-large'}
								__nextHasNoMarginBottom
								label={__('Height', 'lism-blocks')}
								units={units}
								min={0}
								value={height}
								onChange={(value) => {
									setAttributes({ ...attributes, height: value || undefined });
								}}
							/>
						)}
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
				<Center {...innerProps} forwardedRef={ref}>
					{/* <SelectorPreviewTip icon={icon} anchor={anchor} className={className} /> */}
					{children}
				</Center>
			</>
		);
	},

	save: ({ attributes }) => {
		const { tagName, gap, textAlign, height, size } = attributes;

		const lismProps = {
			h: height,
			size,
			gap: '16px',
		};

		const blockProps = useBlockProps.save({
			...lismProps,
			tag: tagName,
			className: classnames({
				[`has-text-align-${textAlign}`]: textAlign,
			}),
		});

		return (
			<Center {...blockProps}>
				<InnerBlocks.Content />
			</Center>
		);
	},
});
