/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockControls, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, BaseControl, ToggleControl, SelectControl } from '@wordpress/components';

/**
 * @Internal dependencies
 */
import {
	ArkbUnitNumber,
	ArkbMarginControl,
	LsSpaceControl,
	ArkbDeviceTab,
	DynamicStyles,
	ArkbJustifyContentToolbarControls,
	ArkbVerticalAlignmentToolbarControl,
	ArkbOrientationControl,
	ArkbFlexWrapControl,
} from '@components';
import { convertStylesToCssCode, getCusomPadding, getFlexLayoutProps } from '@helper';

/**
 * @Others dependencies
 */
// import classnames from 'classnames';

/**
 * style生成
 */
function getSpaceStyles({ padding, paddingTAB, paddingMB, margin, marginTAB, marginMB }) {
	return {
		all: {
			'--arkb-padding': padding ? getCusomPadding(padding, '0') : '',
			'--arkb-margin--top': margin?.top || '',
			'--arkb-margin--left': margin?.left || '',
			'--arkb-margin--right': margin?.right || '',
			'--arkb-margin--bottom': margin?.bottom || '',
		},
		sp: {
			'--arkb-padding': paddingTAB ? getCusomPadding(paddingTAB, '0') : '',
			'--arkb-margin--top': marginTAB?.top || '',
			'--arkb-margin--left': marginTAB?.left || '',
			'--arkb-margin--right': marginTAB?.right || '',
			'--arkb-margin--bottom': marginTAB?.bottom || '',
		},
		mb: {
			'--arkb-padding': paddingMB ? getCusomPadding(paddingMB, '0') : '',
			'--arkb-margin--top': marginMB?.top || '',
			'--arkb-margin--left': marginMB?.left || '',
			'--arkb-margin--right': marginMB?.right || '',
			'--arkb-margin--bottom': marginMB?.bottom || '',
		},
	};
}

/**
 * コンテナ
 */
// const blockName = 'ark-block-container';
export default ({ attributes, setAttributes, clientId }) => {
	const {
		layout = {},
		tagName: TagName = 'div',
		gap,
		padding,
		paddingTAB,
		paddingMB,
		margin,
		marginTAB,
		marginMB,
		hasInner,
		hasInnerSpace,
	} = attributes;

	const { type = '', orientation = '' } = layout;
	const isFlex = type === 'flex';
	const isHorizontal = orientation === 'horizontal';

	const layoutStyles = convertStylesToCssCode(`#block-${clientId}`, {
		all: {
			...getFlexLayoutProps(layout),
			'--arkb-gap': gap?.x || '',
		},
	});

	const spaceSelector =
		hasInner && hasInnerSpace
			? `#block-${clientId} > .ark-block-container__inner`
			: `#block-${clientId}`;

	const spaceStyles = convertStylesToCssCode(
		spaceSelector,
		getSpaceStyles({
			padding,
			paddingTAB,
			paddingMB,
			margin,
			marginTAB,
			marginMB,
		})
	);

	// layout更新処理
	const onChangeLayout = (newLayout) => setAttributes({ layout: newLayout });

	return (
		<>
			{layoutStyles && <DynamicStyles style={layoutStyles} />}
			{spaceStyles && <DynamicStyles style={spaceStyles} />}
			{isFlex && (
				<BlockControls group='block'>
					<ArkbJustifyContentToolbarControls layout={layout} onChange={onChangeLayout} />
					{isHorizontal && (
						<ArkbVerticalAlignmentToolbarControl
							layout={layout}
							onChange={onChangeLayout}
						/>
					)}
				</BlockControls>
			)}
			<BlockControls>
				<ArkbMarginControl {...{ className: attributes.className, setAttributes }} />
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__('Layout')} initialOpen={true}>
					<ToggleControl
						label={__('Turn on "Flex"', 'arkhe-blocks')}
						onChange={(value) => {
							if (value) {
								onChangeLayout({
									...layout,
									type: 'flex',
									orientation: 'horizontal',
									flexWrap: 'nowrap',
								});
							} else {
								onChangeLayout(undefined);
							}
						}}
						checked={isFlex}
					/>
					{isFlex && (
						<>
							<ArkbOrientationControl layout={layout} onChange={onChangeLayout} />
							<ArkbFlexWrapControl layout={layout} onChange={onChangeLayout} />
							<BaseControl className='u-mb-25'>
								<BaseControl.VisualLabel>
									{__('Gap between blocks', 'arkhe-blocks')}
								</BaseControl.VisualLabel>
								<ArkbUnitNumber
									value={gap?.x || 'rem'}
									onChange={(val) => {
										setAttributes({ gap: { x: val, y: val } });
									}}
									onClear={() => {
										setAttributes({ gap: undefined });
									}}
								/>
							</BaseControl>
						</>
					)}
				</PanelBody>
				<PanelBody title={__('Settings', 'arkhe-blocks')}>
					<ToggleControl
						label={__('Use inner <div>', 'arkhe-blocks')}
						checked={hasInner}
						onChange={(value) => {
							setAttributes({ hasInner: value });
						}}
					/>

					<SelectControl
						label={__('HTML element')}
						options={[
							{ label: '<div>', value: 'div' },
							{ label: '<section>', value: 'section' },
						]}
						value={TagName}
						onChange={(value) => setAttributes({ tagName: value })}
					/>
				</PanelBody>
				<PanelBody title={__('Space Settings', 'arkhe-blocks')}>
					{hasInner && (
						<ToggleControl
							label={__('Apply space settings to the inner', 'arkhe-blocks')}
							checked={hasInnerSpace}
							onChange={(value) => {
								setAttributes({ hasInnerSpace: value });
							}}
						/>
					)}
					<BaseControl>
						<BaseControl.VisualLabel>
							{__('Padding', 'arkhe-blocks')}
						</BaseControl.VisualLabel>
						<ArkbDeviceTab
							className='-triple'
							controlPC={
								<LsSpaceControl
									name='padding'
									value={padding}
									setAttributes={setAttributes}
									clearable={true}
								/>
							}
							controlTab={
								<LsSpaceControl
									name='paddingTAB'
									value={paddingTAB}
									setAttributes={setAttributes}
									clearable={true}
									successionHelp={__('PC setting', 'arkhe-blocks')}
								/>
							}
							controlMB={
								<LsSpaceControl
									name='paddingMB'
									value={paddingMB}
									setAttributes={setAttributes}
									clearable={true}
									successionHelp={__('Tablet setting', 'arkhe-blocks')}
								/>
							}
						/>
					</BaseControl>
					<BaseControl>
						<BaseControl.VisualLabel>
							{__('Margin', 'arkhe-blocks')}
						</BaseControl.VisualLabel>
						<ArkbDeviceTab
							className='-triple'
							controlPC={
								<LsSpaceControl
									isMargin={true}
									name='margin'
									value={margin}
									setAttributes={setAttributes}
									clearable={true}
									defaultOpen={true}
								/>
							}
							controlTab={
								<LsSpaceControl
									isMargin={true}
									name='marginTAB'
									value={marginTAB}
									setAttributes={setAttributes}
									clearable={true}
									defaultOpen={true}
									successionHelp={__('PC setting', 'arkhe-blocks')}
								/>
							}
							controlMB={
								<LsSpaceControl
									isMargin={true}
									name='marginMB'
									value={marginMB}
									setAttributes={setAttributes}
									clearable={true}
									defaultOpen={true}
									successionHelp={__('Tablet setting', 'arkhe-blocks')}
								/>
							}
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
