/**
 * @WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Button, Tooltip } from '@wordpress/components';
import { memo, useState } from '@wordpress/element';
import { link, linkOff } from '@wordpress/icons';

/**
 * @Inner dependencies
 */
import { ArkbUnitNumber } from '@components';

/**
 * see: https://github.com/WordPress/gutenberg/blob/899286307b/packages/components/src/box-control/linked-button.js
 */
const LinkedButton = ({ isLinked, ...props }) => {
	const label = isLinked ? __('Unlink Sides') : __('Link Sides');

	return (
		<Tooltip text={label}>
			<span className='__link'>
				<Button
					{...props}
					className='component-box-control__linked-button'
					variant={isLinked ? 'primary' : 'secondary'}
					isSmall
					icon={isLinked ? link : linkOff}
					iconSize={16}
					aria-label={label}
				/>
			</span>
		</Tooltip>
	);
};

const checkPaddingIsSame = (padding) => {
	const paddingValues = [padding?.top, padding?.right, padding?.bottom, padding?.left];
	return paddingValues.every((pd) => pd === paddingValues[0]);
};

/* eslint @wordpress/i18n-translator-comments: 0 */

/**
 * LsSpaceControl
 *     参考: https://github.com/WordPress/gutenberg/blob/899286307b/packages/components/src/box-control/index.js
 */
export default memo(
	({
		name,
		value,
		setAttributes,
		help,
		successionHelp,
		nullValue,
		resetValue,
		defaultUnit = 'rem',
		defaultOpen = false,
		clearable = false,
		isMargin = false,
	}) => {
		const [isLinked, setIsLinked] = useState(defaultOpen ? false : checkPaddingIsSame(value));

		const minNumber = isMargin ? -9999 : 0;

		const changeAll = (newVal) => {
			if (undefined === newVal) {
				setAttributes({ [name]: undefined });
			} else {
				setAttributes({
					[name]: { ...value, top: newVal, left: newVal, right: newVal, bottom: newVal },
				});
			}
		};

		let helpText = help || '';
		if (successionHelp && !isMargin && !isLinked) {
			helpText = sprintf(
				__('If all are empty, %s will be taken over', 'arkhe-blocks'),
				successionHelp
			);
		} else if (successionHelp) {
			helpText = sprintf(__('If empty, %s is taken over', 'arkhe-blocks'), successionHelp);
		}

		const onChange = (changedVal, position) => {
			const newValue = changedVal || nullValue || undefined;
			if (isLinked) {
				changeAll(newValue);
			} else {
				const newPadding = { ...value };
				if (undefined === newValue) {
					delete newPadding[position];
				} else {
					newPadding[position] = newValue;
				}

				// 全て空かどうか
				if (!Object.keys(newPadding).length) {
					setAttributes({ [name]: undefined });
				} else {
					setAttributes({ [name]: newPadding });
				}
			}
		};

		return (
			<>
				<div className='arkb-ctrl--space'>
					<div className='__inner' data-is-linked={isLinked}>
						{!isMargin && (
							<LinkedButton
								onClick={() => {
									setIsLinked(!isLinked);
								}}
								isLinked={isLinked}
							/>
						)}

						<div className='__center'>
							<span className='__box--top'></span>
							<span className='__box--left'></span>
							<span className='__box--right'></span>
							<span className='__box--bottom'></span>
						</div>
						<ArkbUnitNumber
							className='__top'
							value={value?.top || defaultUnit}
							min={minNumber}
							onChange={(val) => {
								onChange(val, 'top');
							}}
						/>
						<ArkbUnitNumber
							className='__bottom'
							value={value?.bottom || defaultUnit}
							min={minNumber}
							onChange={(val) => {
								onChange(val, 'bottom');
							}}
						/>
						<ArkbUnitNumber
							className='__left'
							value={value?.left || defaultUnit}
							min={minNumber}
							onChange={(val) => {
								onChange(val, 'left');
							}}
						/>
						<ArkbUnitNumber
							className='__right'
							value={value?.right || defaultUnit}
							min={minNumber}
							onChange={(val) => {
								onChange(val, 'right');
							}}
						/>
					</div>
					{helpText && <p className='arkb-helpText u-arkb--mt--5'>{helpText}</p>}
					{clearable && (
						<Button
							className='__clear'
							isSmall
							variant='secondary'
							text={__('Clear')}
							onClick={() => {
								setAttributes({
									[name]: undefined,
								});
							}}
						/>
					)}
					{resetValue && (
						<Button
							className='__clear'
							isSmall
							variant='secondary'
							text={__('Reset', 'arkhe-blocks')}
							onClick={() => {
								setAttributes({
									[name]: resetValue,
								});
							}}
						/>
					)}
				</div>
			</>
		);
	}
);
