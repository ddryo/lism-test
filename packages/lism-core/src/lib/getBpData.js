import filterEmptyObj from './helper/filterEmptyObj';
import { BREAK_POINTS } from '../config';
const BREAK_POINTS_ALL = ['_', ...BREAK_POINTS];

function hasKeys(object, keys) {
	if (null == object) return false;
	return keys.some((key) => Object.prototype.hasOwnProperty.call(object, key));
}

// 'sm', 'md' などのいずれかのbpキーが object に存在するか
function hasBpKeys(data) {
	return hasKeys(data, BREAK_POINTS_ALL);
}

// クエリ対応プロパティの型を調べて規格化したObjを返す
// string, array, obj → {_, sm, md, ...} の型に変換
export default function getBpData(propVal) {
	let values = {};

	if (true === propVal) return { _: true };

	if (typeof propVal === 'string' || typeof propVal === 'number') {
		values._ = propVal;
	} else if (Array.isArray(propVal)) {
		propVal.forEach((r, i) => {
			values[`${BREAK_POINTS_ALL[i]}`] = r;
		});
	} else if (typeof propVal === 'object') {
		// breakpoint指定のオブジェクトか、ただのプロパティの成分オブジェクトかで処理を分ける
		if (hasBpKeys(propVal)) {
			values = propVal;
		} else {
			values._ = propVal;
		}
	}

	return filterEmptyObj(values);

	// return {
	// 	baseValue,
	// 	bpValues,
	// };

	// return filterEmptyObj(returnObj);
}
