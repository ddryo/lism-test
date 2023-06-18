import maybeGetSpaceVar from "./maybeGetSpaceVar";
import filterEmptyFromObj from "./filterEmptyFromObj";

/* eslint eqeqeq: 0 */
// ↑ 0 の時の判定を考慮して 「null != hoge」を使用している。

/**
 *
 * @param {number | string | Object} margin
 * @param {string}                   modifier
 * @return {Object} styles
 */
function sortPaddingData(margin, modifier) {
	if (null == margin) return {};

	// 数値 or 文字列指定のときはそのままセット
	if (typeof margin === "number" || typeof margin === "string") {
		return {
			[`--ls--margin${modifier}`]: maybeGetSpaceVar(margin) || null,
		};
	}

	// {X: val} がある場合 left, right に分解
	if (null != margin?.X) {
		margin.left = margin.X;
		margin.right = margin.X;
	}

	// {Y: val} がある場合 top, bottom に分解
	if (null != margin?.Y) {
		margin.top = margin.Y;
		margin.bottom = margin.Y;
	}

	// 全方向に指定がある場合、 --ls--margin にセット
	if (null != margin?.top && null != margin?.right && null != margin?.bottom && null != margin?.left) {
		return {
			[`--ls--margin${modifier}`]:
				`${maybeGetSpaceVar(margin.top)} ` +
				`${maybeGetSpaceVar(margin.right)} ` +
				`${maybeGetSpaceVar(margin.bottom)} ` +
				`${maybeGetSpaceVar(margin.left)}`,
		};
	}

	// それ以外は個別プロパティにセット
	return filterEmptyFromObj({
		[`--ls--mt${modifier}`]: maybeGetSpaceVar(margin.top) || null,
		[`--ls--mr${modifier}`]: maybeGetSpaceVar(margin.right) || null,
		[`--ls--mb${modifier}`]: maybeGetSpaceVar(margin.bottom) || null,
		[`--ls--ml${modifier}`]: maybeGetSpaceVar(margin.left) || null,
	});
}

/**
 * margin用のstyleオブジェクトを生成して返す
 *
 * @param {number | string | object} margin
 * @param {Object}                   margins
 * @return {Object} style
 */
export default function getMarginStyles(margin, margins = {}) {
	if (typeof margin === "number" || typeof margin === "string") {
		margins._ = margin;
	} else if (typeof margin === "object") {
		margins._ = margin;
	}

	return {
		...sortPaddingData(margins._, ""),
		...sortPaddingData(margins.sm, "--Qsm"),
		...sortPaddingData(margins.xs, "--Qxs"),
	};
}
