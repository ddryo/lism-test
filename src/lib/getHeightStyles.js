import filterEmptyFromObj from "./filterEmptyFromObj.js";

/**
 * height用のstyleオブジェクトを生成して返す
 *
 * @param {number|string} height
 * @param {Object}        heights
 * @return {Object} style
 */
export default function getWidthStyles(height, heights = {}) {
	if (undefined !== height) {
		heights._ = height;
	}

	return filterEmptyFromObj({
		[`--ls--height`]: heights?._ || null,
		[`--ls--height--Qsm`]: heights?.sm || null,
		[`--ls--height--Qxs`]: heights?.xs || null,
		[`--ls--height--Qlg`]: heights?.lg || null,
		[`--ls--height--Qxl`]: heights?.xl || null,
	});
}
