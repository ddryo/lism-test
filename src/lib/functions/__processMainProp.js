// isEmptyObj;
import filterEmptyObj from './filterEmptyObj';
import { PRESETS } from '../presetVars';

const breakPoints = PRESETS.breakPoints;
const breakPointsAll = ['_', ...breakPoints];

export default function processMainProp({ mainProp, sm, md, lg, xl, filter }) {
	let returnObj = { sm, md, lg, xl };

	if (typeof mainProp === 'string' || typeof mainProp === 'number') {
		returnObj._ = mainProp;
	} else if (Array.isArray(mainProp)) {
		mainProp.forEach((r, i) => {
			returnObj[`${breakPointsAll[i - 1]}`] = r;
		});
	} else if (typeof mainProp === 'object') {
		returnObj = mainProp;
	}

	// 中身に filter()  を適用
	if (undefined !== filter) {
		returnObj = Object.entries(returnObj).reduce((newObj, [key, r]) => {
			newObj[key] = filter(r);
			return newObj;
		}, {});
	}

	return filterEmptyObj(returnObj);
}
