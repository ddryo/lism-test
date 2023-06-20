// import filterEmptyObj from './filterEmptyObj.js';
import { filterEmptyObj } from '../index.js';

/**
 * width用のstyleオブジェクトを生成して返す
 *
 * @param {number|string} width
 * @return {Object} style
 */
export function getWidthCSS(width) {
	// null or undefined なら空オブジェクトを返す
	if (null == width) return {};

	let wQs = {};
	if (typeof width === 'object') {
		wQs = width;
	} else {
		wQs._ = width;
	}

	return filterEmptyObj({
		[`--w`]: wQs?._ || null,
		[`--w--Qsm`]: wQs?.sm || null,
		[`--w--Qxs`]: wQs?.xs || null,
		[`--w--Qlg`]: wQs?.lg || null,
		[`--w--Qxl`]: wQs?.xl || null,
	});
}

/**
 * height用のstyleオブジェクトを生成して返す
 *
 * @param {number|string} height
 * @return {Object} style
 */
export function getHeightCSS(height) {
	// null or undefined なら空オブジェクトを返す
	if (null == height) return {};

	let hQs = {};
	if (typeof height === 'object') {
		hQs = height;
	} else {
		hQs._ = height;
	}

	return filterEmptyObj({
		[`--h`]: hQs?._ || null,
		[`--h--Qsm`]: hQs?.sm || null,
		[`--h--Qxs`]: hQs?.xs || null,
		[`--h--Qlg`]: hQs?.lg || null,
		[`--h--Qxl`]: hQs?.xl || null,
	});
}
