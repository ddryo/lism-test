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
		...sortGapData(gaps.sm, '--Qsm'),
		...sortGapData(gaps.xs, '--Qxs'),
	};
}

/**
 *
 * @param {number | string | Object} gap
 * @param {string}                   modifier
 * @return {Object} styles
 */
function sortGapData(gap, modifier) {
	if (null == gap) return {};

	// 数値指定の時はCSS変数に変換
	if (typeof gap === 'number') {
		return {
			[`--gap${modifier}`]: getMaybeSpaceVar(gap) || null,
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
				[`--rowg${modifier}`]: gapStrArr[0],
				[`--colmg${modifier}`]: gapStrArr[1],
			};
		}

		return {
			[`--gap${modifier}`]: gap,
		};
	}

	// {row, col} 形式の時
	const gapStyles = {};
	if (null != gap?.row) {
		gapStyles[`--rowg${modifier}`] = getMaybeSpaceVar(gap.row);
	}
	if (null != gap?.col) {
		gapStyles[`--colmg${modifier}`] = getMaybeSpaceVar(gap.col);
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
		[`--inner--flowGap`]: getMaybeSpaceVar(gaps?._) || null,
		[`--inner--flowGap--Qsm`]: getMaybeSpaceVar(gaps?.sm) || null,
		[`--inner--flowGap--Qxs`]: getMaybeSpaceVar(gaps?.xs) || null,
		[`--inner--flowGap--Qlg`]: getMaybeSpaceVar(gaps?.lg) || null,
		[`--inner--flowGap--Qxl`]: getMaybeSpaceVar(gaps?.xl) || null,
	});
}
