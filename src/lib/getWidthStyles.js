import filterEmptyFromObj from "./filterEmptyFromObj.js";

/**
 * width用のstyleオブジェクトを生成して返す
 *
 * @param {number|string} width
 * @param {Object}        widths
 * @return {Object} style
 */
export default function getWidthStyles(width, widths = {}) {
	if (undefined !== width) {
		widths._ = width;
	}

	return filterEmptyFromObj({
		[`--ls--width`]: widths?._ || null,
		[`--ls--width--Qsm`]: widths?.sm || null,
		[`--ls--width--Qxs`]: widths?.xs || null,
		[`--ls--width--Qlg`]: widths?.lg || null,
		[`--ls--width--Qxl`]: widths?.xl || null,
	});
}
