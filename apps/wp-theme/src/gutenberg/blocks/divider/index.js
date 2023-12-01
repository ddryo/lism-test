/**
 * @External dependencies
 */
import { Divider } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	InspectorControls,
	useBlockProps,
	__experimentalUseColorProps as useColorProps,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';

const SHAPE_OPTIONS = [
	{ label: __('Line 1', 'lism-blocks'), value: 'Line1' },
	{ label: __('Line 2', 'lism-blocks'), value: 'Line2' },
	{ label: __('Line 3', 'lism-blocks'), value: 'Line3' },
	{ label: __('Wave 1', 'lism-blocks'), value: 'Wave1' },
	{ label: __('Wave 2', 'lism-blocks'), value: 'Wave2' },
	{ label: __('Wave 3', 'lism-blocks'), value: 'Wave3' },
	{ label: __('Arrow 1', 'lism-blocks'), value: 'Arrow1' },
	{ label: __('Arrow 2', 'lism-blocks'), value: 'Arrow2' },
	{ label: __('Arrow 3', 'lism-blocks'), value: 'Arrow3' },
	{ label: __('Arrow 1 Reverse', 'lism-blocks'), value: 'Arrow1_R' },
	{ label: __('Arrow 2 Reverse', 'lism-blocks'), value: 'Arrow2_R' },
	{ label: __('Arrow 3 Reverse', 'lism-blocks'), value: 'Arrow3_R' },
	{ label: __('Circle 1', 'lism-blocks'), value: 'Circle1' },
	{ label: __('Circle 2', 'lism-blocks'), value: 'Circle2' },
	{ label: __('Circle 3', 'lism-blocks'), value: 'Circle3' },
	{ label: __('Circle 1 Reverse', 'lism-blocks'), value: 'Circle1_R' },
	{ label: __('Circle 2 Reverse', 'lism-blocks'), value: 'Circle2_R' },
	{ label: __('Circle 3 Reverse', 'lism-blocks'), value: 'Circle3_R' },
];

registerBlockType(metadata.name, {
	title: __('Divider', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	// icon,
	edit: (props) => {
		const { attributes, setAttributes } = props;
		const { shape, level, stretch, offset, isFlip, isAnimation } = attributes;
		const colorProps = useColorProps(attributes);

		// 横方向の伸縮率が変わった時に、シェイプが見切れないようにオフセット値を丸める
		function roundOffsetValueFromStretch(stretchValue) {
			const offsetMinValue = Math.ceil((stretchValue - 1) * -50);
			const offsetMaxValue = Math.floor((stretchValue - 1) * 50);
			if (offset < offsetMinValue) {
				setAttributes({ offset: offsetMinValue });
			} else if (offset > offsetMaxValue) {
				setAttributes({ offset: offsetMaxValue });
			}
		}

		// 横方向の伸縮率が1ではない時に、シェイプが見切れないオフセット範囲を計算する
		const offsetMinValue = stretch && stretch !== 1 ? Math.ceil((stretch - 1) * -50) : 0;
		const offsetMaxValue = stretch && stretch !== 1 ? Math.floor((stretch - 1) * 50) : 0;

		const blockProps = useBlockProps({
			c: colorProps?.style?.backgroundColor || 'inherit',
			shape,
			level,
			stretch,
			offset: offset ? `${offset}%` : undefined,
			isFlip,
			isAnimation,
		});
		const { ref, ...restBlockProps } = blockProps;

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('Setting', 'lism-blocks')}>
						<SelectControl
							label={__('Shape', 'lism-blocks')}
							options={SHAPE_OPTIONS.map(({ label, value }) => {
								return {
									label,
									value,
								};
							})}
							value={shape || 'Wave1'}
							onChange={(value) => {
								setAttributes({ shape: value });
							}}
						/>
						<RangeControl
							label={__('Level', 'lism-blocks')}
							value={level || 5}
							min={-30}
							max={30}
							step={0.1}
							onChange={(value) => {
								setAttributes({ level: value });
							}}
							allowReset
						/>
						<RangeControl
							label={__('Stretch horizontally', 'lism-blocks')}
							value={stretch}
							min={1}
							max={3}
							step={0.05}
							onChange={(value) => {
								setAttributes({ stretch: value || 1 });
								if (!value) {
									setAttributes({ offset: undefined });
								} else {
									roundOffsetValueFromStretch(value);
								}
							}}
							allowReset
						/>
						<RangeControl
							label={__('Horizontal offset (%)', 'lism-blocks')}
							value={stretch !== 1 ? offset : 0}
							min={offsetMinValue}
							max={offsetMaxValue}
							disabled={stretch === 1}
							onChange={(value) => {
								setAttributes({ offset: value });
							}}
							allowReset
						/>
						<ToggleControl
							label={__('Flip vertically', 'lism-blocks')}
							checked={!!isFlip}
							onChange={(value) => {
								setAttributes({ isFlip: value });
							}}
						/>
						<ToggleControl
							label={__('Enable animation', 'lism-blocks')}
							checked={!!isAnimation}
							onChange={(value) => {
								setAttributes({ isAnimation: value });
							}}
						/>
					</PanelBody>
				</InspectorControls>
				<Divider {...restBlockProps} forwardedRef={ref} />
			</>
		);
	},

	save: ({ attributes }) => {
		const { shape, level, stretch, offset, isFlip, isAnimation } = attributes;
		const colorProps = getColorClassesAndStyles(attributes);
		const blockProps = useBlockProps.save({
			c: colorProps?.style?.backgroundColor || 'inherit',
			shape,
			level: level ? level.toString() : '5',
			stretch: stretch ? stretch.toString() : '0',
			offset: offset ? `${offset}%` : undefined,
			isFlip,
			isAnimation,
		});

		return <Divider {...blockProps} />;
	},
});
