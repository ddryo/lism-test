import maybeGetSpaceVar from './maybeGetSpaceVar.js';
import filterEmptyFromObj from './filterEmptyFromObj.js';

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

	// 一括（ 数値 or 文字列 )指定のときはそのままセット
	if (typeof gap === 'number' || typeof gap === 'string') {
		return {
			[`--gap${modifier}`]: maybeGetSpaceVar(gap) || null,
		};
	}

	// {row, col} 形式の時
	const gapStyles = {};
	if (null != gap?.col) {
		gapStyles[`--colmg${modifier}`] = maybeGetSpaceVar(gap.col);
	}
	if (null != gap?.row) {
		gapStyles[`--rowg${modifier}`] = maybeGetSpaceVar(gap.row);
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

	return filterEmptyFromObj({
		[`--inner--flowGap`]: maybeGetSpaceVar(gaps?._) || null,
		[`--inner--flowGap--Qsm`]: maybeGetSpaceVar(gaps?.sm) || null,
		[`--inner--flowGap--Qxs`]: maybeGetSpaceVar(gaps?.xs) || null,
		[`--inner--flowGap--Qlg`]: maybeGetSpaceVar(gaps?.lg) || null,
		[`--inner--flowGap--Qxl`]: maybeGetSpaceVar(gaps?.xl) || null,
	});
}
