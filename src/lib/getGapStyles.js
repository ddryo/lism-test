import maybeGetSpaceVar from './maybeGetSpaceVar.js';
import filterEmptyFromObj from './filterEmptyFromObj.js';

/**
 * gap用のstyleオブジェクトを生成して返す
 *
 * @param {number|string} gap
 * @param {Object}        gaps
 * @param {string}        gapName
 * @return {Object} style
 */
export default function getGapStyles(gap, gaps = {}, gapName = 'gap') {
	if (undefined !== gap) {
		gaps._ = gap;
	}

	// flowGap, rowGap, colGap の時
	if ('gap' !== gapName) {
		return filterEmptyFromObj({
			[`--ls--${gapName}`]: maybeGetSpaceVar(gaps?._) || null,
			[`--ls--${gapName}--Qsm`]: maybeGetSpaceVar(gaps?.sm) || null,
			[`--ls--${gapName}--Qxs`]: maybeGetSpaceVar(gaps?.xs) || null,
			[`--ls--${gapName}--Qlg`]: maybeGetSpaceVar(gaps?.lg) || null,
			[`--ls--${gapName}--Qxl`]: maybeGetSpaceVar(gaps?.xl) || null,
		});
	}

	return filterEmptyFromObj({
		[`--ls--${gapName}`]: maybeGetSpaceVar(gaps?._) || null,
		[`--ls--${gapName}--Qsm`]: maybeGetSpaceVar(gaps?.sm) || null,
		[`--ls--${gapName}--Qxs`]: maybeGetSpaceVar(gaps?.xs) || null,
		[`--ls--${gapName}--Qlg`]: maybeGetSpaceVar(gaps?.lg) || null,
		[`--ls--${gapName}--Qxl`]: maybeGetSpaceVar(gaps?.xl) || null,
	});

	// return filterEmptyFromObj({
	// 	...sortGapData(gaps._),
	// 	...sortGapData(gaps.sm, "--Qsm"),
	// 	...sortGapData(gaps.xs, "--Qxs"),
	// });
}

// function sortGapData(gap, Qmodifier = '') {
// 	if (typeof gap === 'number' || typeof gap === 'string') {
// 		return {
// 			[`--ls--gap${Qmodifier}`]: maybeGetSpaceVar(gap) || null,
// 		};
// 	}
// 	if (typeof gap !== 'object') return false;

// 	// {row, col} 形式の時
// 	return filterEmptyFromObj({
// 		[`--ls--rowGap${Qmodifier}`]: maybeGetSpaceVar(gap.row) || null,
// 		[`--ls--colGap${Qmodifier}`]: maybeGetSpaceVar(gap.col) || null,
// 	});
// 	// --ls--gap--default
// 	// return maybeGetSpaceVar(gap) || null;

// 	// maybeGetSpaceVar(gaps?.sm) || null,
// }
