import maybeGetSpaceVar from "./maybeGetSpaceVar";
import filterEmptyFromObj from "./filterEmptyFromObj";

/* eslint eqeqeq: 0 */
// ↑ 0 の時の判定を考慮して 「null != hoge」を使用している。

/**
 *
 * @param {number | string | Object} padding
 * @param {string}                   modifier
 * @return {Object} styles
 */
function sortPaddingData(padding, modifier) {
	if (null == padding) return {};

	// 数値 or 文字列指定のときはそのままセット
	if (typeof padding === "number" || typeof padding === "string") {
		return {
			[`--ls--padding${modifier}`]: maybeGetSpaceVar(padding) || null,
		};
	}

	// {X: val} がある場合 left, right に分解
	if (null != padding?.X) {
		padding.left = padding.X;
		padding.right = padding.X;
	}

	// {Y: val} がある場合 top, bottom に分解
	if (null != padding?.Y) {
		padding.top = padding.Y;
		padding.bottom = padding.Y;
	}

	// 全方向に指定がある場合、 --ls--padding にセット
	if (null != padding?.top && null != padding?.right && null != padding?.bottom && null != padding?.left) {
		return {
			[`--ls--padding${modifier}`]:
				`${maybeGetSpaceVar(padding.top)} ` +
				`${maybeGetSpaceVar(padding.right)} ` +
				`${maybeGetSpaceVar(padding.bottom)} ` +
				`${maybeGetSpaceVar(padding.left)}`,
		};
	}

	// それ以外は個別プロパティにセット
	return filterEmptyFromObj({
		[`--ls--pt${modifier}`]: maybeGetSpaceVar(padding.top) || null,
		[`--ls--pr${modifier}`]: maybeGetSpaceVar(padding.right) || null,
		[`--ls--pb${modifier}`]: maybeGetSpaceVar(padding.bottom) || null,
		[`--ls--pl${modifier}`]: maybeGetSpaceVar(padding.left) || null,
	});
}

/**
 * padding用のstyleオブジェクトを生成して返す
 *
 * @param {number | string | object} padding
 * @param {Object}                   paddings
 * @return {Object} style
 */
export default function getPaddingStyles(padding, paddings = {}) {
	if (typeof padding === "number" || typeof padding === "string") {
		paddings._ = padding;
	} else if (typeof padding === "object") {
		paddings._ = padding;
	}

	return {
		...sortPaddingData(paddings._, ""),
		...sortPaddingData(paddings.sm, "--Qsm"),
		...sortPaddingData(paddings.xs, "--Qxs"),
	};
}
