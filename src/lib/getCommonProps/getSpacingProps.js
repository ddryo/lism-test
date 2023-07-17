import { isPresetValue, getMaybeSpaceVar } from '../index.js';

/* eslint eqeqeq: 0 */
// ↑ 0 の時の判定を考慮して 「null != hoge」を使用している。

// function isInt(val) {
// 	return !isNaN(parseInt(val));
// }

// top right bottom left の成分で解析する
function sortDirectionData(data) {
	if (null == data) return {};

	// 数値のときは all にそのままセット
	if (typeof data === 'number') {
		return { all: getMaybeSpaceVar(data) };
	}

	// pad="20 40 50"

	// 文字列指定のときは スペースで分解して各成分をvar変換してから再結合して返す
	if (typeof data === 'string') {
		// ... 2成分→X,Yとする？

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
export function sortSpacingData(initial, data, Q = '') {
	if (null == data) return {};

	if ('@_' === Q) Q = '';

	// const dataProps = [];
	const utils = [];
	const styles = {};

	// プリセット値はユーティリティクラス化 (paddingのみ)
	if (initial === 'p') {
		// 使用頻度多そうなものだけユーティリティ用意？
		// const presetList = ['0', '10', '20', '30', '40', '50'];

		if ('' === Q) {
			if (typeof data === 'object') {
				//  X,Y のみユーティリティがある
				if (isPresetValue('space', data.X)) {
					utils.push(`-${initial}X${Q}:${data.X}`);
					delete data.X;
				}
				if (isPresetValue('space', data.Y)) {
					utils.push(`-${initial}Y${Q}:${data.Y}`);
					delete data.Y;
				}
			} else if (isPresetValue('space', data)) {
				utils.push(`-${initial}${Q}:${data}`);

				// data が オブジェクトではなくそのままpreset値ならこの時点で解析終了
				return {
					styles,
					utils,
				};
			}
		}
	} else if (initial === 'm') {
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
					utils.push(`-m${direction[0]}:auto`);
					delete data[direction];
				}
			});
		}
	}

	// {all, top, right, bottom, left} の成分に整理して返す
	const space = sortDirectionData(data);

	const Qvar = Q.replace('@', '--');
	if (space.all) {
		utils.push(`-${initial}${Q}:`);
		styles[`--${initial}${Qvar}`] = space.all;
	} else {
		if (space.X) {
			utils.push(`-${initial}X${Q}:`);
			styles[`--${initial}X${Qvar}`] = space.X;
		}
		if (space.Y) {
			utils.push(`-${initial}Y${Q}:`);
			styles[`--${initial}Y${Qvar}`] = space.Y;
		}
		if (space.top) {
			utils.push(`-${initial}t${Q}:`);
			styles[`--${initial}t${Qvar}`] = space.top;
		}
		if (space.bottom) {
			utils.push(`-${initial}b${Q}:`);
			styles[`--${initial}b${Qvar}`] = space.bottom;
		}
		if (space.right) {
			utils.push(`-${initial}r${Q}:`);
			styles[`--${initial}r${Qvar}`] = space.right;
		}
		if (space.left) {
			utils.push(`-${initial}l${Q}:`);
			styles[`--${initial}l${Qvar}`] = space.left;
		}
	}
	return {
		utils,
		styles,
	};
}
