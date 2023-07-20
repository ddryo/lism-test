import {
	// filterEmptyObj,
	getMaybeSpaceVar,
	isPresetValue,
} from '../index.js';
// import { PRESETS } from '../presetVars';
// const breakPoints = PRESETS.breakPoints;

/* eslint eqeqeq: 0 */
// ↑ 0 の時の判定を考慮して 「null != hoge」を使用している。

// const spaceUtilityList = ['0', '10', '20', '30', '40', '50', '60'];

/**
 *
 * @param {number | string | Object} gap
 * @param {string}                   Q
 * @return {Object} styles
 */
export default function sortGapData(gap, BP = '') {
	// const dataProps = [];
	const utils = [];
	const styles = {};

	if ('@_' === BP) BP = '';

	/*
	 * --gap に文字列で "row col" 形式で渡ってきていたら先に分解しておく
	 * 成分が "-" の時はスキップ?
	 */
	if (typeof gap === 'string') {
		const gapStrArr = gap.split(' ');

		if (gapStrArr.length > 1) {
			gap = {
				row: gapStrArr[0],
				clm: gapStrArr[1],
			};
		}
	}

	// baseクエリ時はユーティリティクラス化できるかどうかチェック
	if ('' === BP) {
		if (typeof gap === 'object') {
			// 各成分のチェック
			if (isPresetValue('space', gap.row)) {
				utils.push(`-rowg${BP}:${gap.row}`);
				delete gap.row;
			}
			if (isPresetValue('space', gap.col)) {
				utils.push(`-clmg${BP}:${gap.col}`);
				delete gap.col;
			}
		} else if (isPresetValue('space', gap)) {
			utils.push(`-gap${BP}:${gap}`);

			// gap が オブジェクトではなくそのままpreset値ならこの時点で解析終了
			return {
				styles,
				utils,
			};
		}
	}

	// 以下、ユーティリティクラスにできない値の時の処理
	const Qvar = BP.replace('@', '--');

	// 数値指定の時はCSS変数に変換
	if (typeof gap === 'number' || typeof gap === 'string') {
		if (BP) utils.push(`-gap${BP}:`);
		styles[`--gap${Qvar}`] = getMaybeSpaceVar(gap);
	} else {
		// {row, col} 形式の時
		if (null != gap?.row) {
			utils.push(`-rowg${BP}:`);
			styles[`--rowg${Qvar}`] = getMaybeSpaceVar(gap.row);
		}
		if (null != gap?.col) {
			utils.push(`-clmg${BP}:`);
			styles[`--clmg${Qvar}`] = getMaybeSpaceVar(gap.col);
		}
	}

	return { styles, utils };
}
