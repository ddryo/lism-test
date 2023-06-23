import { filterEmptyObj, getMaybeSpaceVar } from '../index.js';

/* eslint eqeqeq: 0 */
// ↑ 0 の時の判定を考慮して 「null != hoge」を使用している。

/**
 * gap用のstyleオブジェクトを生成して返す
 *
 * @param {number | string | object} gap
 * @param {Object}                   gaps
 * @return {Object} style
 */
export function getGapStyles(gap, gaps = {}) {
	if (undefined !== gap) {
		gaps._ = gap;
	}

	return {
		...sortGapData(gaps._, ''),
		...sortGapData(gaps.sm, '_Qsm'),
		...sortGapData(gaps.xs, '_Qxs'),
	};
}

/**
 *
 * @param {number | string | Object} gap
 * @param {string}                   Q
 * @return {Object} styles
 */
function sortGapData(gap, Q) {
	if (null == gap) return {};

	// 数値指定の時はCSS変数に変換
	if (typeof gap === 'number') {
		return {
			[`--gap${Q}`]: getMaybeSpaceVar(gap) || null,
		};
	}

	/*
	 * --gap は 単一の値のみ使用可能なので、文字列のときはスペースで分割処理が必要
	 *    OK: --gap: 1rem
	 *    OK: --gap: var(--s{X});
	 *    NG: --gap: 1rem 2rem → --rowg, --colmg に分割する
	 */
	if (typeof gap === 'string') {
		const gapStrArr = gap.split(' ');

		if (gapStrArr.length > 1) {
			return {
				[`--rowg${Q}`]: gapStrArr[0],
				[`--colmg${Q}`]: gapStrArr[1],
			};
		}

		return {
			[`--gap${Q}`]: gap,
		};
	}

	// {row, col} 形式の時
	const gapStyles = {};
	if (null != gap?.row) {
		gapStyles[`--rowg${Q}`] = getMaybeSpaceVar(gap.row);
	}
	if (null != gap?.col) {
		gapStyles[`--colmg${Q}`] = getMaybeSpaceVar(gap.col);
	}
	return gapStyles;
}

/**
 * isFlow 用の。
 * @param {number | string | object} gap
 * @param {Object}                   gaps
 * @return {Object} styles
 */
export function getFlowGapStyles(gap, gaps = {}) {
	if (undefined !== gap) {
		gaps._ = gap;
	}

	return filterEmptyObj({
		[`--flowGap`]: getMaybeSpaceVar(gaps?._) || null,
		[`--flowGap_Qsm`]: getMaybeSpaceVar(gaps?.sm) || null,
		[`--flowGap_Qxs`]: getMaybeSpaceVar(gaps?.xs) || null,
		[`--flowGap_Qlg`]: getMaybeSpaceVar(gaps?.lg) || null,
		[`--flowGap_Qxl`]: getMaybeSpaceVar(gaps?.xl) || null,
	});
}
