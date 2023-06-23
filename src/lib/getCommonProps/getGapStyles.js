import { getMaybeSpaceVar, isSpacePresetValue } from '../index.js';

/* eslint eqeqeq: 0 */
// ↑ 0 の時の判定を考慮して 「null != hoge」を使用している。

const spaceUtilityList = ['0', '10', '20', '30', '40', '50', '60'];

/**
 *
 * @param {number | string | Object} gap
 * @param {string}                   Q
 * @return {Object} styles
 */
function sortGapData(gap, Q = '') {
	if (null == gap) return {};

	// const dataProps = [];
	const classNames = [];
	const styles = {};

	/*
	 * --gap に文字列で col/row 渡ってきていたら先に分解しておく
	 */
	if (typeof gap === 'string') {
		const gapStrArr = gap.split(' ');

		if (gapStrArr.length > 1) {
			gap = {
				row: gapStrArr[0],
				col: gapStrArr[1],
			};
		}
	}

	// ユーティリティクラス化できるかどうか
	if (typeof gap === 'object') {
		// 各成分のチェック
		if (isSpacePresetValue(gap.row, spaceUtilityList)) {
			classNames.push(`-rowg${Q}:${gap.row}`);
			delete gap.row;
		}
		if (isSpacePresetValue(gap.col, spaceUtilityList)) {
			classNames.push(`-colmg${Q}:${gap.col}`);
			delete gap.col;
		}
	} else if (isSpacePresetValue(gap, spaceUtilityList)) {
		classNames.push(`-gap${Q}:${gap}`);
		// gap が オブジェクトではなくそのままpreset値ならこの時点で解析終了
		return {
			classNames,
		};
	}

	// 以下、ユーティリティクラスにできない値の時の処理
	const Qvar = Q.replace('@', '_Q');

	// 数値指定の時はCSS変数に変換
	if (typeof gap === 'number' || typeof gap === 'string') {
		styles[`--gap${Qvar}`] = getMaybeSpaceVar(gap) || null;
	} else {
		// {row, col} 形式の時
		if (null != gap?.row) {
			styles[`--rowg${Qvar}`] = getMaybeSpaceVar(gap.row);
		}
		if (null != gap?.col) {
			styles[`--colmg${Qvar}`] = getMaybeSpaceVar(gap.col);
		}
	}

	return { styles, classNames };
}

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

	// return {
	const gapData = sortGapData(gaps._);
	const gapDataQsm = sortGapData(gaps.sm, '@sm');
	const gapDataQxs = sortGapData(gaps.xs, '@xs');
	// };

	return {
		classNames: [
			...(gapData?.classNames || []),
			...(gapDataQsm?.classNames || []),
			...(gapDataQxs?.classNames || []),
		],
		styles: {
			...(gapData?.styles || {}),
			...(gapDataQsm?.styles || {}),
			...(gapDataQxs?.styles || {}),
		},
	};
}

/**
 * isFlow 用のgap。プリセット値のみ受け付ける。
 * @param {number | string | object} gap
 * @param {Object}                   gaps
 * @return {string} クラス
 */
// export function getFlowGapStyles(gap, gaps = {}) {
// 	// if (undefined !== gap) {
// 	// 	gaps._ = gap;
// 	// }

// 	if (isSpacePresetValue(gap, spaceUtilityList)) {
// 		return `-flowGap:${gap}`;
// 	}
// }
