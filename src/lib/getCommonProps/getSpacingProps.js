import { isSpacePresetValue, getMaybeSpaceVar } from '../index.js';

/* eslint eqeqeq: 0 */
// ↑ 0 の時の判定を考慮して 「null != hoge」を使用している。

// function isInt(val) {
// 	return !isNaN(parseInt(val));
// }

// top right bottom left の成分で解析する
function getAnalyzedTrblData(data) {
	if (null == data) return {};

	// 数値のときは all にそのままセット
	if (typeof data === 'number') {
		return { all: getMaybeSpaceVar(data) };
	}

	// pad="20 40 50"

	// 文字列指定のときは スペースで分解して各成分をvar変換してから再結合して返す
	if (typeof data === 'string') {
		const strs = data.trim().split(' ');
		return { all: strs.map(getMaybeSpaceVar).join(' ') };
	}

	// 数値でもなく文字列でもなくオブジェクトでもない場合
	if (typeof data !== 'object') return {};

	// 各成分をCSS変数化。 （bool値はそのまま帰ってくるので data.join に影響はない）
	Object.keys(data).forEach((key) => {
		data[key] = getMaybeSpaceVar(data[key]);
	});

	// preset値 0~100 は、dataにセットして削除

	// X, Y 両方ある場合
	// if (null != data.X && null != data.Y) {
	// 	return { all: `${data.Y} ${data.X}` };
	// }

	// // X がある場合 top, bottom に分解
	// if (null != data.X) {
	// 	data.left = data.X;
	// 	data.right = data.X;
	// }

	// // Y がある場合 top, bottom に分解
	// if (null != data.Y) {
	// 	data.top = data.Y;
	// 	data.bottom = data.Y;
	// }

	// 最後の結合処理をスキップする場合はここでそのまま返す
	if (false === data.join) {
		return data;
	}

	// 全成分を持っている場合、1つに結合して all に セット
	if (null != data.top && null != data.right && null != data.bottom && null != data.left) {
		return {
			all: `${data.top} ${data.right} ${data.bottom} ${data.left}`,
		};
	}

	return data;
}

/**
 * クエリごとのデータをCSS変数化して返す
 * @param {number | string | Object} padding
 * @param {string}                   modifier
 * @return {Object} styles
 */
function getTheQueryData(n, data, Q = '') {
	if (null == data) return {};

	// const dataProps = [];
	const classNames = [];
	const styles = {};

	// プリセット値はユーティリティクラス化 (paddingのみ)
	if (n === 'p') {
		// 文字列指定のときは スペースで分解しておく
		// if (typeof data === 'string') {
		// 	const strs = data.trim().split(' ');
		// 	if (strs.length === 2) {
		// 		data = {
		// 			Y: strs[0],
		// 			X: strs[1],
		// 		};
		// 	} else if (strs.length === 3) {
		// 		data = {
		// 			top: strs[0],
		// 			X: strs[1],
		// 			bottom: strs[2],
		// 		};
		// 	} else if (strs.length === 4) {
		// 		data = {
		// 			top: strs[0],
		// 			right: strs[1],
		// 			bottom: strs[2],
		// 			left: strs[3],
		// 		};
		// 	}
		// }

		// 使用頻度少なそうなものだけ
		// const presetList = ['0', '10', '20', '30', '40', '50'];

		if ('' === Q) {
			if (typeof data === 'object') {
				// X,Y成分のみチェック
				if (isSpacePresetValue(data.X)) {
					classNames.push(`-${n}X${Q}:${data.X}`);
					delete data.X;
				}
				if (isSpacePresetValue(data.Y)) {
					classNames.push(`-${n}Y${Q}:${data.Y}`);
					delete data.Y;
				}
			} else if (isSpacePresetValue(data)) {
				classNames.push(`-${n}${Q}:${data}`);
				// data が オブジェクトではなくそのままpreset値ならこの時点で解析終了
				return {
					classNames,
				};
			}
		}
	} else if (n === 'm') {
		// marginはX,Yを分解しておく？

		// X がある場合 top, bottom に分解
		if (null != data.X) {
			data.left = data.X;
			data.right = data.X;
			delete data.X;
		}

		// Y がある場合 top, bottom に分解
		if (null != data.Y) {
			data.top = data.Y;
			data.bottom = data.Y;

			delete data.Y;
		}

		if ('' === Q && typeof data === 'object') {
			// "auto"だけユーティリティがある
			['top', 'right', 'bottom', 'left'].forEach((direction) => {
				if (data[direction] === 'auto') {
					classNames.push(`-m${direction[0]}:auto`);
					delete data[direction];
				}
			});
		}
	}

	// {all, top, right, bottom, left} の成分に整理して返す
	const space = getAnalyzedTrblData(data);

	const Qvar = Q.replace('@', '--');
	if (space.all) {
		classNames.push(`-${n}${Q}:`);
		styles[`--${n}${Qvar}`] = space.all;
	} else {
		if (space.X) {
			classNames.push(`-${n}X${Q}:`);
			styles[`--${n}X${Qvar}`] = space.X;
		}
		if (space.Y) {
			classNames.push(`-${n}Y${Q}:`);
			styles[`--${n}Y${Qvar}`] = space.Y;
		}
		if (space.top) {
			classNames.push(`-${n}t${Q}:`);
			styles[`--${n}t${Qvar}`] = space.top;
		}
		if (space.bottom) {
			classNames.push(`-${n}b${Q}:`);
			styles[`--${n}b${Qvar}`] = space.bottom;
		}
		if (space.right) {
			classNames.push(`-${n}r${Q}:`);
			styles[`--${n}r${Qvar}`] = space.right;
		}
		if (space.left) {
			classNames.push(`-${n}l${Q}:`);
			styles[`--${n}l${Qvar}`] = space.left;
		}
	}
	return {
		classNames,
		// dataProps,
		styles,
	};
}

/**
 * padding用のstyleオブジェクトを生成して返す
 *
 * @param {number | string | object} padding
 * @param {Object}                   paddings
 * @return {Object} style
 */
export function getPaddingProps(padding, paddings = {}) {
	if (undefined !== padding) {
		paddings._ = padding;
	}

	const pData = getTheQueryData('p', paddings._, '');
	const pDataQsm = getTheQueryData('p', paddings.sm, '@sm');
	const pDataQxs = getTheQueryData('p', paddings.xs, '@xs');

	return {
		classNames: [
			...(pData?.classNames || []),
			...(pDataQsm?.classNames || []),
			...(pDataQxs?.classNames || []),
		],
		// dataProps: [
		// 	...(pData?.dataProps || []),
		// 	...(pDataQsm?.dataProps || []),
		// 	...(pDataQxs?.dataProps || []),
		// ],
		styles: {
			...(pData?.styles || {}),
			...(pDataQsm?.styles || {}),
			...(pDataQxs?.styles || {}),
		},
	};
}

/**
 * margin用のstyleオブジェクトを生成して返す
 *
 * @param {number | string | object} margin
 * @param {Object}                   margins
 * @return {Object} style
 */
export function getMarginProps(margin, margins = {}) {
	if (undefined !== margin) {
		margins._ = margin;
	}

	const mData = getTheQueryData('m', margins._, '');
	const mDataQsm = getTheQueryData('m', margins.sm, '@sm');
	const mDataQxs = getTheQueryData('m', margins.xs, '@xs');

	return {
		classNames: [
			...(mData?.classNames || []),
			...(mDataQsm?.classNames || []),
			...(mDataQxs?.classNames || []),
		],
		styles: {
			...(mData?.styles || {}),
			...(mDataQsm?.styles || {}),
			...(mDataQxs?.styles || {}),
		},
	};
}
