import filterEmptyObj from '../functions/filterEmptyObj';
import { PRESETS } from '../presetVars';

const BREAK_POINTS = PRESETS.breakPoints;
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
export default function getPropBpObj(propVal, bpData = {}, filter = null) {
	let returnObj = bpData; // {sm,md,...}

	if (typeof propVal === 'string' || typeof propVal === 'number') {
		returnObj._ = propVal;
	} else if (Array.isArray(propVal)) {
		propVal.forEach((r, i) => {
			returnObj[`${BREAK_POINTS_ALL[i]}`] = r;
		});
	} else if (typeof propVal === 'object') {
		// breakpoint指定のオブジェクトか、ただのプロパティの成分オブジェクトかで処理を分ける
		if (hasBpKeys(propVal)) {
			returnObj = propVal;
		} else {
			returnObj._ = propVal;
		}
	}

	// 中身に filter() を適用
	if (null !== filter) {
		returnObj = Object.entries(returnObj).reduce((newObj, [key, r]) => {
			newObj[key] = filter(r);
			return newObj;
		}, {});
	}

	return filterEmptyObj(returnObj);
}
