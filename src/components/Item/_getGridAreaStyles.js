// import { filterEmptyObj, getMaybeSpaceVar } from '../index.js';

/* eslint eqeqeq: 0 */
// ↑ 0 の時の判定を考慮して 「null != hoge」を使用している。

// grid-area = grid-row-start / grid-column-start / grid-row-end / grid-column-end

/**
 * grid-area用のstyleオブジェクトを生成して返す.
 *    row/col で分割指定できるが、変数化する時にはまとめてセットする.
 *
 * @param {number | string | object} area
 * @param {Object}                   areas
 * @return {Object} style
 */
export function getGridAreaStyles(area, areas = {}) {
	if (undefined !== area) {
		areas._ = area;
	}

	return {
		...sortAreaData(areas._, ''),
		...sortAreaData(areas.sm, '--sm'),
		...sortAreaData(areas.xs, '--xs'),
	};
}

/**
 *
 * @param {number | string | Object} area
 * @param {string}                   modifier
 * @return {Object} styles
 */
function sortAreaData(area, modifier) {
	if (null == area) return {};

	// 数値は受け付けない
	if (typeof area === 'number') {
		return {};
	}

	// 文字列ならそのままセット
	if (typeof area === 'string') {
		return {
			[`--area${modifier}`]: area,
		};
	}

	// 以下、{row, col} 形式の時
	const row = area?.row || 'auto';
	const col = area?.col || 'auto';

	let rowStart = null;
	let rowEnd = null;
	let colStart = null;
	let colEnd = null;

	// それぞれ、1個か、2個 かで処理を分岐する
	const rowData = row.split('/');
	if (rowData.length === 1) {
		rowStart = rowData[0];
		rowEnd = 'auto';
	} else if (rowData.length === 2) {
		rowStart = rowData[0];
		rowEnd = rowData[1];
	}

	const colData = col.split('/');
	if (colData.length === 1) {
		colStart = colData[0];
		colEnd = 'auto';
	} else if (colData.length === 2) {
		colStart = colData[0];
		colEnd = colData[1];
	}

	return {
		[`--area${modifier}`]: `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`,
	};
}
