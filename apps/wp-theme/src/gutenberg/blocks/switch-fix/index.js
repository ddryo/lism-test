/**
 * @External dependencies
 */
import { SwitchFix } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
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
import { SelectorPreviewTip } from '@/gutenberg/components';

const FIXED_ELEMENT_OPTIONS = [
	{
		label: __('First', 'lism-blocks'),
		value: 0,
	},
	{
		label: __('Last', 'lism-blocks'),
		value: 1,
	},
];

const FIXED_POSITION_OPTIONS = [
	{
		label: __('Left Up', 'lism-blocks'),
		value: 'left up',
	},
	{
		label: __('Left Down', 'lism-blocks'),
		value: 'left down',
	},
	{
		label: __('Right Up', 'lism-blocks'),
		value: 'right up',
	},
	{
		label: __('Right Down', 'lism-blocks'),
		value: 'right down',
	},
];

const BREAKPOINTS = [
	{
		label: __('sm', 'lism-blocks'),
		value: 'sm',
	},
	{
		label: __('md', 'lism-blocks'),
		value: 'md',
	},
];

const TEMPLATE = [
	['lism-blocks/switch-fix-item', { isFixed: true }],
	['lism-blocks/switch-fix-item'],
];

registerBlockType(metadata.name, {
	title: __('Switch Fix', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes, clientId }) => {
		const { fixedElementPosition, fixedWidth, breakPoint, anchor, className } = attributes;

		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });
		const { updateBlockAttributes } = useDispatch(blockEditorStore);

		const { innerBlocks, fixedChildBlockIndex } = useSelect(
			(select) => {
				const { getBlocks } = select(blockEditorStore);
				const innerBlocks = getBlocks(clientId);
				const fixedChildBlockIndex = innerBlocks.findIndex(({ attributes }) => {
					return attributes.isFixed;
				});
				return {
					innerBlocks,
					fixedChildBlockIndex,
				};
			},
			[clientId]
		);

		useEffect( () => {
			if ( innerBlocks.length !== 2 ) {
				return;
			}
			const hasFixedChildBlock = innerBlocks.some(({ attributes }) => {
				return attributes.isFixed;
			});
			if ( hasFixedChildBlock ) {
				return;
			}
			// 子ブロックの数が2つ、かつどちらもfixedでない場合は、一方をfixedにする
			updateBlockAttributes(innerBlocks[1].clientId, {
				isFixed: true,
			});
		}, [innerBlocks.length] );

		function onChangeFixedElement(value) {
			// 子ブロックの一方をfixedにする
			innerBlocks?.forEach((childBlock, index) => {
				updateBlockAttributes(childBlock.clientId, {
					isFixed: index === value,
				});
			});
		}

		const blockProps = useBlockProps({
			fix: fixedElementPosition,
			fixW: fixedWidth,
			breakPoint,
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: TEMPLATE,
			allowedBlocks: ['lism-blocks/switch-fix-item'],
			renderAppender: innerBlocks.length < 2 ? undefined : false,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<InspectorControls group='styles'>
					<PanelBody title={__('Layout', 'lism-blocks')}>
						<ToggleGroupControl
							label={__('Fixed element', 'lism-blocks')}
							onChange={onChangeFixedElement}
							isBlock
							value={fixedChildBlockIndex === 0 ? 0 : 1}
						>
							{FIXED_ELEMENT_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
						<SelectControl
							label={__('Fixed element position', 'lism-blocks')}
							options={FIXED_POSITION_OPTIONS}
							value={fixedElementPosition}
							onChange={(value) => {
								setAttributes({ fixedElementPosition: value });
							}}
						/>
						<UnitControl
							size={'__unstable-large'}
							label={__('Fluid element width', 'lism-blocks')}
							units={units}
							min={0}
							value={fixedWidth}
							onChange={(value) => {
								setAttributes({ fixedWidth: value || undefined });
							}}
						/>
						<ToggleGroupControl
							label={__('Breakpoint', 'lism-blocks')}
							onChange={(value) => {
								setAttributes({ breakPoint: value });
							}}
							isBlock
							value={breakPoint}
						>
							{BREAKPOINTS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
					</PanelBody>
				</InspectorControls>
				<SwitchFix {...innerProps} forwardedRef={ref}>
					{/* <SelectorPreviewTip icon={icon} anchor={anchor} className={className} /> */}
					{children}
				</SwitchFix>
			</>
		);
	},
	save: ({ attributes }) => {
		const { fixedElementPosition, fixedWidth, breakPoint } = attributes;

		const blockProps = useBlockProps.save({
			fix: fixedElementPosition,
			fixW: fixedWidth,
			breakPoint,
		});

		return (
			<SwitchFix {...blockProps}>
				<InnerBlocks.Content />
			</SwitchFix>
		);
	},
});
