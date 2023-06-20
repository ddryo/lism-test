// import { filterEmptyObj, getMaybeSpaceVar } from '../index.js';

/* eslint eqeqeq: 0 */
// ↑ 0 の時の判定を考慮して 「null != hoge」を使用している。

// grid-area = grid-row-start / grid-column-start / grid-row-end / grid-column-end

/**
 * gridArea用のstyleオブジェクトを生成して返す
 *
 *
 * @param {number | string | object} gridArea
 * @param {Object}                   gridAreas
 * @return {Object} style
 */
export function getGridAreaStyles(gridArea, gridAreas = {}) {
	if (undefined !== gridArea) {
		gridAreas._ = gridArea;
	}

	return {
		...sortAreaData(gridAreas._, ''),
		...sortAreaData(gridAreas.sm, '--Qsm'),
		...sortAreaData(gridAreas.xs, '--Qxs'),
	};
}

/**
 *
 * @param {number | string | Object} gridArea
 * @param {string}                   modifier
 * @return {Object} styles
 */
function sortAreaData(gridArea, modifier) {
	if (null == gridArea) return {};

	// 数値は受け付けない
	if (typeof gridArea === 'number') {
		return {};
	}

	// 文字列ならそのままセット
	if (typeof gridArea === 'string') {
		return {
			[`--g-area${modifier}`]: gridArea,
		};
	}

	// 以下、{row, col} 形式の時
	const row = gridArea?.row || 'auto';
	const col = gridArea?.col || 'auto';

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
		[`--g-area${modifier}`]: `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`,
	};
}
