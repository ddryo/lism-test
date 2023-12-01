/**
 * @External dependencies
 */
import { Spacer } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	Flex,
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
import { Icon, arrowDown, arrowRight } from '@wordpress/icons';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import { ResponsiveWidthControl } from '@/gutenberg/components';

const ORIENTATION_OPTIONS = [
	{
		label: (
			<Flex gap='1'>
				<Icon icon={arrowDown} />
				{__('Vertical', 'lism-blocks')}
			</Flex>
		),
		value: 'vertical',
	},
	{
		label: (
			<Flex gap='1'>
				<Icon icon={arrowRight} />
				{__('Horizontal', 'lism-blocks')}
			</Flex>
		),
		value: 'horizontal',
	},
];

registerBlockType(metadata.name, {
	title: __('Spacer', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	// icon,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['core/spacer'],
				transform: ({ height }) => {
					return createBlock(metadata.name, {
						height,
					});
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: ['core/spacer'],
				transform: ({ height }) => {
					const getHeight = (height) => {
						if (typeof height === 'string') {
							return height;
						} else if (typeof height === 'number') {
							return `${height}px`;
						}
						if (!height[0]) {
							return undefined;
						}
						return typeof height[0] === 'string' ? height[0] : `${height[0]}px`;
					};
					return createBlock('core/spacer', {
						height: getHeight(height),
					});
				},
			},
		],
	},
	edit: (props) => {
		const { attributes, setAttributes } = props;
		const { orientation, height } = attributes;

		const blockProps = useBlockProps({
			w: orientation === 'horizontal' ? height : undefined,
			h: orientation === 'vertical' ? height : undefined,
			style: {
				backgroundColor: 'rgba(0,0,0,.1)',
				width: orientation === 'vertical' ? '100%' : undefined,
				minHeight: orientation === 'horizontal' ? '50px' : undefined,
			},
		});
		const { ref, ...restBlockProps } = blockProps;

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('Setting', 'lism-blocks')}>
						<ToggleGroupControl
							label={__('Orientation', 'lism-blocks')}
							onChange={(nextOrientation) => {
								setAttributes({ orientation: nextOrientation });
							}}
							isBlock
							value={orientation}
						>
							{ORIENTATION_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
						<ResponsiveWidthControl
							label={
								orientation === 'vertical'
									? __('Height', 'lism-blocks')
									: __('Width', 'lism-blocks')
							}
							defaultValue={metadata.attributes.height?.default}
							value={height}
							onChange={(value) => {
								setAttributes({ height: value });
							}}
						/>
					</PanelBody>
				</InspectorControls>
				<Spacer {...restBlockProps} forwardedRef={ref} />
			</>
		);
	},

	save: ({ attributes }) => {
		const { orientation, height } = attributes;

		const blockProps = useBlockProps.save({
			w: orientation === 'horizontal' ? height : undefined,
			h: orientation === 'vertical' ? height : undefined,
		});

		return <Spacer {...blockProps} />;
	},
});
